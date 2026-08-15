import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="w-full font-sans flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white px-6 h-16 flex items-center justify-between z-20 border-b border-gray-100">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              width="84"
              height="28"
              viewBox="0 0 84 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9 28H19.5V11.8C19.5 9.1 21.1 7.4 23.5 7.4C25.9 7.4 27.2 9 27.2 11.6V28H33.8V11.8C33.8 9.1 35.5 7.4 37.8 7.4C40.2 7.4 41.5 9 41.5 11.6V28H48.1V10.7C48.1 5 44.5 2 39.5 2C36.3 2 33.6 3.6 32.1 6.3C30.9 3.5 28.5 2 25.4 2C22.2 2 19.6 3.7 18.2 6.5V2.5H12.9V28Z"
                fill="#111111"
              />
              <path
                d="M6.6 28C2.9 28 0 25 0 21.3V0H6.6V21.3C6.6 21.4 6.6 21.4 6.7 21.4C6.7 21.5 6.7 21.5 6.6 21.5C6.6 21.5 6.6 21.4 6.6 21.3V28Z"
                fill="#ec4899"
              />
              <path
                d="M6.6 0H0V16.8C0 20.5 2.9 23.5 6.6 23.5V0Z"
                fill="#f2994a"
              />
              <path
                d="M6.6 0H0V6.6C0 10.2 2.9 13.2 6.6 13.2V0Z"
                fill="#9b51e0"
              />
              <path
                d="M52.3 28H58.9V23.7C60.2 26.6 62.9 28.4 66.2 28.4C71.3 28.4 74.8 24.8 74.8 19V2.5H68.2V19C68.2 21.7 66.8 23.3 64.2 23.3C61.7 23.3 60.1 21.6 60.1 18.8V2.5H53.5V28H52.3Z"
                fill="#111111"
              />
              <path d="M83.9 28V2.5H77.3V28H83.9Z" fill="#111111" />
              <circle cx="80.6" cy="11.4" r="3.4" fill="#00c27b" />
            </svg>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-gray-900">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Products{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Solutions{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Enterprise{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Resources{" "}
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="cursor-pointer hover:text-black">Pricing</div>
            <div className="cursor-pointer hover:text-black">Contact sales</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <svg
            className="w-5 h-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <button className="bg-[#333333] hover:bg-[#222222] text-white px-5 py-2.5 rounded text-[15px] font-semibold transition-colors">
            Sign up free
          </button>
        </div>
      </nav>

      {/* Black Banner */}
      <div className="w-full bg-black text-white px-4 py-2.5 flex items-center justify-center relative text-[15px]">
        <div className="flex items-center gap-2">
          <span>[Webinar] Radar template magic: From feedback to action</span>
          <a
            href="#"
            className="text-[#ff52c5] hover:underline font-medium inline-flex items-center gap-1"
          >
            Register now
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Hero Content */}
      <div className="w-full bg-mural-green min-h-[600px] flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mural Canvas Mockup */}
          <div className="w-full relative aspect-[4/3] bg-white rounded-lg shadow-2xl overflow-hidden border border-black/10 flex flex-col">
            {/* Toolbar top */}
            <div className="h-10 border-b border-gray-200 flex items-center justify-between px-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
                <div className="text-xs font-semibold">We better work</div>
                <div className="flex gap-2 text-gray-400">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-400 border border-white"></div>
                </div>
                <button className="bg-[#ec4899] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  Share
                </button>
              </div>
            </div>

            <div className="flex flex-1 relative bg-[#fafafa] dot-pattern">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .dot-pattern {
                  background-image: radial-gradient(#d4d4d4 1px, transparent 1px);
                  background-size: 20px 20px;
                }
              `,
                }}
              />

              {/* Sidebar */}
              <div className="w-10 bg-white border-r border-gray-200 flex flex-col items-center py-3 gap-3 absolute left-2 top-2 bottom-2 rounded shadow-sm z-10 text-gray-600">
                <div className="w-5 h-5 bg-black text-white rounded flex items-center justify-center text-[10px] font-bold">
                  T
                </div>
                <div className="w-5 h-5 border-2 border-current rounded-sm"></div>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="mt-auto flex flex-col gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Canvas Content */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Yellow Sticky */}
                <div className="absolute top-16 left-24 bg-[#ffb000] w-24 h-24 p-2 shadow-sm rotate-[-2deg]">
                  <p className="text-xs font-medium leading-tight">
                    No
                    <br />
                    more
                    <br />
                    silos!
                  </p>
                  <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white text-[8px] px-1 py-0.5 rounded-sm">
                    Andrea
                  </div>
                </div>

                {/* Main Text Box */}
                <div className="relative border-2 border-blue-400 p-6 bg-white/50 backdrop-blur-sm max-w-sm">
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-white border border-blue-400"></div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-white border border-blue-400"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white border border-blue-400"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-white border border-blue-400"></div>

                  <h2 className="text-4xl font-serif font-bold text-center leading-tight">
                    What do we need
                    <br />
                    to solve?
                  </h2>
                </div>

                {/* Pink Circle */}
                <div className="absolute top-1/2 right-12 translate-y-4 bg-[#f472b6] w-32 h-32 rounded-full flex items-center justify-center p-4 shadow-sm">
                  <p className="text-sm font-medium text-center leading-tight text-black">
                    We've got
                    <br />
                    some ideas!
                  </p>
                  <div className="absolute -bottom-1 right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-1">
                    Mural
                  </div>
                </div>

                {/* Blue Sticky */}
                <div className="absolute bottom-16 left-32 bg-[#93c5fd] w-24 h-24 p-2 shadow-sm rotate-[4deg]">
                  <p className="text-[10px] font-medium leading-tight">
                    Meetings
                    <br />
                    that don't
                    <br />
                    put me to
                    <br />
                    sleep!
                  </p>
                  <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-sm">
                    David
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center pl-1 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Cursor */}
                <div className="absolute top-1/4 left-1/3">
                  <svg
                    className="w-5 h-5 text-black drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2l12 11.2h-5.8l3.3 7.3-2.3 1-3.2-7.4-4.4 4.8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Typography and CTA */}
          <div className="flex flex-col items-start text-black">
            <h1 className="text-[72px] leading-[0.95] font-serif tracking-tight mb-6">
              Make work
              <br />
              make sense
            </h1>
            <p className="text-[19px] leading-[1.5] font-sans mb-10 max-w-xl font-medium text-gray-900">
              Teamwork feels like less work with Mural, the secure, flexible,
              visual work platform purpose-built for collaboration.
            </p>
            <Button>Start a whiteboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
