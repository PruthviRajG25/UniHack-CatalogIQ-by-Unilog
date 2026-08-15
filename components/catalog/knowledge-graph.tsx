import { useState } from "react";
import type { EnrichedProduct } from "@/lib/data";

interface KnowledgeGraphProps {
  products: EnrichedProduct[];
}

interface Node {
  id: string;
  label: string;
  type: "product" | "brand" | "category" | "standard";
  color: string;
}

interface Edge {
  source: string;
  target: string;
}

export function KnowledgeGraph({ products }: KnowledgeGraphProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Generate nodes & edges based on enriched products
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const addedNodes = new Set<string>();

  // Helper to add nodes unique
  const addNode = (
    id: string,
    label: string,
    type: "product" | "brand" | "category" | "standard",
    color: string,
  ) => {
    if (!addedNodes.has(id)) {
      nodes.push({ id, label, type, color });
      addedNodes.add(id);
    }
  };

  // Build Graph
  products.slice(0, 10).forEach((p) => {
    const prodId = `prod-${p.Mfg_Part_Num}`;
    const brandId = `brand-${p.BRAND_NAME}`;
    const catId = `cat-${p.Class}`;

    // Add Product node - Brand blue
    addNode(
      prodId,
      p.Mfg_Part_Num,
      "product",
      "border-[#0284c7] bg-sky-50 text-[#0284c7]",
    );

    // Add Brand node & link - Violet
    addNode(
      brandId,
      p.BRAND_NAME,
      "brand",
      "border-mural-purple bg-purple-50 text-mural-purple",
    );
    edges.push({ source: prodId, target: brandId });

    // Add Category node & link - Green
    addNode(
      catId,
      p.Class,
      "category",
      "border-mural-green bg-green-50 text-mural-green",
    );
    edges.push({ source: prodId, target: catId });

    // Standards mapping - Orange
    if (p.Standard_Approvals) {
      p.Standard_Approvals.split("|").forEach((std) => {
        const stdId = `std-${std.trim()}`;
        addNode(
          stdId,
          std.trim(),
          "standard",
          "border-mural-orange bg-orange-50 text-mural-orange",
        );
        edges.push({ source: prodId, target: stdId });
      });
    }
  });

  const activeNode = nodes.find((n) => n.id === selectedNode);

  return (
    <div className="flex flex-col h-full overflow-hidden text-neutral-900 font-sans bg-transparent">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-sans font-bold tracking-tight text-neutral-950 font-sans">
          Semantic Knowledge Graph
        </h2>
        <p className="text-sm text-neutral-400 font-medium mt-1">
          Visualizing entity mappings between product nodes, brands, categories,
          and regulatory approvals.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 mb-4 items-center bg-white p-3 rounded-xl border border-[#e4e4e7] text-[9px] font-bold uppercase tracking-wider text-neutral-500 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#0284c7] rounded-full"></span>{" "}
          Product
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-mural-purple rounded-full"></span>{" "}
          Brand
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-mural-green rounded-full"></span>{" "}
          Category
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-mural-orange rounded-full"></span>{" "}
          Standard
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="flex-1 bg-white rounded-xl border border-[#e4e4e7] relative overflow-hidden flex items-center justify-center p-8 shadow-inner">
        {/* Node Network Map */}
        <div className="relative w-full h-full flex flex-wrap gap-6 items-center justify-center content-center max-w-4xl">
          {nodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`px-3.5 py-2 rounded-full border text-[10px] font-bold font-mono transition-all shadow-sm ${node.color} ${
                selectedNode === node.id
                  ? "ring-4 ring-sky-100 scale-110 z-20"
                  : "opacity-90 hover:opacity-100 hover:scale-105"
              }`}
            >
              {node.label}
            </button>
          ))}

          {/* SVG Connection rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25] stroke-neutral-200 stroke-[1]">
            <circle cx="50%" cy="50%" r="140" fill="none" />
            <circle cx="50%" cy="50%" r="260" fill="none" />
          </svg>
        </div>

        {/* Selected Entity details overlay card */}
        {selectedNode && activeNode && (
          <div className="absolute bottom-6 right-6 w-80 bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-2xl animate-fadeIn z-20 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#e4e4e7] pb-3">
              <div>
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                  Entity Details
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mt-0.5">
                  {activeNode.label}
                </h4>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-neutral-400 hover:text-neutral-900 font-bold text-lg"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-2.5 text-xs font-semibold">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Node Type:</span>
                <span className="font-bold font-mono text-[#0284c7] uppercase text-[10px]">
                  {activeNode.type}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-[#e4e4e7] pt-2.5">
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                  Active Links
                </span>
                <div className="flex flex-col gap-1.5 mt-1 max-h-24 overflow-y-auto">
                  {edges
                    .filter(
                      (e) =>
                        e.source === selectedNode || e.target === selectedNode,
                    )
                    .map((edge, i) => {
                      const linkedId =
                        edge.source === selectedNode
                          ? edge.target
                          : edge.source;
                      const linkedNode = nodes.find((n) => n.id === linkedId);
                      if (!linkedNode) return null;
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-[#f8fafc] border border-[#e4e4e7] p-1.5 rounded text-[10px]"
                        >
                          <span className="truncate max-w-[120px] font-bold text-neutral-700">
                            {linkedNode.label}
                          </span>
                          <span className="text-[8px] font-bold text-neutral-400 uppercase">
                            {linkedNode.type}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
