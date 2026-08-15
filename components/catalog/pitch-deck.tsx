import { useEffect, useState } from "react";

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Catalog IQ",
      subtitle: "Automated Product Intelligence for Industrial Manufacturing",
      bg: "bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800",
      content: (
        <div className="flex flex-col items-center justify-center text-center py-8 gap-8 animate-fadeIn">
          <div className="w-20 h-20 bg-mural-green rounded-3xl flex items-center justify-center font-serif text-5xl font-bold text-black shadow-2xl animate-bounce">
            IQ
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
            Catalog IQ
          </h3>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto leading-relaxed font-medium">
            Transforming unstructured manufacturer logs and specification
            documents into structured, commerce-ready product intelligence using
            Gemini.
          </p>
          <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full">
            Executive Briefing / slide 1 of 8
          </div>
        </div>
      ),
    },
    {
      title: "The Problem",
      subtitle: "Fragile and Fragmented Product Data",
      bg: "bg-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 items-stretch animate-fadeIn">
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col gap-4">
            <span className="text-3xl">📁</span>
            <h4 className="font-bold text-lg text-white">Unstructured Files</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Product specifications are locked inside PDFs, catalogs, websites,
              and disparate supplier feeds.
            </p>
          </div>
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col gap-4">
            <span className="text-3xl">⏱️</span>
            <h4 className="font-bold text-lg text-white font-sans">
              Manual Verification
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Human-in-the-loop validation of 150+ columns of specifications
              takes days per SKU, introducing errors.
            </p>
          </div>
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col gap-4">
            <span className="text-3xl">🧩</span>
            <h4 className="font-bold text-lg text-white">Taxonomy Mismatch</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Matching supplier classification schemas to local e-commerce store
              categories causes mapping failures.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "The Solution",
      subtitle: "Automated Multi-Agent AI Enrichment",
      bg: "bg-neutral-950 border border-neutral-800",
      content: (
        <div className="flex flex-col gap-6 py-8 justify-center animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                name: "Parsing Ingest",
                desc: "Standardizes raw descriptions into mapped brands and supplier fields.",
              },
              {
                num: "02",
                name: "Web Spec Crawler",
                desc: "Crawls manufacturer spec catalogs for reference documents.",
              },
              {
                num: "03",
                name: "Gemini Extraction",
                desc: "Extracts values, units, and categories into 150+ columns schema.",
              },
              {
                num: "04",
                name: "Compliance Guard",
                desc: "Automatically validates certifications, approvals, and Prop 65 rules.",
              },
            ].map((col) => (
              <div
                key={col.num}
                className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80 flex flex-col gap-3"
              >
                <span className="text-mural-green font-bold font-mono text-xl">
                  {col.num}
                </span>
                <h4 className="font-semibold text-sm text-white">{col.name}</h4>
                <p className="text-[11px] text-neutral-400 leading-relaxed font-medium">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Feature Focus 1",
      subtitle:
        "Cross-Manufacturer Attribute Normalization & Universal Synonym Mapping",
      bg: "bg-gradient-to-br from-neutral-900 via-purple-950/20 to-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center text-left animate-fadeIn">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h4 className="text-xl font-bold text-white leading-tight">
              Unifying Terminology Inconsistencies
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-medium">
              Maps noisy variations like{" "}
              <strong className="text-mural-green">"Outer Dia."</strong>,{" "}
              <strong className="text-mural-green">"OD"</strong>, and{" "}
              <strong className="text-mural-green">"Outer Diameter"</strong> to
              a single universal attribute key before downstream catalog
              indexing.
            </p>
            <div className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800 flex flex-col gap-2">
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Pipeline Integration
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Injects as a processing stage directly between raw ingestion and
                RAG enrichment to map units and synonyms automatically.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800 flex flex-col gap-3.5">
              <h5 className="text-[10px] text-mural-purple font-bold uppercase tracking-wider">
                Technical Stack
              </h5>
              <div className="flex flex-col gap-2.5 text-[11px] font-medium text-neutral-300">
                <div className="flex justify-between items-center bg-neutral-950/60 p-2 rounded border border-neutral-900">
                  <span>Semantic Vector matching</span>
                  <span className="text-mural-blue font-bold font-mono">
                    Pinecone
                  </span>
                </div>
                <div className="flex justify-between items-center bg-neutral-950/60 p-2 rounded border border-neutral-900">
                  <span>Terminology Graph Map</span>
                  <span className="text-mural-green font-bold font-mono">
                    Neo4j
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feature Focus 2",
      subtitle: "AI-Powered Compliance & Safety Regulation Checker",
      bg: "bg-gradient-to-br from-neutral-900 via-orange-950/20 to-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center text-left animate-fadeIn">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h4 className="text-xl font-bold text-white leading-tight">
              Mitigating Enterprise Regulatory Risk
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-medium">
              Scans complex technical documents, catalogs, and safety data
              sheets in real-time to match product specifications against
              international standards (
              <strong className="text-mural-orange">ISO</strong>,{" "}
              <strong className="text-mural-orange">RoHS</strong>,{" "}
              <strong className="text-mural-orange">CE</strong>, and{" "}
              <strong className="text-mural-orange">CA Proposition 65</strong>).
            </p>
            <div className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800 flex flex-col gap-2">
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Core Audit Benefits
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Flags missing approvals and mismatched chemical compositions
                automatically, blocking non-compliant items from being published
                to commerce listings.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800 flex flex-col gap-3">
              <h5 className="text-[10px] text-mural-orange font-bold uppercase tracking-wider">
                Key Highlights
              </h5>
              <div className="flex flex-col gap-2 text-[11px] text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-mural-orange">&bull;</span>
                  <span>
                    <strong>Automatic Audit Tracing</strong>: Verifies
                    compliance certificates against source documents.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-mural-orange">&bull;</span>
                  <span>
                    <strong>Real-time Guardrails</strong>: Triggers automatic
                    warning flags during catalog exports.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Future Development",
      subtitle:
        "Automated Industrial Cross-Reference & Part Substitutability Agent",
      bg: "bg-gradient-to-br from-neutral-900 via-blue-950/20 to-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center text-left animate-fadeIn">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h4 className="text-xl font-bold text-white leading-tight">
              Universal Interchangeability Finder
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-medium">
              Identifies functional equivalents and drop-in replacements across
              multiple brands. Uses a hybrid vector-similarity engine to
              evaluate structural bounds (dimensions, thread pitches,
              tolerances) and fits.
            </p>
            <div className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800 flex flex-col gap-2">
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                Supply Chain Resilience
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Helps distributors offer equivalent alternatives when a part
                number is out-of-stock, maximizing fulfillment rates.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800 flex flex-col gap-3">
              <h5 className="text-[10px] text-mural-blue font-bold uppercase tracking-wider">
                Substitutability Features
              </h5>
              <div className="flex flex-col gap-2 text-[11px] text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-mural-blue">&bull;</span>
                  <span>
                    <strong>Vector Matching</strong>: Computes cosine similarity
                    of dimensions and materials.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-mural-blue">&bull;</span>
                  <span>
                    <strong>Graph-Linked Sub</strong>: Traces compatibility
                    hierarchies through Neo4j nodes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Architecture & Stack",
      subtitle: "State-of-the-Art Technical Pipeline",
      bg: "bg-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8 items-center animate-fadeIn">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-serif text-white">Technology Stack</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-medium font-sans">
              Catalog IQ leverages Google Gemini APIs to handle semantic
              inference, paired with a React/Next.js client grid visualizer for
              seamless data interaction.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {[
                "Gemini Pro",
                "Next.js",
                "Tailwind CSS v4",
                "TypeScript",
                "Biome",
                "Playwright",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-xs font-semibold text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800/60 p-6 rounded-2xl flex flex-col gap-4">
            <h4 className="font-bold text-xs text-neutral-400 uppercase font-sans">
              Process Workflow
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-mural-purple text-black flex items-center justify-center font-bold text-[10px]">
                  1
                </span>
                <span className="text-neutral-300">
                  Raw Catalog Import (.csv)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-mural-blue text-black flex items-center justify-center font-bold text-[10px]">
                  2
                </span>
                <span className="text-neutral-300">
                  Gemini LLM Attribute Parsing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-mural-green text-black flex items-center justify-center font-bold text-[10px]">
                  3
                </span>
                <span className="text-neutral-300">
                  Compliance & Regulatory Check
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-mural-orange text-black flex items-center justify-center font-bold text-[10px]">
                  4
                </span>
                <span className="text-neutral-300">
                  Structured Intelligence Export
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Business ROI",
      subtitle: "Efficiency, Completeness, and Trust",
      bg: "bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 items-center text-center animate-fadeIn">
          <div className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800">
            <div className="text-4xl font-bold text-mural-green font-mono">
              10x
            </div>
            <h4 className="font-semibold text-sm text-white mt-2 font-sans">
              Enrichment Speed
            </h4>
            <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed font-medium">
              Enriching and validating SKU data in seconds instead of hours.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800">
            <div className="text-4xl font-bold text-mural-purple font-mono">
              99.8%
            </div>
            <h4 className="font-semibold text-sm text-white mt-2 font-sans">
              Completeness Accuracy
            </h4>
            <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed font-medium">
              LLMs extract up to 50 physical properties per item from
              specifications.
            </p>
          </div>
          <div className="p-6 bg-neutral-900/60 rounded-2xl border border-neutral-800">
            <div className="text-4xl font-bold text-mural-orange font-mono">
              0%
            </div>
            <h4 className="font-semibold text-sm text-white mt-2 font-sans">
              Compliance Fines
            </h4>
            <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed font-medium">
              Guarantees warnings mapping (Prop 65) matches structural
              guidelines.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slide = slides[currentSlide];

  // Enable keyboard left/right key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-6 w-full p-8 overflow-y-auto max-h-screen text-neutral-900 font-sans">
      <div className="flex justify-between items-center bg-transparent">
        <div>
          <h2 className="text-3xl font-sans font-bold text-neutral-950 font-sans tracking-tight">
            Executive Pitch Deck
          </h2>
          <p className="text-sm text-neutral-400 font-medium font-sans">
            A quick presentation overview of Catalog IQ for managers and higher
            authorities. Use Arrow Keys to navigate.
          </p>
        </div>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i
                  ? "bg-[#0284c7] scale-110"
                  : "bg-neutral-200 hover:bg-neutral-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div
        className={`${slide.bg} rounded-3xl p-8 md:p-12 min-h-[500px] h-auto shadow-2xl relative flex flex-col justify-between transition-all duration-300`}
      >
        {/* Progress Bar indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800">
          <div
            className="h-full bg-mural-green transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Slide Header */}
        <div className="flex justify-between items-start border-b border-neutral-800/60 pb-6 z-10">
          <div>
            <h3 className="text-2xl font-serif text-white font-bold leading-none">
              {slide.title}
            </h3>
            <p className="text-neutral-400 text-xs mt-2 font-medium font-sans">
              {slide.subtitle}
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-neutral-600 bg-neutral-900 border border-neutral-800/80 px-3 py-1 rounded">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Slide Content */}
        <div className="flex-grow py-4 z-10">{slide.content}</div>

        {/* Slide Navigation Buttons */}
        <div className="flex justify-between items-center border-t border-neutral-800/60 pt-6 z-10 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`font-bold px-4 py-2 rounded-xl text-xs transition-all ${
              currentSlide === 0
                ? "text-neutral-600 bg-transparent border border-neutral-800 cursor-not-allowed"
                : "text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800"
            }`}
          >
            &larr; Previous Slide
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className={`font-bold px-5 py-2.5 rounded-xl text-xs transition-all ${
              currentSlide === slides.length - 1
                ? "text-neutral-600 bg-transparent border border-neutral-800 cursor-not-allowed"
                : "bg-mural-green hover:bg-mural-green/90 text-black shadow-md"
            }`}
          >
            Next Slide &rarr;
          </button>
        </div>
      </div>

      {/* Slide Pitch Deck Transition Strategy */}
      <div className="bg-white p-6 rounded-2xl border border-[#e4e4e7] shadow-sm mt-4 flex flex-col gap-4">
        <h3 className="font-bold text-sm text-neutral-850 uppercase tracking-wider font-sans">
          💡 3-Minute Pitch Flow & Transition Strategy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-500">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-neutral-900">
              1. Ground in the Practical (Minute 1)
            </span>
            <p className="leading-relaxed font-semibold">
              Start with the problem: messy, inconsistent data is costing time
              and money. Use the "OD" vs. "Outer Dia." example to ground the
              complexity in a tangible way before introducing AI.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-neutral-900">
              2. Emphasize Risk Mitigation (Minute 2)
            </span>
            <p className="leading-relaxed font-semibold">
              Introduce the AI Compliance Checker as your enterprise guardrail.
              Frame it not just as automated taxonomy, but as legal risk
              mitigation protecting the company from product fines.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-neutral-900">
              3. Paint the Future Horizon (Minute 3)
            </span>
            <p className="leading-relaxed font-semibold">
              End with a look forward: explain how mapping substitutable parts
              using vector similarity creates supply chain resilience and blocks
              competitor catalog lock-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
