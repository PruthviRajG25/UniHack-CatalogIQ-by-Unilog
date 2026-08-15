import { useState } from "react";
import {
  type EnrichedProduct,
  type RawProduct,
  simulateEnrichment,
} from "@/lib/data";

interface EnrichmentHubProps {
  selectedProduct: RawProduct | null;
  onEnrichmentComplete: (enriched: EnrichedProduct) => void;
  onNavigateToCommerce: () => void;
}

interface LogLine {
  text: string;
  type: "info" | "search" | "extract" | "validate" | "success";
  timestamp: string;
}

export function EnrichmentHub({
  selectedProduct,
  onEnrichmentComplete,
  onNavigateToCommerce,
}: EnrichmentHubProps) {
  const [pipelineState, setPipelineState] = useState<
    "idle" | "running" | "completed"
  >("idle");
  const [activeStep, setActiveStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<LogLine[]>([]);
  const [finalResult, setFinalResult] = useState<EnrichedProduct | null>(null);

  // Interactive Configuration State
  const [enabledAgents, setEnabledAgents] = useState({
    ingest: true,
    search: true,
    extract: true,
    taxonomy: true,
    compliance: true,
  });

  const steps = [
    { id: "ingest", label: "Ingestion Ingest", icon: "📥" },
    { id: "search", label: "Web Search spec lookup", icon: "🔍" },
    { id: "extract", label: "LLM Extraction", icon: "🧬" },
    { id: "taxonomy", label: "Taxonomy Classification", icon: "🗂" },
    { id: "compliance", label: "Compliance & Validation", icon: "🛡️" },
  ];

  const activeSteps = steps.filter(
    (step) => enabledAgents[step.id as keyof typeof enabledAgents],
  );

  const addLog = (
    text: string,
    type: "info" | "search" | "extract" | "validate" | "success",
  ) => {
    const timestamp = new Date().toLocaleTimeString();
    setTerminalLogs((prev) => [...prev, { text, type, timestamp }]);
  };

  const startPipeline = () => {
    if (!selectedProduct) return;

    setPipelineState("running");
    setActiveStep(0);
    setTerminalLogs([]);
    setFinalResult(null);

    let currentStepIndex = 0;
    const executeNextStep = () => {
      if (currentStepIndex >= activeSteps.length) {
        // Pipeline complete
        const enrichedVal = simulateEnrichment(
          selectedProduct,
          Math.floor(Math.random() * 100),
        );

        let finalScore = Number(enrichedVal.Quality_Score);
        const disabledCount = Object.values(enabledAgents).filter(
          (val) => !val,
        ).length;
        finalScore = Math.max(40, finalScore - disabledCount * 12);
        enrichedVal.Quality_Score = String(finalScore);

        setFinalResult(enrichedVal);
        onEnrichmentComplete(enrichedVal);
        setPipelineState("completed");
        setActiveStep(activeSteps.length);

        addLog(
          `Pipeline successful! Structured record generated. Quality Score: ${finalScore}%`,
          "success",
        );
        return;
      }

      const step = activeSteps[currentStepIndex];
      setActiveStep(currentStepIndex);

      if (step.id === "ingest") {
        addLog(
          `Initializing Ingestion Agent for Part: ${selectedProduct.Mfg_Part_Num}`,
          "info",
        );
        addLog(`Description: ${selectedProduct.Part_Desc}`, "info");
        addLog(`Manufacturer mapping: ${selectedProduct.Part_Manuf}`, "info");
      } else if (step.id === "search") {
        addLog(`Launching Web Search Agent...`, "search");
        addLog(
          `Querying search indexes: "${selectedProduct.Part_Desc} specifications catalog sheet"`,
          "search",
        );
        addLog(
          `Reference matched: www.industry-database.com/parts/${selectedProduct.Mfg_Part_Num}`,
          "search",
        );
      } else if (step.id === "extract") {
        addLog(`Launching LLM Attribute Extraction Agent...`, "extract");
        addLog(
          `Extracting dimensions, metrics, and attribute sets...`,
          "extract",
        );
        const temp = simulateEnrichment(selectedProduct, 0);
        addLog(`Extracted Product Name: "${temp.Product_Name}"`, "extract");
        addLog(`Extracted Brand Mapping: "${temp.BRAND_NAME}"`, "extract");
      } else if (step.id === "taxonomy") {
        addLog(`Launching Taxonomy & Categorization Agent...`, "info");
        const temp = simulateEnrichment(selectedProduct, 0);
        addLog(`Mapped classpath: "${temp.Classpath}"`, "info");
      } else if (step.id === "compliance") {
        addLog(`Launching Compliance & Validation Agent...`, "validate");
        addLog(
          `Evaluating regulatory compliance approvals (UL, NSF, OSHA, CEE)...`,
          "validate",
        );
        addLog(`Verifying Proposition 65 warning requirements...`, "validate");
      }

      currentStepIndex++;
      setTimeout(executeNextStep, 1500);
    };

    setTimeout(executeNextStep, 500);
  };

  const handleToggleAgent = (key: keyof typeof enabledAgents) => {
    setEnabledAgents((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col gap-6 w-full text-neutral-900 font-sans">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-sans font-bold text-neutral-950 tracking-tight">
          AI Agent Pipeline
        </h2>
        <p className="text-sm text-neutral-400 font-medium mt-1">
          Orchestrate parallel sub-agents to parse, extract, classify, and
          validate catalog records.
        </p>
      </div>

      {selectedProduct === null && pipelineState === "idle" ? (
        <div className="flex flex-col items-center justify-center bg-white border border-dashed border-neutral-200 rounded-xl py-20 px-6 text-center shadow-sm">
          <span className="text-5xl mb-6">⚙️</span>
          <h3 className="text-lg font-bold text-neutral-800">
            No product selected
          </h3>
          <p className="text-sm text-neutral-400 max-w-sm mt-2 mb-6">
            Please choose an item from the Raw Catalog view to trigger the
            multi-agent AI pipeline.
          </p>
          <button
            onClick={onNavigateToCommerce}
            className="bg-[#0284c7] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-[#0369a1] transition-all shadow-sm"
          >
            Review Enriched Catalog Instead
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full">
          {/* Interactive Agent Config Bar */}
          {pipelineState === "idle" && (
            <div className="bg-neutral-50 p-6 rounded-xl border border-[#e4e4e7] flex flex-col gap-4 shadow-sm">
              <h3 className="font-bold text-xs text-neutral-500 uppercase tracking-wider">
                Pipeline Config Parameters
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {steps.map((step) => {
                  const isChecked =
                    enabledAgents[step.id as keyof typeof enabledAgents];
                  return (
                    <label
                      key={step.id}
                      className={`flex flex-col items-center gap-2 border p-3.5 rounded-xl cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#0284c7] bg-sky-50 text-[#0284c7] font-bold"
                          : "border-neutral-200 text-neutral-400 bg-white hover:bg-neutral-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          handleToggleAgent(
                            step.id as keyof typeof enabledAgents,
                          )
                        }
                        className="hidden"
                      />
                      <span className="text-xl">{step.icon}</span>
                      <span className="text-[9px] font-bold text-center leading-tight">
                        {step.label}
                      </span>
                    </label>
                  );
                })}
              </div>
              <button
                onClick={startPipeline}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3 rounded-xl text-xs transition-all w-full shadow-sm mt-2"
              >
                🚀 Run Enrichment Pipeline
              </button>
            </div>
          )}

          {/* Step Progress bar */}
          {pipelineState !== "idle" && (
            <div className="bg-white p-6 rounded-xl border border-[#e4e4e7] shadow-sm flex flex-col gap-4">
              <h3 className="font-bold text-xs text-neutral-400 uppercase tracking-wider">
                Pipeline Steps
              </h3>
              <div className="flex justify-between items-center relative pt-2">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-100 -translate-y-4"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-mural-green -translate-y-4 transition-all duration-500"
                  style={{
                    width: `${(Math.min(activeStep, activeSteps.length - 1) / Math.max(activeSteps.length - 1, 1)) * 100}%`,
                  }}
                ></div>

                {activeSteps.map((step, index) => {
                  const isCompleted = activeStep > index;
                  const isActive = activeStep === index;
                  return (
                    <div
                      key={step.id}
                      className="flex flex-col items-center gap-2 relative z-10"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all font-bold ${
                          isCompleted
                            ? "bg-[#0284c7] border-[#0284c7] text-white"
                            : isActive
                              ? "bg-white border-[#0284c7] text-[#0284c7] ring-4 ring-sky-100 animate-pulse"
                              : "bg-white border-neutral-200 text-neutral-400"
                        }`}
                      >
                        {isCompleted ? "✓" : step.icon}
                      </div>
                      <span
                        className={`text-[10px] font-semibold tracking-wider text-center max-w-[90px] leading-tight ${
                          isActive
                            ? "text-[#0284c7] font-bold"
                            : "text-neutral-500"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Terminal Console - Dark for CLI logs contrast */}
          {pipelineState !== "idle" && (
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden shadow-xl flex flex-col h-[280px]">
              <div className="bg-neutral-900/60 px-5 py-2.5 border-b border-neutral-900 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono text-[9px] text-neutral-500 font-bold uppercase tracking-wider">
                  agent-orchestrator-console
                </span>
                <div></div>
              </div>

              <div className="p-5 font-mono text-[11px] text-neutral-300 overflow-y-auto flex-1 flex flex-col gap-2.5">
                {terminalLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-neutral-600 font-semibold shrink-0 select-none">
                      [{log.timestamp}]
                    </span>
                    <span
                      className={
                        log.type === "success"
                          ? "text-mural-green font-bold"
                          : log.type === "search"
                            ? "text-mural-blue"
                            : log.type === "extract"
                              ? "text-mural-violet"
                              : log.type === "validate"
                                ? "text-mural-orange"
                                : "text-neutral-300"
                      }
                    >
                      {log.text}
                    </span>
                  </div>
                ))}
                {pipelineState === "running" && (
                  <div className="flex gap-1.5 items-center text-neutral-500 mt-2 italic select-none">
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    Agent processing...
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Comparative Summary */}
          {pipelineState === "completed" && finalResult && (
            <div className="bg-white p-6 rounded-xl border border-[#e4e4e7] shadow-lg flex flex-col gap-5 animate-fadeIn">
              <div className="border-b border-neutral-100 pb-4 flex justify-between items-start">
                <div>
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                    Enriched Summary
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-0.5 leading-snug truncate max-w-[240px]">
                    {finalResult.Product_Name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex px-2 py-0.5 rounded bg-orange-50 text-[#0284c7] text-[10px] font-bold font-mono border border-orange-100">
                      {finalResult.Mfg_Part_Num}
                    </span>
                    <span className="inline-flex px-2 py-0.5 rounded bg-blue-50 text-neutral-600 text-[10px] font-bold">
                      {finalResult.BRAND_NAME}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                    Quality Score
                  </span>
                  <p className="text-2xl font-bold text-[#0284c7] font-mono mt-0.5">
                    {finalResult.Quality_Score}%
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-xs font-semibold">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 font-medium">
                    Quality Score Improvement
                  </span>
                  <span className="text-mural-green font-bold">
                    20% &rarr; {finalResult.Quality_Score}%
                  </span>
                </div>
                <div className="flex flex-col gap-1 border-t border-neutral-100 pt-3">
                  <span className="text-neutral-400 text-[9px] font-bold uppercase tracking-wider">
                    Category Mapping
                  </span>
                  <span className="font-bold text-neutral-800 break-words">
                    {finalResult.Classpath}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 border-t border-neutral-100 pt-3">
                  <span className="text-neutral-400 text-[9px] font-bold uppercase tracking-wider">
                    Validation Notes
                  </span>
                  <p className="text-[11px] text-neutral-600 bg-neutral-50 border border-neutral-200/60 p-3 rounded-lg leading-relaxed font-medium">
                    {finalResult.Validation_Log}
                  </p>
                </div>
              </div>

              <button
                onClick={onNavigateToCommerce}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3 rounded-xl transition-all text-center w-full shadow-sm text-xs mt-2"
              >
                Inspect in Structured Catalog
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
