import { useState } from "react";

export type ActiveTab =
  | "dashboard"
  | "pipeline"
  | "commerce"
  | "review"
  | "sources"
  | "pitch";

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userEmail: string;
  onLogout: () => void;
  onRunEnrichment: () => void;
  rawProductsCount: number;
}

export function Header({
  activeTab,
  setActiveTab,
  userEmail,
  onLogout,
  onRunEnrichment,
  rawProductsCount,
}: HeaderProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Control room",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-gauge size-4"
        >
          <path d="m12 14 4-4"></path>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
        </svg>
      ),
    },
    {
      id: "pipeline",
      label: "Pipeline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-workflow size-4"
        >
          <rect width="8" height="8" x="3" y="3" rx="2"></rect>
          <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
          <rect width="8" height="8" x="13" y="13" rx="2"></rect>
        </svg>
      ),
    },
    {
      id: "commerce",
      label: "Catalog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-boxes size-4"
        >
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
          <path d="m7 16.5-4.74-2.85"></path>
          <path d="m7 16.5 5-3"></path>
          <path d="M7 16.5v5.17"></path>
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
          <path d="m17 16.5-5-3"></path>
          <path d="m17 16.5 4.74-2.85"></path>
          <path d="M17 16.5v5.17"></path>
          <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
          <path d="M12 8 7.26 5.15"></path>
          <path d="m12 8 4.74-2.85"></path>
          <path d="M12 13.5V8"></path>
        </svg>
      ),
    },
    {
      id: "review",
      label: "Review queue",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield-check size-4"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
    {
      id: "sources",
      label: "Sources & agents",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-database size-4"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </svg>
      ),
    },
    {
      id: "pitch",
      label: "Pitch deck",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circuit-board size-4"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <circle cx="15" cy="15" r="2"></circle>
          <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
          <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
        </svg>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[#e4e4e7] bg-white/90 backdrop-blur-xl w-full text-neutral-900 font-sans">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-5 justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div
            className="grid size-9 place-items-center rounded-md bg-[image:linear-gradient(135deg,#0284c7_0%,#0369a1_50%,#075985_100%)] shadow-[0_0_15px_rgba(2,132,199,0.2)] cursor-pointer p-1.5"
            onClick={() => setActiveTab("dashboard")}
          >
            <img
              src="/logo.svg"
              alt="Catalog IQ Logo"
              className="w-full h-full text-white"
            />
          </div>
          <div className="leading-tight select-none">
            <p className="font-display text-sm font-bold tracking-tight text-neutral-950">
              CATALOG IQ
            </p>
            <p className="label-mono !text-[8px] text-neutral-400">
              Product intelligence OS
            </p>
          </div>
        </div>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#f4f4f5] border border-[#e4e4e7] p-1 rounded-lg">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as ActiveTab)}
                className={`flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-neutral-950 shadow-sm border border-[#e4e4e7]"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/40 border border-transparent"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Search Input & Global Actions */}
        <div className="flex items-center gap-4">
          {/* Ask Catalog search pill */}
          <div className="hidden md:flex items-center gap-2 rounded-md border border-[#e4e4e7] bg-white px-3 py-1.5">
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
              className="lucide lucide-command size-3.5 text-neutral-400"
              aria-hidden="true"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
            <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              ⌘K · Ask the catalog
            </span>
          </div>

          {/* Dynamic Run Enrichment Button */}
          {rawProductsCount > 0 && (
            <button
              onClick={onRunEnrichment}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all hover:brightness-105 active:scale-95 bg-[#0284c7] text-white font-semibold shadow-sm h-9 rounded-md px-3.5 text-xs"
            >
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
                className="lucide lucide-flask-conical size-4"
                aria-hidden="true"
              >
                <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                <path d="M6.453 15h11.094"></path>
                <path d="M8.5 2h7"></path>
              </svg>
              Run enrichment
            </button>
          )}

          {/* User profile dropdown popover */}
          <div className="relative flex items-center border-l border-[#e4e4e7] pl-4">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center gap-2.5 text-left hover:opacity-85 transition-all focus:outline-none cursor-pointer"
            >
              {/* Profile Avatar Initials */}
              <div className="w-8 h-8 rounded-full bg-[image:linear-gradient(135deg,#0284c7_0%,#0369a1_50%,#075985_100%)] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                {userEmail ? userEmail.slice(0, 2).toUpperCase() : "AD"}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                  Active Session
                </span>
                <span className="text-xs text-neutral-700 font-semibold max-w-[100px] truncate">
                  {userEmail}
                </span>
              </div>
              <span className="text-neutral-400 text-[10px]">
                &bull;&bull;&bull;
              </span>
            </button>

            {/* Account Info Details Popover Card */}
            {showProfileDropdown && (
              <div className="absolute right-0 top-11 w-80 bg-white border border-[#e4e4e7] rounded-xl p-5 shadow-2xl z-50 animate-fadeIn flex flex-col gap-4 text-neutral-900">
                {/* Profile Header */}
                <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                  <div className="w-10 h-10 rounded-full bg-[image:linear-gradient(135deg,#0284c7_0%,#0369a1_50%,#075985_100%)] text-white flex items-center justify-center font-bold text-sm">
                    {userEmail ? userEmail.slice(0, 2).toUpperCase() : "AD"}
                  </div>
                  <div className="leading-tight">
                    <h4 className="text-xs font-bold text-neutral-950">
                      Enterprise Admin
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-semibold truncate max-w-[190px]">
                      {userEmail}
                    </p>
                  </div>
                </div>

                {/* Account Details & Role */}
                <div className="flex flex-col gap-1 text-xs">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                    Account Role
                  </span>
                  <span className="font-bold text-neutral-800">
                    Principal AI Architect / Store Admin
                  </span>
                </div>

                {/* Permissions Tags */}
                <div className="flex flex-col gap-1.5 border-t border-neutral-100 pt-3">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                    Access Permissions
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Read",
                      "Write",
                      "Ingest",
                      "Publish",
                      "Audit",
                      "API Admin",
                    ].map((perm) => (
                      <span
                        key={perm}
                        className="bg-sky-50 text-[#0284c7] px-2 py-0.5 rounded text-[9px] font-bold border border-sky-100"
                      >
                        {perm}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingestion Limit Quota Progress */}
                <div className="flex flex-col gap-1.5 border-t border-neutral-100 pt-3">
                  <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500">
                    <span className="uppercase tracking-wider">
                      Monthly SKU Quota
                    </span>
                    <span className="font-mono text-neutral-700">84% Used</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                    <div
                      className="h-full bg-[#0284c7] rounded-full"
                      style={{ width: "84%" }}
                    ></div>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-semibold font-sans">
                    42,091 / 50,000 SKUs processed
                  </span>
                </div>

                {/* Session Security Token Trace */}
                <div className="flex flex-col gap-1 border-t border-neutral-100 pt-3 text-[10px] text-neutral-400 font-semibold">
                  <div className="flex justify-between">
                    <span>Authentication:</span>
                    <span className="font-bold text-neutral-600">
                      Standard JWT Secure
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Host Latency:</span>
                    <span className="font-bold text-neutral-600">18ms</span>
                  </div>
                </div>

                {/* Sign Out Button */}
                <button
                  onClick={() => {
                    setShowProfileDropdown(false);
                    onLogout();
                  }}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 rounded-lg text-xs w-full text-center transition-all cursor-pointer shadow-sm mt-1"
                >
                  🚪 Sign Out Securely
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Sub-Navigation */}
      <div className="flex gap-2 overflow-x-auto border-t border-[#e4e4e7] px-5 py-2.5 lg:hidden bg-white">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as ActiveTab)}
              className={`whitespace-nowrap rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#f4f4f5] text-neutral-950 border border-[#e4e4e7]"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
