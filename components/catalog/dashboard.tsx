interface DashboardProps {
  rawCount: number;
  enrichedCount: number;
  onNavigate: (tab: string) => void;
}

export function Dashboard({
  rawCount,
  enrichedCount,
  onNavigate,
}: DashboardProps) {
  const totalSKUs = 34180 + enrichedCount;
  const completeness = 91.4 + (enrichedCount > 0 ? 1.2 : 0);
  const confidence = 0.93;

  const points = [
    { week: "W1", completeness: 55, confidence: 60 },
    { week: "W2", completeness: 65, confidence: 66 },
    { week: "W3", completeness: 72, confidence: 71 },
    { week: "W4", completeness: 80, confidence: 78 },
    { week: "W5", completeness: 84, confidence: 81 },
    { week: "W6", completeness: 88, confidence: 86 },
    { week: "W7", completeness: 90, confidence: 91 },
    { week: "W8", completeness: 91.4, confidence: 93 },
  ];

  const reviewQueue = [
    {
      sku: "GBX-2210-HD",
      attr: "Gear ratio",
      val1: "28.4",
      val2: "29.1",
      pct: 51,
      agent: "Auditor",
    },
    {
      sku: "SNS-8807-PT",
      attr: "ATEX marking",
      val1: "Ex ia IIC T4",
      val2: "Ex ib IIC T4",
      pct: 60,
      agent: "NamePlateVLM",
    },
    {
      sku: "VLV-1039-BF",
      attr: "Kv value",
      val1: "—",
      val2: "170 m³/h",
      pct: 18,
      agent: "GapFiller",
    },
    {
      sku: "HYD-4412-SS",
      attr: "Mounting style",
      val1: "MP3",
      val2: "MF1",
      pct: 64,
      agent: "SpecMiner",
    },
  ];

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 space-y-6 text-neutral-900 font-sans overflow-y-auto max-h-screen">
      {/* 1. Hero Presentation Banner - Light Mode Grid */}
      <section className="panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14 bg-white border border-[#e4e4e7] rounded-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.04)_0%,rgba(139,92,246,0.02)_50%,transparent_100%)]"></div>

        {/* Visual grid overlay to match screenshot background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative max-w-3xl z-10">
          <span className="label-mono text-[9px] font-bold text-neutral-500 tracking-[0.2em]">
            Agentic product data foundry
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl tracking-tight text-neutral-900 font-sans">
            Turn scattered specs into{" "}
            <span className="text-[#0284c7]">
              commerce-ready product intelligence
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base font-medium">
            Catalog IQ ingests catalogs, drawings, nameplate photos and ERP
            records, resolves them into a product knowledge graph, and lets AI
            agents enrich every gap — with a citation and a confidence score
            attached to every single value.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("pipeline")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-all hover:brightness-105 active:scale-95 bg-[#0284c7] text-white shadow-sm h-10 px-4"
            >
              Start a catalog run
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right size-4"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </button>
            <button
              onClick={() => onNavigate("pitch")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-all hover:bg-neutral-200/50 border border-[#e4e4e7] bg-[#f4f4f5] text-neutral-900 h-10 px-4"
            >
              View architecture
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e4e4e7] pt-6 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
            <span>&bull; Document intelligence</span>
            <span>&bull; Vision-language extraction</span>
            <span>&bull; Knowledge graph</span>
            <span>&bull; Agentic RAG</span>
            <span>&bull; Human-in-the-loop</span>
          </div>
        </div>
      </section>

      {/* 2. Key Performance Indicators Grid */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="panel p-5 bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-start justify-between">
            <span className="label-mono">SKUs under management</span>
            <span className="text-[#0284c7] text-lg">📁</span>
          </div>
          <div className="mt-4">
            <p className="font-display text-3xl font-bold tracking-tight text-neutral-950">
              {totalSKUs.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-neutral-400 font-medium">
              +{rawCount} pending in queue
            </p>
          </div>
        </div>

        <div className="panel p-5 bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-start justify-between">
            <span className="label-mono">Attribute completeness</span>
            <span className="text-mural-green text-lg">✨</span>
          </div>
          <div className="mt-4">
            <p className="font-display text-3xl font-bold tracking-tight text-neutral-950">
              {completeness.toFixed(1)}%
            </p>
            <p className="mt-1 text-xs text-neutral-400 font-medium">
              +24.6 pts since W1
            </p>
          </div>
        </div>

        <div className="panel p-5 bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-start justify-between">
            <span className="label-mono">Mean confidence</span>
            <span className="text-mural-purple text-lg">🛡️</span>
          </div>
          <div className="mt-4">
            <p className="font-display text-3xl font-bold tracking-tight text-neutral-950">
              {confidence.toFixed(2)}
            </p>
            <p className="mt-1 text-xs text-neutral-400 font-medium">
              traceable to source
            </p>
          </div>
        </div>

        <div className="panel p-5 bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between shadow-sm">
          <div className="flex items-start justify-between">
            <span className="label-mono">Time to commerce-ready</span>
            <span className="text-[#0284c7] text-lg">⏱️</span>
          </div>
          <div className="mt-4">
            <p className="font-display text-3xl font-bold tracking-tight text-neutral-950">
              38 min
            </p>
            <p className="mt-1 text-xs text-neutral-400 font-medium">
              was 6.4 days manual
            </p>
          </div>
        </div>
      </section>

      {/* 3. Graphs & Agent Fleet */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Trajectory Graph Card */}
        <div className="panel flex flex-col lg:col-span-2 bg-white border border-[#e4e4e7] rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e4e4e7] px-5 py-4">
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                Data quality trajectory
              </h3>
              <p className="mt-1 text-xs text-neutral-400 font-medium font-sans">
                Completeness and mean confidence across 8 weeks of autonomous
                enrichment
              </p>
            </div>
            <span className="inline-flex px-2 py-0.5 rounded bg-green-50 text-mural-green text-[10px] font-bold uppercase tracking-wider">
              &bull; Running
            </span>
          </div>

          <div className="h-[260px] p-6 flex flex-col justify-between">
            {/* Visual SVG line representation of target chart */}
            <div className="flex-1 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="30"
                  x2="500"
                  y2="30"
                  stroke="#f4f4f5"
                  strokeDasharray="3"
                />
                <line
                  x1="0"
                  y1="75"
                  x2="500"
                  y2="75"
                  stroke="#f4f4f5"
                  strokeDasharray="3"
                />
                <line
                  x1="0"
                  y1="120"
                  x2="500"
                  y2="120"
                  stroke="#f4f4f5"
                  strokeDasharray="3"
                />

                {/* Shaded Area */}
                <path
                  d="M 0 130 Q 70 100 140 90 T 280 60 T 420 40 L 500 30 L 500 150 L 0 150 Z"
                  fill="url(#blueGrad)"
                />
                {/* Confidence Curve */}
                <path
                  d="M 0 130 Q 70 100 140 90 T 280 60 T 420 40 L 500 30"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                />
                {/* Completeness Curve */}
                <path
                  d="M 0 100 Q 70 85 140 70 T 280 40 T 420 25 L 500 20"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                />
              </svg>
            </div>

            {/* X-Axis labels */}
            <div className="flex justify-between border-t border-[#e4e4e7] pt-3 text-[10px] font-mono text-neutral-400 font-bold uppercase">
              {points.map((p) => (
                <span key={p.week}>{p.week}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Fleet Card */}
        <div className="panel bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e4e4e7] px-5 py-4">
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                Agent fleet
              </h3>
              <p className="mt-1 text-xs text-neutral-400 font-medium">
                Specialised workers on current run
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#e4e4e7] flex-1 overflow-y-auto max-h-[300px]">
            {[
              {
                name: "SpecMiner",
                desc: "Extracts tabular specs from catalog PDFs",
                pct: 78,
                status: "Running",
              },
              {
                name: "NamePlateVLM",
                desc: "Reads etched plates and label photos",
                pct: 54,
                status: "Running",
              },
              {
                name: "UnitHarmoniser",
                desc: "Normalises units and tolerances",
                pct: 12,
                status: "Idle",
              },
              {
                name: "GapFiller",
                desc: "RAG over standards + supplier corpora",
                pct: 66,
                status: "Running",
              },
              {
                name: "CopySmith",
                desc: "Generates channel copy and SEO fields",
                pct: 41,
                status: "Running",
              },
              {
                name: "Auditor",
                desc: "Scores confidence, opens review tickets",
                pct: 89,
                status: "Degraded",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="px-5 py-3.5 flex flex-col gap-1.5 hover:bg-neutral-50/20"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-neutral-800 font-mono">
                    {agent.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-[4px] text-[9px] font-bold uppercase tracking-wider ${
                      agent.status === "Running"
                        ? "bg-green-50 text-mural-green"
                        : agent.status === "Degraded"
                          ? "bg-orange-50 text-mural-orange"
                          : "bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    {agent.status}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400 font-semibold">
                  {agent.desc}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        agent.name === "UnitHarmoniser"
                          ? "bg-red-500"
                          : agent.name === "NamePlateVLM" ||
                              agent.name === "CopySmith"
                            ? "bg-yellow-500"
                            : "bg-[#0284c7]"
                      }`}
                      style={{ width: `${agent.pct}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-neutral-400">
                    {agent.pct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Human-In-The-Loop workbench & Logs Console */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Review queue workbench */}
        <div className="panel lg:col-span-2 bg-white border border-[#e4e4e7] rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e4e4e7] px-5 py-4">
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                Human-in-the-loop queue
              </h3>
              <p className="mt-1 text-xs text-neutral-400 font-medium">
                Only low-confidence conflicts reach a person — 1.2% of decisions
              </p>
            </div>
            <button
              onClick={() => onNavigate("commerce")}
              className="bg-white hover:bg-neutral-50 text-neutral-700 border border-[#e4e4e7] font-bold text-xs px-3 py-1.5 rounded-lg transition-all"
            >
              Open workbench
            </button>
          </div>

          <div className="divide-y divide-[#e4e4e7] flex-1 overflow-y-auto max-h-[300px]">
            {reviewQueue.map((item) => (
              <div
                key={item.sku}
                className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 hover:bg-neutral-50/40 transition-colors"
              >
                <div className="min-w-[150px]">
                  <p className="font-mono text-xs font-bold text-[#0284c7]">
                    {item.sku}
                  </p>
                  <p className="text-sm font-medium text-neutral-700">
                    {item.attr}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded bg-neutral-50 border border-neutral-200 px-2.5 py-1 font-mono text-neutral-400">
                    {item.val1}
                  </span>
                  <span className="text-neutral-400 font-bold uppercase text-[9px] tracking-wider">
                    vs
                  </span>
                  <span className="rounded bg-neutral-50 border border-neutral-200 px-2.5 py-1 font-mono text-neutral-900 font-bold">
                    {item.val2}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 w-24">
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                      <div
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 font-semibold">
                      {item.pct}%
                    </span>
                  </div>
                  <span className="label-mono hidden sm:inline">
                    {item.agent}
                  </span>
                  <button
                    onClick={() => onNavigate("commerce")}
                    className="bg-[#27272a] hover:bg-[#3f3f46] text-white text-xs px-3 py-1 rounded font-bold transition-all"
                  >
                    Resolve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live log card */}
        <div className="panel bg-white border border-[#e4e4e7] rounded-xl flex flex-col justify-between overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#e4e4e7] px-5 py-4">
            <span className="text-[#0284c7] animate-pulse">&bull;</span>
            <p className="label-mono">Live run log</p>
          </div>

          <div className="p-5 flex-1 overflow-y-auto max-h-[300px] font-mono text-[10px] text-neutral-500 space-y-3 leading-relaxed">
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:12:41
              </span>
              <span>
                SpecMiner parsed Norvex_Catalog_2024.pdf p.118 &rarr; 42 facts
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:12:44
              </span>
              <span>
                UnitHarmoniser converted 'psi' &rarr; 'bar' on 18 attributes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:12:49
              </span>
              <span>
                GapFiller derived torque 620 Nm from P&bull;9550/n (conf 0.83)
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:12:53
              </span>
              <span>
                Auditor flagged GBX-2210-HD ratio conflict &rarr; review queue
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:13:02
              </span>
              <span>CopySmith generated 6-locale copy for HYD-4412-SS</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#0284c7] shrink-0 font-semibold">
                03:13:07
              </span>
              <span>
                Graph commit 4.2.918 &bull; 1,204 triples &bull; lineage sealed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
