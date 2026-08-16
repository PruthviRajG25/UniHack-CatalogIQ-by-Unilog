"use client";

import { useEffect, useState } from "react";
import { AuthPage } from "@/components/auth/auth-page";
import { Dashboard } from "@/components/catalog/dashboard";
import { PipelineManager } from "@/components/catalog/pipeline-manager";
import { PitchDeck } from "@/components/catalog/pitch-deck";
import { ReviewQueue } from "@/components/catalog/review-queue";
import { SourcesAgentsView } from "@/components/catalog/sources-agents-view";
import { StructuredTable } from "@/components/catalog/structured-table";
import { type ActiveTab, Header } from "@/components/layout/header";
import {
  ENRICHED_CATALOG_SAMPLES,
  type EnrichedProduct,
  RAW_CATALOG,
  type RawProduct,
  simulateEnrichment,
} from "@/lib/data";

export default function CatalogIQApp() {
  const [isDark, setIsDark] = useState(true);

  // Sync theme to root element html class
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = saved ? saved === "dark" : true;
    setIsDark(initialTheme);

    const root = window.document.documentElement;
    if (initialTheme) {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [apiKey, setApiKey] = useState("");

  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [rawProducts, setRawProducts] = useState<RawProduct[]>(RAW_CATALOG);
  const [enrichedProducts, setEnrichedProducts] = useState<EnrichedProduct[]>(
    ENRICHED_CATALOG_SAMPLES,
  );
  const [selectedRawProduct, setSelectedRawProduct] =
    useState<RawProduct | null>(null);

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setActiveTab("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  // Trigger enrichment on a specific raw product
  const _handleStartEnrichment = (product: RawProduct) => {
    setSelectedRawProduct(product);
    setActiveTab("pipeline");
  };

  // Add the newly enriched product to the database
  const handleEnrichmentComplete = (enriched: EnrichedProduct) => {
    if (
      !enrichedProducts.some((p) => p.Mfg_Part_Num === enriched.Mfg_Part_Num)
    ) {
      setEnrichedProducts((prev) => [enriched, ...prev]);
    }
    setRawProducts((prev) =>
      prev.filter((p) => p.Mfg_Part_Num !== enriched.Mfg_Part_Num),
    );
  };

  // Trigger enrichment on all raw products in batch
  const handleEnrichAll = () => {
    rawProducts.forEach((p, idx) => {
      const enriched = simulateEnrichment(p, idx);
      if (
        !enrichedProducts.some((item) => item.Mfg_Part_Num === p.Mfg_Part_Num)
      ) {
        setEnrichedProducts((prev) => [...prev, enriched]);
      }
    });
    setRawProducts([]);
    setActiveTab("commerce");
  };

  // Save changes from editor
  const handleUpdateProduct = (updated: EnrichedProduct) => {
    setEnrichedProducts((prev) =>
      prev.map((p) => (p.Mfg_Part_Num === updated.Mfg_Part_Num ? updated : p)),
    );
  };

  // If not authenticated, render the Auth view
  if (!isLoggedIn) {
    return (
      <AuthPage
        onLoginSuccess={handleLoginSuccess}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userEmail={userEmail}
        onLogout={handleLogout}
        onRunEnrichment={handleEnrichAll}
        rawProductsCount={rawProducts.length}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Workspace Panels Content */}
      <main className="flex-grow overflow-hidden">
        {activeTab === "dashboard" && (
          <Dashboard
            rawCount={rawProducts.length}
            enrichedCount={enrichedProducts.length}
            onNavigate={(tab) => setActiveTab(tab as ActiveTab)}
          />
        )}
        {activeTab === "pipeline" && (
          <PipelineManager
            rawProducts={rawProducts}
            onEnrichAll={handleEnrichAll}
            selectedProduct={selectedRawProduct}
            setSelectedProduct={setSelectedRawProduct}
            onEnrichmentComplete={handleEnrichmentComplete}
            onNavigateToCommerce={() => setActiveTab("commerce")}
            apiKey={apiKey}
            onResetQueue={() => {
              setRawProducts(RAW_CATALOG);
              setSelectedRawProduct(null);
            }}
            onAddSampleProduct={() => {
              const newSample = {
                Mfg_Part_Num: `SAMPLE-${Math.floor(1000 + Math.random() * 9000)}`,
                Part_Desc:
                  "Lutron Diva LED+ Dimmer Switch for Dimmable LED, 150-Watt Single-Pole or 3-Way, White",
                E1_Brand: "LUTRON",
                Unilog_Brand: "-- No Unilog Brand --",
                DIB_Brand: "-- No DIB Brand --",
                Part_Manuf: "Lutron Electronics (LUTRO)",
              };
              setRawProducts((prev) => [newSample, ...prev]);
            }}
          />
        )}
        {activeTab === "commerce" && (
          <StructuredTable
            products={enrichedProducts}
            onUpdateProduct={handleUpdateProduct}
          />
        )}
        {activeTab === "review" && <ReviewQueue />}
        {activeTab === "sources" && (
          <SourcesAgentsView
            products={enrichedProducts}
            apiKey={apiKey}
            setApiKey={setApiKey}
          />
        )}
        {activeTab === "pitch" && <PitchDeck />}
      </main>

      {/* Traceable Footer */}
      <footer className="border-t border-[#1f1f23] bg-black">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-2 px-5 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            CATALOG IQ — every published attribute carries a traceable source
            and a confidence score.
          </p>
          <p className="font-mono">
            graph v4.2 · {34180 + enrichedProducts.length} SKUs · last sync
            03:12 UTC
          </p>
        </div>
      </footer>
    </div>
  );
}
