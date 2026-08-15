import type { EnrichedProduct, RawProduct } from "@/lib/data";
import { EnrichmentHub } from "./enrichment-hub";
import { RawCatalog } from "./raw-catalog";

interface PipelineManagerProps {
  rawProducts: RawProduct[];
  onEnrichAll: () => void;
  selectedProduct: RawProduct | null;
  setSelectedProduct: (product: RawProduct | null) => void;
  onEnrichmentComplete: (enriched: EnrichedProduct) => void;
  onNavigateToCommerce: () => void;
  onResetQueue?: () => void;
  onAddSampleProduct?: () => void;
  apiKey: string;
}

export function PipelineManager({
  rawProducts,
  onEnrichAll,
  selectedProduct,
  setSelectedProduct,
  onEnrichmentComplete,
  onNavigateToCommerce,
  onResetQueue,
  onAddSampleProduct,
  apiKey,
}: PipelineManagerProps) {
  const handleSelectRaw = (prod: RawProduct) => {
    setSelectedProduct(prod);
  };

  return (
    <div className="flex w-full overflow-hidden h-screen max-h-screen text-neutral-900 font-sans">
      {/* Left panel: Raw queue list */}
      <div className="w-1/2 flex flex-col border-r border-[#e4e4e7] p-8 overflow-hidden h-full bg-[#f8fafc]">
        <div>
          <h2 className="text-3xl font-sans font-bold text-neutral-950 tracking-tight">
            Data Ingestion Pipeline
          </h2>
          <p className="text-sm text-neutral-400 font-medium mt-1">
            Select an unstructured item from the queue to run the AI
            orchestrator.
          </p>
        </div>

        <div className="mt-6 flex-grow overflow-y-auto pr-2">
          <RawCatalog
            products={rawProducts}
            onStartEnrichment={handleSelectRaw}
            onEnrichAll={onEnrichAll}
            onResetQueue={onResetQueue}
            onAddSampleProduct={onAddSampleProduct}
          />
        </div>
      </div>

      {/* Right panel: Multi-agent active consoles */}
      <div className="w-1/2 flex flex-col p-8 overflow-hidden h-full bg-white">
        <EnrichmentHub
          selectedProduct={selectedProduct}
          onEnrichmentComplete={onEnrichmentComplete}
          onNavigateToCommerce={onNavigateToCommerce}
          apiKey={apiKey}
        />
      </div>
    </div>
  );
}
