import { useState } from "react";
import { type EnrichedProduct, FULL_CSV_COLUMNS } from "@/lib/data";

interface StructuredTableProps {
  products: EnrichedProduct[];
  onUpdateProduct: (updated: EnrichedProduct) => void;
}

export function StructuredTable({
  products,
  onUpdateProduct,
}: StructuredTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [activeItem, setActiveItem] = useState<EnrichedProduct | null>(null);

  // Live validation feedback state
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.Mfg_Part_Num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.Part_Desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.BRAND_NAME.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "all" || p.BRAND_NAME === selectedBrand;
    const matchesStatus =
      selectedStatus === "all" || p.Validation_Status === selectedStatus;

    return matchesSearch && matchesBrand && matchesStatus;
  });

  // Get unique brands list
  const uniqueBrands = Array.from(new Set(products.map((p) => p.BRAND_NAME)));

  // Validate fields in real time
  const validateField = (key: string, val: string): string => {
    if (key === "UPC") {
      if (val && !/^\d{12}$/.test(val)) {
        return "UPC must be exactly 12 digits.";
      }
    }
    if (key === "GTIN") {
      if (val && !/^\d{14}$/.test(val)) {
        return "GTIN must be exactly 14 digits.";
      }
    }
    if (["LENGTH", "WIDTH", "HEIGHT", "WEIGHT"].includes(key)) {
      if (val && Number.isNaN(Number(val))) {
        return "Value must be a valid number.";
      }
    }
    return "";
  };

  const handleFieldChange = (key: string, val: string) => {
    if (!activeItem) return;

    // Live validation check
    const errMsg = validateField(key, val);
    setValidationErrors((prev) => ({
      ...prev,
      [key]: errMsg,
    }));

    const updated = { ...activeItem, [key]: val };

    // Automatically update status based on errors
    const hasErrors = Object.values({
      ...validationErrors,
      [key]: errMsg,
    }).some((msg) => msg !== "");
    updated.Validation_Status = hasErrors ? "Error" : "Valid";
    updated.Validation_Log = hasErrors
      ? "Format check failed. Please review specifications warnings."
      : "AI Extraction Success. Attributes parsed and verified.";

    setActiveItem(updated);
    onUpdateProduct(updated);
  };

  const generateCSV = () => {
    // 1. Headers Row
    const headerRow = FULL_CSV_COLUMNS.join(",");

    // 2. Data Rows
    const dataRows = filteredProducts.map((p) => {
      return FULL_CSV_COLUMNS.map((col) => {
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
          val = p[col] || "";
        }

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
    <div className="flex w-full overflow-hidden h-screen max-h-screen text-neutral-900 bg-[#f8fafc] font-sans">
      {/* Table Grid Side */}
      <div className="flex-1 flex flex-col p-8 overflow-hidden h-full">
        {/* Title and Top Actions */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-fadeIn">
          <div>
            <h2 className="text-3xl font-sans font-bold text-neutral-950 tracking-tight">
              Structured Catalog
            </h2>
            <p className="text-sm text-neutral-400 font-medium mt-1 font-sans">
              Fully enriched and validated product intelligence schema.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white p-4 rounded-xl border border-[#e4e4e7] mb-6 flex flex-wrap gap-4 items-center justify-between shadow-sm">
          <div className="flex gap-4 items-center flex-grow max-w-md">
            <span className="text-sm text-neutral-400">🔍</span>
            <input
              type="text"
              placeholder="Search by part num, description, brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm bg-transparent border-0 border-b border-[#e4e4e7] focus:border-[#0284c7] focus:ring-0 pb-1 text-neutral-950 placeholder-neutral-400 focus:outline-none"
            />
          </div>

          <div className="flex gap-3 flex-wrap items-center">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="text-xs font-semibold text-neutral-700 bg-white border border-[#e4e4e7] px-3.5 py-2 rounded-lg focus:outline-none shadow-sm cursor-pointer"
            >
              <option value="all">All Brands</option>
              {uniqueBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-xs font-semibold text-neutral-700 bg-white border border-[#e4e4e7] px-3.5 py-2 rounded-lg focus:outline-none shadow-sm cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="Valid">Valid</option>
              <option value="Warning">Warning</option>
              <option value="Error">Error</option>
            </select>

            <button
              onClick={generateCSV}
              className="inline-flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all hover:brightness-105 active:scale-95 bg-[#0284c7] border border-[#0284c7] text-white font-semibold h-8 rounded-lg px-3.5 text-xs shadow-sm"
            >
              📥 Export CSV
            </button>
          </div>
        </div>

        {/* Spreadsheet Table Grid */}
        <div className="bg-white rounded-xl border border-[#e4e4e7] overflow-hidden flex-grow flex flex-col shadow-sm">
          <div className="overflow-x-auto overflow-y-auto flex-1 max-h-full">
            <table className="min-w-full divide-y divide-[#e4e4e7] text-left border-collapse table-fixed text-xs">
              <thead className="bg-neutral-50 sticky top-0 z-10 border-b border-[#e4e4e7]">
                <tr>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[180px] sticky left-0 bg-[#f8fafc] z-20 shadow-[2px_0_0_0_rgba(0,0,0,0.05)] border-r border-[#e4e4e7]">
                    Mfg Part Num
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[220px]">
                    Product Name
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[120px]">
                    Brand
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[280px]">
                    Classpath Mapping
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[100px]">
                    Validation
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[100px]">
                    Quality Score
                  </th>
                  <th className="px-6 py-4 font-bold text-neutral-500 uppercase tracking-wider w-[100px] text-right">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e4e7] bg-transparent">
                {filteredProducts.map((p, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      setActiveItem(p);
                      setValidationErrors({});
                    }}
                    className={`hover:bg-[#f8fafc] transition-colors cursor-pointer ${
                      activeItem?.Mfg_Part_Num === p.Mfg_Part_Num
                        ? "bg-neutral-50"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-[#0284c7] font-mono sticky left-0 bg-white z-10 shadow-[2px_0_0_0_rgba(0,0,0,0.05)] border-r border-[#e4e4e7] truncate">
                      {p.Mfg_Part_Num}
                    </td>
                    <td className="px-6 py-4 text-neutral-800 font-semibold truncate">
                      {p.Product_Name}
                    </td>
                    <td className="px-6 py-4 text-neutral-500 font-medium truncate">
                      {p.BRAND_NAME}
                    </td>
                    <td className="px-6 py-4 text-neutral-500 font-medium truncate">
                      {p.Classpath}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          p.Validation_Status === "Valid"
                            ? "bg-green-50 text-mural-green"
                            : p.Validation_Status === "Warning"
                              ? "bg-yellow-50 text-mural-orange"
                              : "bg-red-50 text-red-500"
                        }`}
                      >
                        {p.Validation_Status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-neutral-700">
                      {p.Quality_Score}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(p);
                          setValidationErrors({});
                        }}
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-[#e4e4e7] px-2.5 py-1.5 rounded-md font-bold text-[10px] transition-all"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Drawer Panel: Multi-column detail inspector */}
      {activeItem && (
        <div className="w-[500px] bg-white border-l border-[#e4e4e7] flex flex-col justify-between h-full shrink-0 shadow-2xl relative z-30 animate-slideLeft">
          {/* Header */}
          <div className="p-6 border-b border-[#e4e4e7] flex justify-between items-center bg-[#f8fafc]">
            <div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Item Details Inspector
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1 leading-snug truncate max-w-[360px]">
                {activeItem.Product_Name}
              </h3>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="text-neutral-400 hover:text-neutral-800 text-2xl font-bold p-1"
            >
              &times;
            </button>
          </div>

          {/* Form Content Tabs */}
          <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
            {/* 1. Core Info */}
            <div className="flex flex-col gap-4 border-b border-[#e4e4e7] pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                General Information
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Mfg Part Number
                  </label>
                  <input
                    type="text"
                    value={activeItem.Mfg_Part_Num}
                    onChange={(e) =>
                      handleFieldChange("Mfg_Part_Num", e.target.value)
                    }
                    className="text-xs font-semibold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 focus:border-[#0284c7]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Product SKU
                  </label>
                  <input
                    type="text"
                    value={activeItem.SKU}
                    onChange={(e) => handleFieldChange("SKU", e.target.value)}
                    className="text-xs font-semibold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 focus:border-[#0284c7]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={activeItem.BRAND_NAME}
                    onChange={(e) =>
                      handleFieldChange("BRAND_NAME", e.target.value)
                    }
                    className="text-xs font-semibold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 focus:border-[#0284c7]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Manufacturer
                  </label>
                  <input
                    type="text"
                    value={activeItem.MANUFACTURER_NAME}
                    onChange={(e) =>
                      handleFieldChange("MANUFACTURER_NAME", e.target.value)
                    }
                    className="text-xs font-semibold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 focus:border-[#0284c7]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Taxonomy */}
            <div className="flex flex-col gap-4 border-b border-[#e4e4e7] pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Taxonomy & Category
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Classpath
                  </label>
                  <input
                    type="text"
                    value={activeItem.Classpath}
                    onChange={(e) =>
                      handleFieldChange("Classpath", e.target.value)
                    }
                    className="text-xs font-semibold bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 focus:border-[#0284c7]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-neutral-400 font-bold uppercase">
                      Dept
                    </label>
                    <input
                      type="text"
                      value={activeItem.Dept}
                      onChange={(e) =>
                        handleFieldChange("Dept", e.target.value)
                      }
                      className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-neutral-400 font-bold uppercase">
                      Class
                    </label>
                    <input
                      type="text"
                      value={activeItem.Class}
                      onChange={(e) =>
                        handleFieldChange("Class", e.target.value)
                      }
                      className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-neutral-400 font-bold uppercase">
                      Fine
                    </label>
                    <input
                      type="text"
                      value={activeItem.Fine}
                      onChange={(e) =>
                        handleFieldChange("Fine", e.target.value)
                      }
                      className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Physical Specs */}
            <div className="flex flex-col gap-4 border-b border-[#e4e4e7] pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Physical Dimensions
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        Length
                      </label>
                      <input
                        type="text"
                        value={activeItem.LENGTH}
                        onChange={(e) =>
                          handleFieldChange("LENGTH", e.target.value)
                        }
                        className={`text-xs font-semibold border p-2 rounded-lg focus:outline-none text-neutral-900 ${
                          validationErrors.LENGTH
                            ? "border-red-500 bg-red-50"
                            : "bg-[#f8fafc] border-[#e4e4e7]"
                        }`}
                      />
                    </div>
                    <div className="w-16 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        UOM
                      </label>
                      <input
                        type="text"
                        value={activeItem.LENGTH_UOM}
                        onChange={(e) =>
                          handleFieldChange("LENGTH_UOM", e.target.value)
                        }
                        className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                      />
                    </div>
                  </div>
                  {validationErrors.LENGTH && (
                    <span className="text-[9px] text-red-500 font-bold">
                      {validationErrors.LENGTH}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        Width
                      </label>
                      <input
                        type="text"
                        value={activeItem.WIDTH}
                        onChange={(e) =>
                          handleFieldChange("WIDTH", e.target.value)
                        }
                        className={`text-xs font-semibold border p-2 rounded-lg focus:outline-none text-neutral-900 ${
                          validationErrors.WIDTH
                            ? "border-red-500 bg-red-50"
                            : "bg-[#f8fafc] border-[#e4e4e7]"
                        }`}
                      />
                    </div>
                    <div className="w-16 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        UOM
                      </label>
                      <input
                        type="text"
                        value={activeItem.WIDTH_UOM}
                        onChange={(e) =>
                          handleFieldChange("WIDTH_UOM", e.target.value)
                        }
                        className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                      />
                    </div>
                  </div>
                  {validationErrors.WIDTH && (
                    <span className="text-[9px] text-red-500 font-bold">
                      {validationErrors.WIDTH}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        Weight
                      </label>
                      <input
                        type="text"
                        value={activeItem.WEIGHT}
                        onChange={(e) =>
                          handleFieldChange("WEIGHT", e.target.value)
                        }
                        className={`text-xs font-semibold border p-2 rounded-lg focus:outline-none text-neutral-900 ${
                          validationErrors.WEIGHT
                            ? "border-red-500 bg-red-50"
                            : "bg-[#f8fafc] border-[#e4e4e7]"
                        }`}
                      />
                    </div>
                    <div className="w-16 flex flex-col gap-1">
                      <label className="text-[10px] text-neutral-400 font-bold uppercase">
                        UOM
                      </label>
                      <input
                        type="text"
                        value={activeItem.WEIGHT_UOM}
                        onChange={(e) =>
                          handleFieldChange("WEIGHT_UOM", e.target.value)
                        }
                        className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                      />
                    </div>
                  </div>
                  {validationErrors.WEIGHT && (
                    <span className="text-[9px] text-red-500 font-bold">
                      {validationErrors.WEIGHT}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    value={activeItem.Country_Of_Origin}
                    onChange={(e) =>
                      handleFieldChange("Country_Of_Origin", e.target.value)
                    }
                    className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                  />
                </div>
              </div>
            </div>

            {/* 4. Codes */}
            <div className="flex flex-col gap-4 border-b border-[#e4e4e7] pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Product Codes
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    UPC (12-digit)
                  </label>
                  <input
                    type="text"
                    value={activeItem.UPC}
                    onChange={(e) => handleFieldChange("UPC", e.target.value)}
                    className={`text-xs font-semibold border p-2.5 rounded-lg focus:outline-none font-mono text-neutral-900 ${
                      validationErrors.UPC
                        ? "border-red-500 bg-red-50"
                        : "bg-[#f8fafc] border-[#e4e4e7]"
                    }`}
                  />
                  {validationErrors.UPC && (
                    <span className="text-[9px] text-red-500 font-bold">
                      {validationErrors.UPC}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    GTIN (14-digit)
                  </label>
                  <input
                    type="text"
                    value={activeItem.GTIN || ""}
                    onChange={(e) => handleFieldChange("GTIN", e.target.value)}
                    className={`text-xs font-semibold border p-2.5 rounded-lg focus:outline-none font-mono text-neutral-900 ${
                      validationErrors.GTIN
                        ? "border-red-500 bg-red-50"
                        : "bg-[#f8fafc] border-[#e4e4e7]"
                    }`}
                  />
                  {validationErrors.GTIN && (
                    <span className="text-[9px] text-red-500 font-bold">
                      {validationErrors.GTIN}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 5. Specs */}
            <div className="flex flex-col gap-4 border-b border-[#e4e4e7] pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Abrasives & Appliance Specs
              </h4>
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((num) => {
                  const labelKey = `ATTRIBUTE_LABEL ${num}`;
                  const valueKey = `ATTRIBUTE_VALUE ${num}`;
                  const uomKey = `ATTRIBUTE_UOM ${num}`;
                  return (
                    <div key={num} className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-neutral-400 font-bold uppercase">
                          Spec {num} Name
                        </label>
                        <input
                          type="text"
                          value={activeItem[labelKey] || ""}
                          onChange={(e) =>
                            handleFieldChange(labelKey, e.target.value)
                          }
                          className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                          placeholder="e.g. Grit"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-neutral-400 font-bold uppercase">
                          Spec {num} Value
                        </label>
                        <input
                          type="text"
                          value={activeItem[valueKey] || ""}
                          onChange={(e) =>
                            handleFieldChange(valueKey, e.target.value)
                          }
                          className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                          placeholder="e.g. P150"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-neutral-400 font-bold uppercase">
                          Spec {num} UOM
                        </label>
                        <input
                          type="text"
                          value={activeItem[uomKey] || ""}
                          onChange={(e) =>
                            handleFieldChange(uomKey, e.target.value)
                          }
                          className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900"
                          placeholder="UOM"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6. Copy */}
            <div className="flex flex-col gap-4 pb-6">
              <h4 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Marketing Copy & Media
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Short Description
                  </label>
                  <textarea
                    rows={2}
                    value={activeItem.SHORT_DESC}
                    onChange={(e) =>
                      handleFieldChange("SHORT_DESC", e.target.value)
                    }
                    className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 leading-relaxed resize-none font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-neutral-400 font-bold uppercase">
                    Product Image Tag
                  </label>
                  <input
                    type="text"
                    value={activeItem.Product_Image}
                    onChange={(e) =>
                      handleFieldChange("Product_Image", e.target.value)
                    }
                    className="text-xs bg-[#f8fafc] border border-[#e4e4e7] p-2.5 rounded-lg focus:outline-none text-neutral-900 font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Save Button */}
          <div className="p-6 border-t border-[#e4e4e7] bg-[#f8fafc] flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[9px] text-white ${
                  activeItem.Validation_Status === "Valid"
                    ? "bg-mural-green"
                    : "bg-red-500"
                }`}
              >
                {activeItem.Validation_Status === "Valid" ? "✓" : "!"}
              </span>
              <span className="text-xs text-neutral-500 font-bold font-sans">
                {activeItem.Validation_Status === "Valid"
                  ? `Validated — score ${activeItem.Quality_Score}%`
                  : "Validation errors detected"}
              </span>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="ml-auto bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-5 py-2.5 rounded-xl transition-all active:scale-95 text-xs shadow-md"
            >
              Approve Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
