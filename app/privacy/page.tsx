"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PrivacyPage() {
  const [isDark, setIsDark] = useState(true);

  // Sync scroll indicator
  const [activeSection, setActiveSection] = useState("section-1");

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const sections = [
    { id: "section-1", label: "1. Information Collected" },
    { id: "section-2", label: "2. Use of Information" },
    { id: "section-3", label: "3. Data Storage & Backends" },
    { id: "section-4", label: "4. Third-Party Integrations" },
    { id: "section-5", label: "5. Choices & Portability" },
    { id: "section-6", label: "6. Security Certifications" },
  ];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? "bg-[#09090b] text-[#fafafa]" : "bg-[#f8fafc] text-neutral-900"
      }`}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.04),transparent_50%)] pointer-events-none"></div>

      {/* Header */}
      <header
        className={`sticky top-0 z-30 border-b backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "border-neutral-800 bg-[#09090b]/80"
            : "border-neutral-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#0284c7] to-[#075985] p-1.5 border border-sky-400/20">
              <img
                src="/logo.svg"
                alt="Catalog IQ Logo"
                className="w-full h-full"
              />
            </div>
            <div className="leading-tight">
              <span className="text-xs font-bold uppercase tracking-tight text-white">
                CATALOG IQ
              </span>
              <p className="text-[7px] text-neutral-500 font-mono uppercase tracking-wider font-bold">
                Privacy Policy
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isDark
                  ? "border-neutral-800 hover:bg-neutral-900 text-yellow-400"
                  : "border-neutral-200 hover:bg-neutral-100 text-[#0284c7]"
              }`}
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                // Sun Icon
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-3.636l-.707.707M6.343 17.657l-.707-.707m0-12.728l.707.707m12.728 12.728l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <Link
              href="/"
              className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                isDark
                  ? "bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-800"
                  : "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 shadow-sm"
              }`}
            >
              Back to App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="mx-auto max-w-[1200px] px-5 py-12 flex flex-col md:flex-row gap-10">
        {/* Sticky Table of Contents sidebar */}
        <aside className="w-full md:w-1/4 md:sticky md:top-28 h-fit flex flex-col gap-5">
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#0c0c0e]/80 border-neutral-800"
                : "bg-white border-neutral-200 shadow-sm"
            }`}
          >
            <h3 className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-4">
              Sections
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map((sect) => (
                <a
                  key={sect.id}
                  href={`#${sect.id}`}
                  onClick={() => setActiveSection(sect.id)}
                  className={`text-xs font-medium py-1 transition-all hover:translate-x-1 flex items-center ${
                    activeSection === sect.id
                      ? "text-[#0284c7] font-bold"
                      : isDark
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {sect.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Panel */}
        <section className="w-full md:w-3/4 flex flex-col gap-8">
          {/* Header Title Hero card */}
          <div
            className={`p-8 rounded-3xl border transition-all flex flex-col gap-2.5 relative overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-[#0c0c0e] to-neutral-950 border-neutral-800"
                : "bg-gradient-to-br from-white to-neutral-50 border-neutral-200 shadow-sm"
            }`}
          >
            <span className="inline-flex max-w-fit px-3 py-1 rounded bg-[#0284c7]/10 text-[#0284c7] text-[10px] font-bold font-mono border border-[#0284c7]/20 uppercase tracking-wider">
              Compliance Standard
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-bold">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-400 font-medium">
              Last Updated: August 16, 2026 &bull; Effective Immediately
            </p>
          </div>

          {/* Core Legal text */}
          <div
            className={`flex flex-col gap-10 leading-relaxed text-xs md:text-sm font-medium ${
              isDark ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            {/* Section 1 */}
            <div
              id="section-1"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                1. Information We Collect
              </h2>
              <p>
                Catalog IQ collects specific data types necessary to operate the
                Services and ensure enterprise catalog security:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>
                  <strong>Account Credentials:</strong> Email address, hashed
                  passwords, and session JWT parameters.
                </li>
                <li>
                  <strong>Submissions:</strong> Raw inventory files (CSV, XML,
                  logs) uploaded to the ingestion pipeline.
                </li>
                <li>
                  <strong>System Keys:</strong> Optional custom Gemini API keys
                  provided to override default rules fallback logic.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div
              id="section-2"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                2. How We Use Information
              </h2>
              <p>We process your uploaded product sheets only to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>
                  Standardize text measurements (e.g. converting `5"` to `5
                  in`).
                </li>
                <li>Verify safety certifications against regulatory bodies.</li>
                <li>Generate traceability summaries and catalog schemas.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div
              id="section-3"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                3. Target Storage Nodes & Backends
              </h2>
              <p>
                To maintain semantic relational mappings, product catalog
                entities are saved in memory or stored across encrypted nodes:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>
                  <strong>Pinecone:</strong> Custom 1536-dimension vector
                  indices.
                </li>
                <li>
                  <strong>Neo4j:</strong> Relational graph nodes mapping part
                  substitutions.
                </li>
                <li>
                  <strong>Postgres ERP:</strong> Permanent schema exports.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div
              id="section-4"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                4. Third-Party AI Integrations
              </h2>
              <p>
                Catalog IQ utilizes generative AI platforms (including Google
                Generative AI APIs) to complete catalog classification requests.
              </p>
              <p>
                Data submitted via the LLM Extraction Agent is governed by
                Google Gemini's terms of service and enterprise privacy
                protection rules, ensuring inputs are not used to train global
                public models.
              </p>
            </div>

            {/* Section 5 */}
            <div
              id="section-5"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                5. Data Portability & Deletion Choices
              </h2>
              <p>
                You can reset your ingestion queue, remove local storage
                cookies, or erase your custom API key credentials at any time
                directly through the dashboard interfaces.
              </p>
              <p>
                To request permanent deletion of your enterprise catalog
                workspace and associated Neo4j nodes, contact legal
                administrators.
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="scroll-mt-28 flex flex-col gap-3.5">
              <h2 className="text-lg font-serif font-bold text-white">
                6. Security Certifications
              </h2>
              <p>
                Catalog IQ maintains TLS 1.3 encryption on edge pipelines,
                secure JWT storage variables, and active audit check logging.
              </p>
              <p className="mt-4">
                If you have questions regarding privacy compliance, contact
                legal at{" "}
                <code className="text-[#0284c7] font-mono">
                  privacy@catalogiq.ai
                </code>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black mt-20">
        <div className="mx-auto max-w-[1200px] px-5 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-semibold gap-4">
          <p>&copy; 2026 Catalog IQ OS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Security Compliance
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
