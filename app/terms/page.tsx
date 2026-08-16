"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TermsPage() {
  const [isDark, setIsDark] = useState(true);

  // Sync scroll indicator
  const [activeSection, setActiveSection] = useState("section-1");

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const sections = [
    { id: "section-1", label: "1. Acceptance of Terms" },
    { id: "section-2", label: "2. Service Description & API Ingestion" },
    { id: "section-3", label: "3. Intellectual Property Rights" },
    { id: "section-4", label: "4. Data Security & LLM Processing" },
    { id: "section-5", label: "5. Limitations of Liability" },
    { id: "section-6", label: "6. Changes to Terms" },
  ];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? "bg-[#09090b] text-[#fafafa]" : "bg-[#f8fafc] text-neutral-900"
      }`}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.04),transparent_50%)] pointer-events-none"></div>

      {/* Header */}
      <header
        className={`sticky top-0 z-30 border-b backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "border-neutral-800 bg-[#09090b]/80"
            : "border-neutral-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#0284c7] to-[#075985] p-1.5 border border-sky-400/20">
              <img
                src="/logo.svg"
                alt="Catalog IQ Logo"
                className="w-full h-full"
              />
            </div>
            <div className="leading-tight">
              <span className="text-xs font-bold uppercase tracking-tight text-white">
                CATALOG IQ
              </span>
              <p className="text-[7px] text-neutral-500 font-mono uppercase tracking-wider font-bold">
                Terms of Service
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isDark
                  ? "border-neutral-800 hover:bg-neutral-900 text-yellow-400"
                  : "border-neutral-200 hover:bg-neutral-100 text-[#0284c7]"
              }`}
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                // Sun Icon
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-3.636l-.707.707M6.343 17.657l-.707-.707m0-12.728l.707.707m12.728 12.728l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <Link
              href="/"
              className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                isDark
                  ? "bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-800"
                  : "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 shadow-sm"
              }`}
            >
              Back to App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <main className="mx-auto max-w-[1200px] px-5 py-12 flex flex-col md:flex-row gap-10">
        {/* Sticky Table of Contents sidebar */}
        <aside className="w-full md:w-1/4 md:sticky md:top-28 h-fit flex flex-col gap-5">
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-[#0c0c0e]/80 border-neutral-800"
                : "bg-white border-neutral-200 shadow-sm"
            }`}
          >
            <h3 className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-4">
              Sections
            </h3>
            <nav className="flex flex-col gap-2">
              {sections.map((sect) => (
                <a
                  key={sect.id}
                  href={`#${sect.id}`}
                  onClick={() => setActiveSection(sect.id)}
                  className={`text-xs font-medium py-1 transition-all hover:translate-x-1 flex items-center ${
                    activeSection === sect.id
                      ? "text-[#0284c7] font-bold"
                      : isDark
                        ? "text-neutral-400 hover:text-white"
                        : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {sect.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Panel */}
        <section className="w-full md:w-3/4 flex flex-col gap-8">
          {/* Header Title Hero card */}
          <div
            className={`p-8 rounded-3xl border transition-all flex flex-col gap-2.5 relative overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-[#0c0c0e] to-neutral-950 border-neutral-800"
                : "bg-gradient-to-br from-white to-neutral-50 border-neutral-200 shadow-sm"
            }`}
          >
            <span className="inline-flex max-w-fit px-3 py-1 rounded bg-[#0284c7]/10 text-[#0284c7] text-[10px] font-bold font-mono border border-[#0284c7]/20 uppercase tracking-wider">
              Legal Agreement
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-white tracking-tight font-bold">
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-400 font-medium">
              Last Updated: August 16, 2026 &bull; Effective Immediately
            </p>
          </div>

          {/* Core Legal text */}
          <div
            className={`flex flex-col gap-10 leading-relaxed text-xs md:text-sm font-medium ${
              isDark ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            {/* Section 1 */}
            <div
              id="section-1"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                Welcome to Catalog IQ. By accessing, licensing, or using our
                multi-agent product data enrichment system, API endpoints, or
                user workspaces (collectively, the "Services"), you agree to be
                bound by these Terms of Service ("Terms").
              </p>
              <p>
                If you are entering into these Terms on behalf of an enterprise
                entity, distributor, or company, you represent that you have the
                requisite authority to bind such entity to these Terms. If you
                do not agree, you are prohibited from utilizing Catalog IQ.
              </p>
            </div>

            {/* Section 2 */}
            <div
              id="section-2"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                2. Service Description & Ingest Queues
              </h2>
              <p>
                Catalog IQ provides automated industrial catalog schema mapping,
                dimension parsing, vector knowledge graph annotation, and
                regulatory auditing utilizing third-party Large Language Models
                (including Google Gemini APIs).
              </p>
              <p>
                You acknowledge that Services include quotas (e.g. Monthly SKU
                limit allocations). Catalog IQ reserves the right to rate-limit
                ingestion streams or block API pipelines if thresholds are
                exceeded.
              </p>
            </div>

            {/* Section 3 */}
            <div
              id="section-3"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                3. Intellectual Property Rights
              </h2>
              <p>
                You retain all rights, titles, and interests in the raw CSV,
                XML, or database data feeds you submit to the Ingestion Queue.
              </p>
              <p>
                Catalog IQ retains all rights in the generative agents,
                enrichment rules, classification algorithms, visual graph
                structures, and layout engines. You are granted a limited,
                non-exclusive license to export the resulting structured files
                for e-commerce catalog deployment.
              </p>
            </div>

            {/* Section 4 */}
            <div
              id="section-4"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                4. Data Security & LLM Processing
              </h2>
              <p>
                Catalog IQ securely handles API Keys, JWT verification codes,
                and inventory database records. Your submitted data feeds may be
                processed by secure LLMs (such as `gemini-2.5-flash`) at the
                edge under high-density compliance protocols.
              </p>
              <p>
                You represent that you will not upload technical documents that
                violate trade secrecy acts, export controls, or contain
                unauthorized personally identifiable information (PII).
              </p>
            </div>

            {/* Section 5 */}
            <div
              id="section-5"
              className="scroll-mt-28 flex flex-col gap-3.5 border-b pb-8 border-neutral-800"
            >
              <h2 className="text-lg font-serif font-bold text-white">
                5. Limitations of Liability
              </h2>
              <p>
                Catalog IQ makes no representations or warranties regarding the
                absolute correctness of LLM-extracted specs, classification
                graphs, or compliance checker warning outputs. Always perform
                manual auditing within the Structured Review Grid prior to
                production deployment.
              </p>
              <p>
                To the maximum extent permitted by law, Catalog IQ shall not be
                held liable for any loss of trade revenue, data, or e-commerce
                listing penalties resulting from erroneous product
                specifications.
              </p>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="scroll-mt-28 flex flex-col gap-3.5">
              <h2 className="text-lg font-serif font-bold text-white">
                6. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Your
                continued use of Catalog IQ after changes are published
                constitutes your acceptance of the new Terms.
              </p>
              <p className="mt-4">
                If you have questions regarding these terms, contact legal at{" "}
                <code className="text-[#0284c7] font-mono">
                  legal@catalogiq.ai
                </code>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-black mt-20">
        <div className="mx-auto max-w-[1200px] px-5 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-semibold gap-4">
          <p>&copy; 2026 Catalog IQ OS. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Security Compliance
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
