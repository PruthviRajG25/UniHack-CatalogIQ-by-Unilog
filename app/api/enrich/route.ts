import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { product, apiKey } = await req.json();

    // Choose active key: user-defined key from headers/body, or system environment key
    const activeKey =
      apiKey || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";

    if (!activeKey) {
      return NextResponse.json({
        success: false,
        error:
          "No Gemini API Key found. Falling back to local rules-based engine.",
        fallback: true,
      });
    }

    // Initialize Generative AI client using correct SDK class
    const genAI = new GoogleGenerativeAI(activeKey);

    // Use gemini-1.5-flash or gemini-2.5-flash
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are an expert product data enrichment agent for industrial manufacturing catalogs.
    Analyze this raw product record and enrich it with commerce-ready attributes:
    
    Part Number: "${product.Mfg_Part_Num}"
    Description: "${product.Part_Desc}"
    Manufacturer: "${product.Part_Manuf}"
    
    Your output MUST be a valid JSON object matching this schema:
    {
      "Product_Name": "General item noun (e.g., 'Sanding Belt', 'Cut-Off Disc', 'Washer', 'Dryer')",
      "BRAND_NAME": "Cleaned brand name (e.g., 'Diablo', '3M', 'Milwaukee', 'Mirka')",
      "MANUFACTURER_NAME": "Full manufacturer corporation name",
      "Classpath": "Categorization path separated by '>' (e.g., 'Tools>Abrasives>Cutting Discs')",
      "Dept": "Top level department name",
      "Class": "Class name",
      "Fine": "Fine description name",
      "LENGTH": "Length value as number or decimal (e.g. 18)",
      "LENGTH_UOM": "Length unit (e.g. in, ft)",
      "WIDTH": "Width value (e.g. 0.5)",
      "WIDTH_UOM": "Width unit",
      "HEIGHT": "Height value",
      "HEIGHT_UOM": "Height unit",
      "WEIGHT": "Weight value",
      "WEIGHT_UOM": "Weight unit",
      "ATTRIBUTE_LABEL 1": "First spec name (e.g. 'Grit')",
      "ATTRIBUTE_VALUE 1": "First spec value (e.g. 'P150')",
      "ATTRIBUTE_UOM 1": "First spec unit (e.g. 'Grit' or leave empty)",
      "ATTRIBUTE_LABEL 2": "Second spec name",
      "ATTRIBUTE_VALUE 2": "Second spec value",
      "ATTRIBUTE_UOM 2": "Second spec unit",
      "Standard_Approvals": "Pipe-separated approvals (e.g., 'UL Listed|ENERGY STAR|NSF Certified')",
      "Prop_65": "Does it need CA Prop 65 label? 'Yes' or 'No'",
      "Validation_Log": "Detailed log describing the data validation results"
    }

    Return ONLY the raw JSON block. Do not include markdown formatting or wrapper text.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Cleanup markdown fences if returned
    const cleanText = responseText.replace(/```json|```/gi, "").trim();
    const data = JSON.parse(cleanText);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : "Failed to contact Gemini API";
    return NextResponse.json({
      success: false,
      error: errMessage,
      fallback: true,
    });
  }
}
