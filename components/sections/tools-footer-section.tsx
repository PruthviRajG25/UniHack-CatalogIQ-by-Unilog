import { Button } from "@/components/ui/button";

export function ToolsFooterSection() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Tools for every team */}
      <section className="bg-mural-orange w-full py-20 px-8 md:px-16 border-t-2 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
          {/* Left: Navigation List */}
          <div className="w-full md:w-1/3 flex flex-col">
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-serif tracking-tight text-black mb-8">
              Tools for
              <br />
              every team
            </h2>
            <nav className="flex flex-col font-sans font-medium text-black">
              <a
                href="#"
                className="bg-black text-white px-6 py-5 text-xl rounded-sm"
              >
                Engineering
              </a>
              <a
                href="#"
                className="hover:bg-black/10 px-6 py-5 text-xl rounded-sm transition-colors border-b border-black/10 md:border-none"
              >
                Design
              </a>
              <a
                href="#"
                className="hover:bg-black/10 px-6 py-5 text-xl rounded-sm transition-colors border-b border-black/10 md:border-none"
              >
                Product
              </a>
              <a
                href="#"
                className="hover:bg-black/10 px-6 py-5 text-xl rounded-sm transition-colors border-b border-black/10 md:border-none"
              >
                Innovation
              </a>
              <a
                href="#"
                className="hover:bg-black/10 px-6 py-5 text-xl rounded-sm transition-colors border-b border-black/10 md:border-none"
              >
                Consulting
              </a>
              <a
                href="#"
                className="hover:bg-black/10 px-6 py-5 text-xl rounded-sm transition-colors"
              >
                Sales & Partnerships
              </a>
            </nav>
          </div>

          {/* Right: Large white card */}
          <div className="w-full md:w-2/3 bg-white p-10 md:p-14 rounded-sm border-2 border-black flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="mb-8">
                {/* GitLab Logo */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50 93.3L15.3 35.5h69.4L50 93.3z" fill="#FC6D26" />
                  <path d="M50 93.3L15.3 35.5H36L50 93.3z" fill="#E24329" />
                  <path d="M50 93.3l34.7-57.8H64L50 93.3z" fill="#E24329" />
                  <path
                    d="M15.3 35.5l-9.1-27.7c-.5-1.5 1.4-2.8 2.7-1.8L36 35.5H15.3z"
                    fill="#FCA326"
                  />
                  <path
                    d="M84.7 35.5l9.1-27.7c.5-1.5-1.4-2.8-2.7-1.8L64 35.5h20.7z"
                    fill="#FCA326"
                  />
                </svg>
              </div>
              <blockquote className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-black leading-[1.2] mb-8">
                "Mural is the first place we go to brainstorm and plan. It's the
                one tool that brings all of our ideas together."
              </blockquote>
              <div className="font-sans font-semibold text-black text-lg">
                Jane Doe
                <br />
                <span className="font-normal text-neutral-600">
                  Director of Engineering, GitLab
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                iconBg="bg-mural-orange"
                iconColor="text-black"
              >
                Read case study
              </Button>
              <Button
                variant="outline"
                className="border-mural-purple text-mural-purple"
                iconBg="bg-mural-purple"
                iconColor="text-white"
              >
                Use the async brainstorming template
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What if work actually worked */}
      <section className="bg-white w-full py-32 px-8 md:px-16 border-t-4 border-mural-orange">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <h1 className="text-[5rem] md:text-[7.5rem] leading-[0.9] font-serif tracking-tight text-black mb-12 max-w-4xl">
            What if work
            <br />
            actually worked?
          </h1>
          <button className="inline-flex items-center bg-[#e4cfff] border-none rounded-sm pr-8 font-medium transition-all hover:bg-[#d4bfff] overflow-hidden h-[48px]">
            <span className="flex items-center justify-center w-[48px] h-[48px] bg-[#c084fc] text-black font-bold shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="ml-5 text-sm font-sans text-black">
              It can — discover how
            </span>
          </button>
        </div>
      </section>

      {/* 3. Footer */}
      <footer className="bg-white w-full pt-16 pb-12 px-8 md:px-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-24">
            {/* Products */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">
                Products
              </h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Product overview
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Features
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Mural AI
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Integrations
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Trust & security
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Enterprise
              </a>
            </div>

            {/* Solutions */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">
                Solutions
              </h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                The Mural System
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Teamwork Assessment
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Use cases
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                LUMA Institute
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Professional Services
              </a>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">
                Resources
              </h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Webinars & events
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Resource hub
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Microsoft partnership
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Case studies
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Mural status
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Help center
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Sitemap
              </a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">Company</h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                About us
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Newsroom
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Brand assets
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Contact sales
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Contact us
              </a>
            </div>

            {/* Our Apps */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">
                Our Apps
              </h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Download our apps
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Microsoft Teams
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Surface Hub
              </a>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black mb-2 text-[15px]">Social</h3>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Youtube
              </a>
              <a
                href="#"
                className="text-[14px] text-neutral-800 hover:underline"
              >
                Linkedin
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center pt-8 gap-8 border-t border-neutral-200 w-full">
            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4">
              <a
                href="#"
                className="text-[13px] text-neutral-800 hover:underline"
              >
                Privacy Statement
              </a>
              <a
                href="#"
                className="text-[13px] text-neutral-800 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[13px] text-neutral-800 hover:underline flex items-center gap-2"
              >
                California Privacy
                <span className="inline-flex items-center ml-1">
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="11"
                      rx="5.5"
                      fill="white"
                      stroke="#0055FF"
                    />
                    <path d="M11 6L6 3v6l5-3z" fill="#0055FF" />
                    <path d="M22 6L17 3v6l5-3z" fill="#0055FF" />
                  </svg>
                  <span className="ml-2 font-medium">Your Privacy Choices</span>
                </span>
              </a>
            </div>
            <div className="text-[12px] text-neutral-600 lg:text-right flex flex-col gap-1 max-w-[450px]">
              <p>© 2024 Mural. All rights reserved.</p>
              <p>
                LUMA Institute, LLC is a wholly-owned subsidiary of Tactivos,
                Inc. d/b/a Mural.
              </p>
              <p>
                The Mural name and logo are trademarks of Tactivos, Inc. d/ba
                Mural.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Color Bar */}
      <div className="flex h-3 w-full">
        <div className="flex-1 bg-[#00c27b]"></div>
        <div className="flex-1 bg-[#d1e0ff]"></div>
        <div className="flex-1 bg-[#ec4899]"></div>
        <div className="flex-1 bg-[#faf8f5]"></div>
        <div className="flex-1 bg-[#f2994a]"></div>
        <div className="flex-1 bg-[#56ccf2]"></div>
        <div className="flex-1 bg-[#c084fc]"></div>
        <div className="flex-1 bg-[#e74c3c]"></div>
      </div>
    </div>
  );
}
