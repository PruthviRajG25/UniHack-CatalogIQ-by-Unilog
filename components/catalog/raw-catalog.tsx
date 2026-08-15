import type { RawProduct } from "@/lib/data";

interface RawCatalogProps {
  products: RawProduct[];
  onStartEnrichment: (product: RawProduct) => void;
  onEnrichAll: () => void;
  onResetQueue?: () => void;
}

export function RawCatalog({
  products,
  onStartEnrichment,
  onEnrichAll,
  onResetQueue,
}: RawCatalogProps) {
  return (
    <div className="flex flex-col gap-5 w-full font-sans">
      {/* Action Header */}
      <div className="flex justify-between items-center bg-white border border-[#e4e4e7] p-4 rounded-xl shadow-sm">
        <div className="flex flex-col">
          <span className="text-[10px] text-neutral-400 font-bold uppercase">
            Queue Size
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-0.5">
            {products.length} Pending Records
          </span>
        </div>

        {products.length > 0 && (
          <button
            onClick={onEnrichAll}
            className="bg-[#f4f4f5] hover:bg-[#e4e4e7] text-neutral-800 border border-[#e4e4e7] font-bold text-xs px-3.5 py-2 rounded-lg transition-all active:scale-95"
          >
            ⚡ Batch Ingest All
          </button>
        )}
      </div>

      {/* Raw queue items table */}
      <div className="bg-white border border-[#e4e4e7] rounded-xl overflow-hidden shadow-sm">
        {products.length === 0 ? (
          <div className="p-8 text-center flex flex-col items-center gap-3">
            <span className="text-xs text-neutral-400 font-semibold">
              No raw items in queue. All records processed.
            </span>
            {onResetQueue && (
              <button
                onClick={onResetQueue}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-[11px] px-4 py-2 rounded-lg transition-all active:scale-95 shadow-sm mt-1"
              >
                🔄 Reset Ingestion Queue
              </button>
            )}
          </div>
        ) : (
          <table className="min-w-full divide-y divide-[#e4e4e7] text-left text-xs">
            <thead className="bg-[#f8fafc]">
              <tr>
                <th className="px-5 py-3 font-bold text-neutral-400 uppercase">
                  Part Number
                </th>
                <th className="px-5 py-3 font-bold text-neutral-400 uppercase">
                  Description
                </th>
                <th className="px-5 py-3 font-bold text-neutral-400 uppercase text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e4e7] bg-transparent">
              {products.map((p, index) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-50/50 transition-colors"
                >
                  <td className="px-5 py-4 font-mono font-bold text-[#0284c7] truncate max-w-[130px]">
                    {p.Mfg_Part_Num}
                  </td>
                  <td className="px-5 py-4 text-neutral-600 font-semibold truncate max-w-[200px]">
                    {p.Part_Desc}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => onStartEnrichment(p)}
                      className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-2.5 py-1.5 rounded font-bold text-[10px] transition-all active:scale-95 shadow-sm"
                    >
                      Enrich &rarr;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
