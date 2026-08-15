import type React from "react";
import { useState } from "react";

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
    <div className="w-full h-screen flex flex-col justify-between bg-[#f8fafc] text-neutral-900 font-sans relative overflow-hidden">
      {/* 1. Top Cookie Alert Banner - Prominent Dark contrasting */}
      {showCookieBanner && (
        <div className="w-full bg-[#1c1c1e] border-b border-neutral-800 py-3.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-4 z-50 text-xs font-semibold animate-fadeIn shadow-lg">
          <div className="flex items-center gap-2">
            <span>🍪</span>
            <span className="text-neutral-300">
              We use cookies to enhance your development experience and keep
              your data secure.{" "}
              <a
                href="#"
                className="underline text-white hover:text-neutral-200"
              >
                Privacy Policy
              </a>{" "}
              &middot;{" "}
              <a
                href="#"
                className="underline text-white hover:text-neutral-200"
              >
                Cookie Policy
              </a>
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowCookieBanner(false)}
              className="text-neutral-400 hover:text-white px-2.5 py-1 rounded transition-colors"
            >
              Manage preferences
            </button>
            <button
              onClick={() => setShowCookieBanner(false)}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-4 py-1.5 rounded-lg border border-neutral-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Login Form Container */}
      <div className="flex-grow flex items-center justify-center p-6 relative">
        {/* Soft Background Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(2,132,199,0.04)_0%,rgba(139,92,246,0.01)_60%,transparent_100%)] pointer-events-none"></div>

        <div className="w-full max-w-sm flex flex-col items-center gap-8 relative z-10">
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-[image:linear-gradient(135deg,#0284c7_0%,#0369a1_50%,#075985_100%)] shadow-[0_0_15px_rgba(2,132,199,0.2)]">
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
                className="lucide lucide-circuit-board size-4.5 text-white"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                <circle cx="15" cy="15" r="2"></circle>
              </svg>
            </div>
            <div className="leading-tight">
              <h1 className="text-sm font-bold tracking-tight text-neutral-900">
                CATALOG IQ
              </h1>
              <p className="label-mono !text-[8px] text-neutral-400">
                Product intelligence OS
              </p>
            </div>
          </div>

          <div className="w-full bg-white border border-[#e4e4e7] rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col gap-6">
            {/* Login Header text */}
            <div className="text-center">
              <h2 className="text-xl font-bold tracking-tight text-neutral-950">
                Log in
              </h2>
              <p className="text-[11px] text-neutral-400 font-medium mt-1">
                Authenticate to access the intelligence OS
              </p>
            </div>

            {/* Social OAuth Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() =>
                  triggerLogin("google.admin@catalogiq.ai", "google")
                }
                className="w-full flex items-center justify-center gap-3 bg-[#f4f4f5] hover:bg-neutral-200/50 border border-[#e4e4e7] rounded-xl py-3 text-xs font-semibold text-neutral-800 transition-all active:scale-[0.98] disabled:opacity-65 cursor-pointer"
              >
                {isSubmitting && activeProvider === "google" ? (
                  <span className="w-3.5 h-3.5 border-2 border-neutral-800 border-t-transparent rounded-full animate-spin"></span>
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
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() =>
                  triggerLogin("github.admin@catalogiq.ai", "github")
                }
                className="w-full flex items-center justify-center gap-3 bg-[#f4f4f5] hover:bg-neutral-200/50 border border-[#e4e4e7] rounded-xl py-3 text-xs font-semibold text-neutral-800 transition-all active:scale-[0.98] disabled:opacity-65 cursor-pointer"
              >
                {isSubmitting && activeProvider === "github" ? (
                  <span className="w-3.5 h-3.5 border-2 border-neutral-800 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 fill-current text-neutral-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
                <span>Continue with GitHub</span>
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() =>
                  triggerLogin("apple.admin@catalogiq.ai", "apple")
                }
                className="w-full flex items-center justify-center gap-3 bg-[#f4f4f5] hover:bg-neutral-200/50 border border-[#e4e4e7] rounded-xl py-3 text-xs font-semibold text-neutral-800 transition-all active:scale-[0.98] disabled:opacity-65 cursor-pointer"
              >
                {isSubmitting && activeProvider === "apple" ? (
                  <span className="w-3.5 h-3.5 border-2 border-neutral-800 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 fill-current text-neutral-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.97 1.1.09 2.24-.57 3-1.41z" />
                  </svg>
                )}
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider OR */}
            <div className="flex items-center gap-3 text-neutral-350 my-1 select-none">
              <div className="h-[1px] flex-grow bg-neutral-200"></div>
              <span className="text-[10px] font-bold font-sans uppercase">
                OR
              </span>
              <div className="h-[1px] flex-grow bg-neutral-200"></div>
            </div>

            {/* Email & Password form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] text-neutral-400 font-bold uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#f8fafc] border border-[#e4e4e7] rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#0284c7] transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] text-neutral-400 font-bold uppercase">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#f8fafc] border border-[#e4e4e7] rounded-xl px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#0284c7] transition-all font-mono"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-neutral-950 hover:bg-neutral-800 text-white font-bold py-3 rounded-xl transition-all active:scale-[0.98] text-xs shadow-md mt-1 cursor-pointer"
              >
                {isSubmitting && activeProvider === "email" ? (
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Continue"
                )}
              </button>
            </form>

            {/* Form Footers */}
            <div className="flex flex-col gap-2 text-center text-[10px] text-neutral-400 font-semibold border-t border-[#e4e4e7] pt-4 leading-relaxed">
              <a href="#" className="hover:text-neutral-900 transition-colors">
                Don't have an account? Create your account
              </a>
              <span className="text-neutral-350">
                SSO available on Business and Enterprise plans
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Banner Promotion */}
      <div className="w-full border-t border-[#e4e4e7] py-4 text-center text-[10px] text-neutral-400 font-bold uppercase tracking-wider bg-white shadow-inner">
        Ask Lovable to build your saas start
      </div>
    </div>
  );
}
