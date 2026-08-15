export function TemplatesSection() {
  return (
    <section className="bg-mural-dark text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">
            Start strong, end smarter
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Find your flow with templates designed for the ways we work best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Tabs */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-mural-beige text-mural-dark p-6 md:p-8 rounded-xl flex flex-col gap-3 mb-2">
              <h3 className="font-sans text-xl md:text-2xl font-semibold">
                Generate ideas
              </h3>
              <p className="text-lg">
                Imagine what could be and how to make it real.
              </p>
            </div>

            <div className="flex flex-col">
              <button className="text-left font-sans text-xl md:text-2xl text-white/90 hover:text-white px-6 md:px-8 py-6 border-b border-white/20 transition-colors font-medium">
                Organize ideas
              </button>
              <button className="text-left font-sans text-xl md:text-2xl text-white/90 hover:text-white px-6 md:px-8 py-6 border-b border-white/20 transition-colors font-medium">
                Plan projects
              </button>
              <button className="text-left font-sans text-xl md:text-2xl text-white/90 hover:text-white px-6 md:px-8 py-6 border-b border-white/20 transition-colors font-medium">
                Understand audiences
              </button>
              <button className="text-left font-sans text-xl md:text-2xl text-white/90 hover:text-white px-6 md:px-8 py-6 transition-colors font-medium">
                Recap & reflect
              </button>
            </div>
          </div>

          {/* Right Column - Image & Link */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="rounded-t-2xl overflow-hidden bg-neutral-900 border border-neutral-800 border-b-0">
              <div className="w-full aspect-[16/9] bg-mural-green relative overflow-hidden flex items-center justify-center">
                {/* Shapes replicating the concentric circles */}
                <div className="w-[110%] aspect-square rounded-full bg-mural-purple absolute -top-[60%] -right-[20%] opacity-90 mix-blend-multiply"></div>
                <div className="w-[90%] aspect-square rounded-full bg-mural-pink absolute -top-[50%] -right-[10%] opacity-90"></div>

                {/* Graph overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
                  <svg
                    viewBox="0 0 800 450"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Axes */}
                    <path
                      d="M 150,380 L 700,380"
                      stroke="#111"
                      strokeWidth="3"
                    />
                    <path
                      d="M 150,380 L 150,80"
                      stroke="#111"
                      strokeWidth="3"
                    />

                    {/* Arrows */}
                    <path
                      d="M 685,370 L 700,380 L 685,390"
                      fill="none"
                      stroke="#111"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 140,95 L 150,80 L 160,95"
                      fill="none"
                      stroke="#111"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Sticky Notes */}
                    <g transform="translate(300, 150)">
                      <rect width="36" height="36" fill="#fff" />
                      <path
                        d="M 6,10 L 15,10 M 6,18 L 30,18 M 6,26 L 24,26"
                        stroke="#111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>

                    <g transform="translate(420, 250)">
                      <rect width="36" height="36" fill="#fff" />
                      <path
                        d="M 6,10 L 15,10 M 6,18 L 30,18 M 6,26 L 24,26"
                        stroke="#111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>

                    <g transform="translate(550, 100)">
                      <rect width="36" height="36" fill="#fff" />
                      <path
                        d="M 6,10 L 15,10 M 6,18 L 30,18 M 6,26 L 24,26"
                        stroke="#111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>

                    <g transform="translate(590, 100)">
                      <rect width="36" height="36" fill="#fff" />
                      <path
                        d="M 6,10 L 15,10 M 6,18 L 30,18 M 6,26 L 24,26"
                        stroke="#111"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Link Container */}
            <div className="bg-[#1f1f1f] rounded-b-2xl p-6 md:p-8 flex items-center">
              <a
                href="#"
                className="inline-block text-white text-lg hover:text-white/80 transition-colors border-b border-white/50 hover:border-white pb-0.5"
              >
                Try the brainstorm & idea prioritization template
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
