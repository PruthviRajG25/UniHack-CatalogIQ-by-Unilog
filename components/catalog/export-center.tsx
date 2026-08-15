import { type EnrichedProduct, FULL_CSV_COLUMNS } from "@/lib/data";

interface ExportCenterProps {
  products: EnrichedProduct[];
}

export function ExportCenter({ products }: ExportCenterProps) {
  const generateCSV = () => {
    // 1. Headers Row
    const headerRow = FULL_CSV_COLUMNS.join(",");

    // 2. Data Rows
    const dataRows = products.map((p) => {
      return FULL_CSV_COLUMNS.map((col) => {
        // Map schema columns to actual product values or format appropriately
        let val = "";

        if (col === "Mfg_Part_Num") val = p.Mfg_Part_Num || "";
        else if (col === "Part_Desc") val = p.Part_Desc || "";
        else if (col === "MANUFACTURER_NAME") val = p.MANUFACTURER_NAME || "";
        else if (col === "BRAND_NAME") val = p.BRAND_NAME || "";
        else if (col === "PART_NUMBER") val = p.PART_NUMBER || "";
        else if (col === "Dept") val = p.Dept || "";
        else if (col === "Class") val = p.Class || "";
        else if (col === "Fine") val = p.Fine || "";
        else if (col === "Classpath") val = p.Classpath || "";
        else if (col === "SHORT_DESC") val = p.SHORT_DESC || "";
        else if (col === "LONG_DESC1") val = p.LONG_DESC1 || "";
        else if (col === "MARKETING_DESCRIPTION")
          val = p.MARKETING_DESCRIPTION || "";
        else if (col === "Product Name") val = p.Product_Name || "";
        else if (col === "UPC") val = p.UPC || "";
        else if (col === "GTIN") val = p.GTIN || "";
        else if (col === "UNSPSC") val = p.UNSPSC || "";
        else if (col === "Warranty") val = p.Warranty || "";
        else if (col === "List Price") val = p.List_Price || "";
        else if (col === "LENGTH") val = p.LENGTH || "";
        else if (col === "LENGTH_UOM") val = p.LENGTH_UOM || "";
        else if (col === "HEIGHT") val = p.HEIGHT || "";
        else if (col === "HEIGHT_UOM") val = p.HEIGHT_UOM || "";
        else if (col === "WIDTH") val = p.WIDTH || "";
        else if (col === "WIDTH_UOM") val = p.WIDTH_UOM || "";
        else if (col === "WEIGHT") val = p.WEIGHT || "";
        else if (col === "WEIGHT_UOM") val = p.WEIGHT_UOM || "";
        else if (col === "Product Image") val = p.Product_Image || "";
        else if (col === "Country Of Origin") val = p.Country_Of_Origin || "";
        else if (col === "Standard/Approvals") val = p.Standard_Approvals || "";
        else if (col === "Prop 65") val = p.Prop_65 || "";
        else if (col === "Actual Image (Yes/No)") val = "Yes";
        else if (
          col.startsWith("ATTRIBUTE_LABEL") ||
          col.startsWith("ATTRIBUTE_VALUE") ||
          col.startsWith("ATTRIBUTE_UOM")
        ) {
          // Attribute mappings
          val = p[col] || "";
        }

        // Escape commas and quotes for standard CSV structure
        const escaped = String(val).replace(/"/g, '""');
        return `"${escaped}"`;
      }).join(",");
    });

    const csvContent = [headerRow, ...dataRows].join("\n");

    // 3. Trigger Download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "catalog_iq_enriched_output.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-8 w-full p-8 overflow-y-auto max-h-screen">
      <div>
        <h2 className="text-3xl font-sans font-bold text-neutral-900">
          Export & Publish Center
        </h2>
        <p className="text-sm text-neutral-500 font-medium">
          Export the structured commerce catalog into schema-compliant CSV
          output files.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Info Panel */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-6">
          <h3 className="font-bold text-lg text-neutral-900">
            Export Specifications
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed font-medium">
            This option exports all current catalog data. The output CSV file
            formats are built in exact alignment with the 150+ column
            manufacturer intelligence specification schema, including details
            like attribute mappings, classification taxonomy paths, standard
            regulatory compliance codes, and media URLs.
          </p>

          <div className="flex flex-col gap-3 text-xs font-semibold text-neutral-500 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
            <div className="flex justify-between">
              <span>Total Export Rows:</span>
              <span className="font-bold text-neutral-800">
                {products.length} Products
              </span>
            </div>
            <div className="flex justify-between border-t border-neutral-200/50 pt-2">
              <span>Total Columns:</span>
              <span className="font-bold text-neutral-800">
                158 columns (MFR URL to Actual Image)
              </span>
            </div>
            <div className="flex justify-between border-t border-neutral-200/50 pt-2">
              <span>File Encoding:</span>
              <span className="font-bold text-neutral-800">
                UTF-8 CSV (Comma-Separated)
              </span>
            </div>
          </div>

          <button
            onClick={generateCSV}
            className="bg-mural-green text-black hover:bg-mural-green/90 font-bold py-3.5 rounded-xl transition-all text-center w-full shadow-md text-sm"
          >
            📥 Download Commerce CSV
          </button>
        </div>

        {/* Right Schema Column Inspect Panel */}
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col gap-6 h-[450px] overflow-hidden">
          <h3 className="font-bold text-lg text-neutral-900">
            Output Column Header Map
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-2">
            {FULL_CSV_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-neutral-50 border p-2 rounded-lg text-xs font-medium"
              >
                <span className="text-neutral-500 font-mono">
                  Column {idx + 1}
                </span>
                <span className="font-bold text-neutral-800 font-mono">
                  {col}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
