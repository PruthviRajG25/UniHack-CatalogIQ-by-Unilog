import { useState } from "react";

interface ReviewItem {
  id: string;
  sku: string;
  attribute: string;
  v1: string;
  v2: string;
  pct: number;
  agent: string;
  notes: string;
}

export function ReviewQueue() {
  const [items, setItems] = useState<ReviewItem[]>([
    {
      id: "1",
      sku: "GBX-2210-HD",
      attribute: "Gear ratio",
      v1: "28.4",
      v2: "29.1",
      pct: 51,
      agent: "Auditor",
      notes:
        "Spec sheet indicates standard speed is 28.4, but torque log reports 29.1.",
    },
    {
      id: "2",
      sku: "SNS-8807-PT",
      attribute: "ATEX marking",
      v1: "Ex ia IIC T4",
      v2: "Ex ib IIC T4",
      pct: 60,
      agent: "NamePlateVLM",
      notes:
        "Safety label photo has slight blur. Checking intrinsic safety zone.",
    },
    {
      id: "3",
      sku: "VLV-1039-BF",
      attribute: "Kv value",
      v1: "—",
      v2: "170 m³/h",
      pct: 18,
      agent: "GapFiller",
      notes:
        "Derived flow velocity from nominal size. Needs certification verify.",
    },
    {
      id: "4",
      sku: "HYD-4412-SS",
      attribute: "Mounting style",
      v1: "MP3",
      v2: "MF1",
      pct: 64,
      agent: "SpecMiner",
      notes:
        "Drawing block maps MP3 mounting, but raw parts inventory catalog lists MF1.",
    },
  ]);

  const [activeItem, setActiveItem] = useState<ReviewItem | null>(null);

  const handleResolve = (id: string, _preferredValue: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setActiveItem(null);
  };

  return (
    <div className="flex w-full overflow-hidden h-screen max-h-screen text-neutral-900 font-sans">
      {/* Workbench Queue List */}
      <div className="flex-grow flex flex-col p-8 overflow-hidden h-full bg-[#f8fafc] border-r border-[#e4e4e7]">
        <div>
          <h2 className="text-3xl font-sans font-bold text-neutral-950 tracking-tight">
            Review Queue Workbench
          </h2>
          <p className="text-sm text-neutral-400 font-medium mt-1">
            Reconcile attribute mismatches flagged by active agents during
            catalog runs.
          </p>
        </div>

        {/* Table list */}
        <div className="bg-white border border-[#e4e4e7] rounded-xl overflow-hidden shadow-sm mt-6 flex-grow flex flex-col">
          <div className="overflow-y-auto flex-1">
            {items.length === 0 ? (
              <div className="p-20 text-center flex flex-col items-center justify-center gap-4">
                <span className="text-5xl">🎉</span>
                <h3 className="font-bold text-neutral-800">
                  All conflicts resolved
                </h3>
                <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                  Great job! The human-in-the-loop review queue is completely
                  clean.
                </p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-[#e4e4e7] text-left text-xs">
                <thead className="bg-[#f8fafc] sticky top-0">
                  <tr>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase">
                      Product SKU
                    </th>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase">
                      Flagged Attribute
                    </th>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase">
                      Extraction values comparison
                    </th>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase">
                      Confidence
                    </th>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase">
                      Flagged Agent
                    </th>
                    <th className="px-6 py-4 font-bold text-neutral-400 uppercase text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e4e4e7] bg-transparent">
                  {items.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className={`hover:bg-neutral-50/50 transition-colors cursor-pointer ${
                        activeItem?.id === item.id ? "bg-neutral-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 font-mono font-bold text-[#0284c7]">
                        {item.sku}
                      </td>
                      <td className="px-6 py-4 font-semibold text-neutral-700">
                        {item.attribute}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="bg-neutral-50 border border-neutral-200 px-2.5 py-1 font-mono text-neutral-500">
                            {item.v1}
                          </span>
                          <span className="text-neutral-400 font-bold uppercase text-[9px]">
                            vs
                          </span>
                          <span className="bg-neutral-50 border border-neutral-200 px-2.5 py-1 font-mono font-bold text-neutral-900">
                            {item.v2}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                            <div
                              className="h-full bg-yellow-500 rounded-full"
                              style={{ width: `${item.pct}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {item.pct}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-neutral-500 font-mono">
                        {item.agent}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveItem(item);
                          }}
                          className="bg-neutral-900 hover:bg-neutral-800 text-white px-3 py-1.5 rounded-lg font-bold text-[10px] transition-all"
                        >
                          Resolve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Side Inspect drawer */}
      {activeItem && (
        <div className="w-[450px] bg-white border-l border-[#e4e4e7] flex flex-col justify-between h-full shrink-0 shadow-2xl relative z-30 animate-slideLeft">
          <div className="p-6 border-b border-[#e4e4e7] bg-[#f8fafc]">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              Conflict Resolution
            </span>
            <h3 className="text-xl font-bold text-neutral-950 mt-1 leading-snug">
              {activeItem.sku}
            </h3>
          </div>

          <div className="p-6 flex-grow overflow-y-auto flex flex-col gap-6 text-sm">
            <div className="flex flex-col gap-1.5">
              <span className="text-neutral-500 text-xs font-semibold uppercase">
                Flagged parameter
              </span>
              <span className="font-bold text-neutral-900 text-lg">
                {activeItem.attribute}
              </span>
            </div>

            <div className="flex flex-col gap-2 border-t border-neutral-100 pt-4">
              <span className="text-neutral-500 text-xs font-semibold uppercase">
                Resolution Notes
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed bg-[#f8fafc] p-3 rounded-lg border border-[#e4e4e7] font-medium">
                {activeItem.notes}
              </p>
            </div>

            {/* Selection choices */}
            <div className="flex flex-col gap-3 border-t border-neutral-100 pt-4">
              <span className="text-neutral-500 text-xs font-semibold uppercase">
                Select Preferred Value
              </span>

              <button
                onClick={() => handleResolve(activeItem.id, activeItem.v1)}
                className="flex justify-between items-center bg-[#f8fafc] border border-[#e4e4e7] hover:border-[#0284c7] p-4 rounded-xl text-left transition-all active:scale-[0.99] group"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase">
                    Option A (Standard/Ingested)
                  </span>
                  <span className="font-bold text-neutral-700 font-mono text-sm mt-0.5">
                    {activeItem.v1}
                  </span>
                </div>
                <span className="text-neutral-400 group-hover:text-[#0284c7] transition-colors">
                  &rarr;
                </span>
              </button>

              <button
                onClick={() => handleResolve(activeItem.id, activeItem.v2)}
                className="flex justify-between items-center bg-[#f8fafc] border border-[#e4e4e7] hover:border-[#0284c7] p-4 rounded-xl text-left transition-all active:scale-[0.99] group"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase">
                    Option B (Derived/Extracted)
                  </span>
                  <span className="font-bold text-neutral-950 font-mono text-sm mt-0.5">
                    {activeItem.v2}
                  </span>
                </div>
                <span className="text-neutral-400 group-hover:text-[#0284c7] transition-colors">
                  &rarr;
                </span>
              </button>
            </div>
          </div>

          <div className="p-6 border-t border-[#e4e4e7] bg-[#f8fafc]">
            <button
              onClick={() => setActiveItem(null)}
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold py-2.5 rounded-xl text-xs w-full text-center transition-all border border-[#e4e4e7]"
            >
              Close Resolver
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
