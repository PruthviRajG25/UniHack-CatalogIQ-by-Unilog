import type React from "react";
import { useState } from "react";
import Link from "next/link";

interface AuthPageProps {
  onLoginSuccess: (userEmail: string) => void;
}

export function AuthPage({ onLoginSuccess }: AuthPageProps) {
  const [email, setEmail] = useState("admin@catalogiq.ai");
  const [password, setPassword] = useState("admin123");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [activeProvider, setActiveProvider] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    triggerLogin(email, "email");
  };

  const triggerLogin = (userEmail: string, provider: string) => {
    setIsSubmitting(true);
    setActiveProvider(provider);

    // Simulate auth logic
    setTimeout(() => {
      onLoginSuccess(userEmail);
      setIsSubmitting(false);
      setActiveProvider(null);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-[#fafafa] flex font-sans overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.06),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.02),transparent_50%)] pointer-events-none"></div>

      {/* Left Panel: Ingestor Mockup & Branding */}
      <div className="relative hidden md:flex md:w-1/2 lg:w-3/5 border-r border-[#1f1f23] flex-col justify-between p-12 overflow-hidden bg-black/40">
        {/* Soft Radial Ambient Light */}
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(2,132,199,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>

        {/* Top Header Logo */}
        <div className="flex items-center gap-3 relative z-10 select-none">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-[#0284c7] to-[#075985] shadow-[0_0_20px_rgba(2,132,199,0.35)] p-1.5 border border-sky-400/20">
            <img
              src="/logo.svg"
              alt="Catalog IQ Logo"
              className="w-full h-full"
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-tight text-white uppercase">
              CATALOG IQ
            </h1>
            <p className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider font-semibold">
              Product intelligence OS
            </p>
          </div>
        </div>

        {/* Center: Live Multi-Agent Execution Visualization */}
        <div className="flex flex-col gap-6 max-w-lg my-auto relative z-10 w-full">
          <div>
            <h2 className="text-3xl font-serif text-white tracking-tight leading-tight">
              Ingest messy vendor data sheets into clean, structured catalogs.
            </h2>
            <p className="text-xs text-neutral-400 mt-2 font-medium max-w-sm">
              Our multi-agent pipeline orchestrates crawls, LLM extractions,
              taxonomy mapping, and regulatory compliance automatically.
            </p>
          </div>

          {/* Interactive Agent Process Simulator Box */}
          <div className="bg-[#0c0c0e]/80 backdrop-blur-xl border border-[#1f1f23] rounded-2xl p-6 shadow-2xl w-full">
            <div className="flex justify-between items-center border-b border-[#1f1f23] pb-3.5 mb-4 select-none">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
              </div>
              <span className="font-mono text-[8px] text-[#0284c7] bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/30 uppercase tracking-widest font-bold">
                agent-enrichment-stream
              </span>
            </div>

            <div className="flex flex-col gap-4 font-mono text-[10.5px]">
              {/* Row 1: Raw record input */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-neutral-950/40 border border-neutral-900">
                <div className="flex justify-between text-neutral-500 font-bold text-[9px] uppercase tracking-wider">
                  <span>Input SKU Stream</span>
                  <span className="text-orange-400">unstructured</span>
                </div>
                <span className="text-neutral-300 break-all select-none">
                  "49-94-0101, Milw 4-1/2\"x.045\"x7/8\" Perform+ Metal Cut Off
                  Disc 10pc"
                </span>
              </div>

              {/* Progress Connector line */}
              <div className="flex items-center gap-3 px-4 text-neutral-600 select-none">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-neutral-900 via-[#1f1f23] to-neutral-900"></div>
                <span className="text-[10px] animate-pulse">
                  ⚡ Ingesting...
                </span>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-neutral-900 via-[#1f1f23] to-neutral-900"></div>
              </div>

              {/* Row 2: Enriched output */}
              <div className="flex flex-col gap-2 p-3 rounded-xl bg-neutral-950/90 border border-emerald-950/40">
                <div className="flex justify-between text-neutral-500 font-bold text-[9px] uppercase tracking-wider">
                  <span>Enriched Record Node</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                    standardized
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-neutral-300">
                  <div>
                    <span className="text-[#0284c7]">"Product_Name"</span>:
                    "Cut-Off Disc"
                  </div>
                  <div>
                    <span className="text-[#0284c7]">"BRAND_NAME"</span>:
                    "Milwaukee"
                  </div>
                  <div>
                    <span className="text-[#0284c7]">"Diameter"</span>: "4.5 in"
                  </div>
                  <div>
                    <span className="text-[#0284c7]">"Prop_65"</span>: "No"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel Footer */}
        <div className="flex justify-between items-center text-[10px] text-neutral-500 font-bold uppercase tracking-wider relative z-10 select-none">
          <span>Enterprise Secure v4.2</span>
          <span>&bull; LangGraph Triples Active</span>
        </div>
      </div>

      {/* Right Panel: Login Form Card */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-[#09090b] relative z-10 h-screen overflow-y-auto">
        {/* Top Header for Mobile only */}
        <div className="flex items-center gap-2.5 md:hidden mb-10 select-none">
          <div className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#0284c7] to-[#075985] p-1 border border-sky-400/10">
            <img
              src="/logo.svg"
              alt="Catalog IQ Logo"
              className="w-full h-full"
            />
          </div>
          <span className="text-xs font-bold tracking-tight text-white uppercase">
            CATALOG IQ
          </span>
        </div>

        {/* Middle centered form card */}
        <div className="w-full max-w-sm mx-auto my-auto flex flex-col gap-8 py-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Sign in
            </h2>
            <p className="text-xs text-neutral-400 font-medium mt-1">
              Welcome back! Authenticate to access Catalog IQ.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* Social Oauth options */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() =>
                  triggerLogin("google.admin@catalogiq.ai", "google")
                }
                className="flex items-center justify-center gap-2 bg-[#0c0c0e] hover:bg-[#121214] border border-[#1f1f23] rounded-xl py-2.5 text-xs font-bold text-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting && activeProvider === "google" ? (
                  <span className="w-3.5 h-3.5 border-2 border-neutral-300 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.68 1.54 14.98 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3C6.35 7.6 9 5.04 12 5.04z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.25c0-.82-.07-1.6-.2-2.35H12v4.45h6.45c-.28 1.47-1.12 2.7-2.38 3.55l3.7 2.88c2.16-2 3.73-4.94 3.73-8.53z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.36 14.5c-.24-.72-.38-1.5-.38-2.3c0-.8.14-1.58.38-2.3L1.5 6.9C.54 8.82 0 10.96 0 13.2c0 2.24.54 4.38 1.5 6.3l3.86-3z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.7-2.88c-1.03.69-2.35 1.1-4.26 1.1-3 0-5.65-2.56-6.64-5.46l-3.86 3C3.4 20.35 7.35 23 12 23z"
                    />
                  </svg>
                )}
                <span>Google</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() =>
                  triggerLogin("github.admin@catalogiq.ai", "github")
                }
                className="flex items-center justify-center gap-2 bg-[#0c0c0e] hover:bg-[#121214] border border-[#1f1f23] rounded-xl py-2.5 text-xs font-bold text-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting && activeProvider === "github" ? (
                  <span className="w-3.5 h-3.5 border-2 border-neutral-300 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 fill-current text-neutral-200"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
                <span>GitHub</span>
              </button>
            </div>

            {/* Divider OR */}
            <div className="flex items-center gap-3 text-neutral-600 select-none my-1">
              <div className="h-[1px] flex-grow bg-[#1f1f23]"></div>
              <span className="text-[9px] font-bold tracking-widest font-sans uppercase">
                OR
              </span>
              <div className="h-[1px] flex-grow bg-[#1f1f23]"></div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#0284c7] transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[10px] text-[#0284c7] hover:underline font-semibold"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#0c0c0e] border border-[#1f1f23] rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#0284c7] transition-all font-mono"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] text-xs shadow-md mt-2 cursor-pointer flex justify-center items-center"
              >
                {isSubmitting && activeProvider === "email" ? (
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Continue with Email"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer info at bottom right */}
        <div className="text-center text-[10px] text-neutral-500 font-medium leading-relaxed max-w-xs mx-auto select-none mt-auto">
          <span>By signing in, you agree to our </span>
          <Link
            href="/terms"
            className="underline text-neutral-400 hover:text-neutral-200"
          >
            Terms of Service
          </Link>{" "}
          <span>and </span>
          <Link
            href="/privacy"
            className="underline text-neutral-400 hover:text-neutral-200"
          >
            Privacy Policy
          </Link>
          <div className="text-neutral-600 mt-2 font-mono text-[9px]">
            SECURE SHA-256 JWT AUTH
          </div>
        </div>
      </div>

      {/* Floating premium Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-5 right-5 max-w-sm bg-[#0c0c0e] border border-[#1f1f23] p-4.5 rounded-xl flex flex-col gap-3.5 z-50 text-xs shadow-2xl animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <span className="text-base select-none mt-0.5">🍪</span>
            <div className="flex flex-col gap-1 leading-normal">
              <span className="font-bold text-white">
                We value your privacy
              </span>
              <p className="text-neutral-400 font-medium text-[11px]">
                We use cookies to secure session tokens, track Monthly SKU
                quotas, and evaluate compliance metrics. Read our{" "}
                <a href="#" className="underline text-white hover:text-sky-400">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 justify-end">
            <button
              onClick={() => setShowCookieBanner(false)}
              className="text-neutral-400 hover:text-white px-3 py-1.5 rounded-lg transition-colors font-bold text-[11px]"
            >
              Reject
            </button>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-4 py-1.5 rounded-lg transition-colors text-[11px] shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
