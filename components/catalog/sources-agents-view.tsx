import { useState } from "react";
import type { EnrichedProduct } from "@/lib/data";
import { KnowledgeGraph } from "./knowledge-graph";

interface SourcesAgentsViewProps {
  products: EnrichedProduct[];
  apiKey: string;
  setApiKey: (key: string) => void;
}

export function SourcesAgentsView({
  products,
  apiKey,
  setApiKey,
}: SourcesAgentsViewProps) {
  const [_dbStatus, _setDbStatus] = useState({
    neo4j: "Connected",
    pinecone: "Connected",
    postgres: "Connected",
    gemini: apiKey ? "Active" : "Fallback-rules",
  });

  return (
    <div className="flex w-full overflow-hidden h-screen max-h-screen text-neutral-900 font-sans">
      {/* Left panel: Semantic Knowledge Graph */}
      <div className="w-2/3 flex flex-col border-r border-[#e4e4e7] p-8 overflow-hidden h-full bg-[#f8fafc]">
        <KnowledgeGraph products={products} />
      </div>

      {/* Right panel: System Configurations & API Key */}
      <div className="w-1/3 flex flex-col p-8 overflow-y-auto h-full bg-white gap-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-neutral-950 font-sans">
            Sources & Agents Config
          </h3>
          <p className="text-xs text-neutral-400 font-medium mt-1">
            Configure vector stores, relationship graphs, and AI pipeline keys.
          </p>
        </div>

        {/* Gemini API Key input card */}
        <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧬</span>
            <h4 className="font-bold text-sm text-neutral-900">
              Gemini generative AI Engine
            </h4>
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">
            Enter your Gemini API key to enable live web crawls and parameter
            extractions. If omitted, the orchestrator automatically runs on
            pre-calculated local parsing mappings.
          </p>
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] text-neutral-400 font-bold uppercase">
              Gemini API Key
            </label>
            <input
              type="password"
              placeholder="••••••••••••••••••••••••"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-[#f8fafc] border border-[#e4e4e7] rounded-lg px-3 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-[#0284c7] placeholder-neutral-300 font-mono"
            />
          </div>
          <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-bold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg">
            <span
              className={`w-2 h-2 rounded-full ${apiKey ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`}
            ></span>
            {apiKey
              ? "Gemini-2.5-Flash Active (Custom API Key)"
              : "Rules Fallback Engine Active"}
          </div>
        </div>

        {/* Database Status Card */}
        <div className="bg-white border border-[#e4e4e7] rounded-xl p-5 flex flex-col gap-4 shadow-sm">
          <h4 className="font-bold text-sm text-neutral-900">
            Target Storage Nodes
          </h4>

          <div className="flex flex-col gap-2.5 text-xs font-semibold text-neutral-600">
            <div className="flex justify-between items-center bg-[#f8fafc] p-2 rounded border border-[#e4e4e7]">
              <span>Neo4j Graph Database</span>
              <span className="text-mural-green font-bold uppercase text-[9px] tracking-wider">
                Connected
              </span>
            </div>
            <div className="flex justify-between items-center bg-[#f8fafc] p-2 rounded border border-[#e4e4e7]">
              <span>Pinecone Vector Store</span>
              <span className="text-mural-green font-bold uppercase text-[9px] tracking-wider">
                Connected
              </span>
            </div>
            <div className="flex justify-between items-center bg-[#f8fafc] p-2 rounded border border-[#e4e4e7]">
              <span>ERP Postgres Inventory</span>
              <span className="text-mural-green font-bold uppercase text-[9px] tracking-wider">
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* System parameters summary */}
        <div className="text-[10px] text-neutral-400 leading-relaxed font-bold uppercase tracking-wider">
          &bull; LangGraph version: v1.4.2
          <br />
          &bull; Pinecone index size: 1536 dim
          <br />
          &bull; Neo4j triples: {34180 + products.length} items
          <br />
          &bull; Host latency: 18ms
        </div>
      </div>
    </div>
  );
}
