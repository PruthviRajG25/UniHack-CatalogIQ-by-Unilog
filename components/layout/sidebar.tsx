export type ActiveTab =
  | "dashboard"
  | "raw"
  | "enrich"
  | "commerce"
  | "graph"
  | "export"
  | "pitch";

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userEmail: string;
  onLogout: () => void;
}

export function Sidebar({
  activeTab,
  setActiveTab,
  userEmail,
  onLogout,
}: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "raw", label: "Raw Catalog Inputs", icon: "📥" },
    { id: "enrich", label: "AI Agent Pipeline", icon: "⚙️" },
    { id: "commerce", label: "Structured Catalog", icon: "🗂️" },
    { id: "graph", label: "Knowledge Graph", icon: "🌐" },
    { id: "pitch", label: "Executive Pitch Deck", icon: "🎯" },
    { id: "export", label: "Export & Publish", icon: "🚀" },
  ];

  return (
    <div className="w-64 bg-neutral-900 border-r border-neutral-800 text-white flex flex-col justify-between h-screen shrink-0 font-sans">
      <div className="flex flex-col">
        {/* Brand Header */}
        <div className="px-6 py-8 border-b border-neutral-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-mural-green rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-black shadow-lg">
            IQ
          </div>
          <div>
            <h1 className="font-sans font-bold text-lg leading-none tracking-tight">
              Catalog IQ
            </h1>
            <span className="text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">
              Product Intelligence
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1 p-4">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as ActiveTab)}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all ${
                  isActive
                    ? "bg-mural-green text-black font-semibold shadow-md"
                    : "hover:bg-neutral-800 text-neutral-300 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Session & System Status */}
      <div className="p-4 border-t border-neutral-800 flex flex-col gap-4">
        {/* User profile info */}
        <div className="flex items-center justify-between bg-neutral-950 p-3 rounded-xl border border-neutral-800/50">
          <div className="flex flex-col overflow-hidden">
            <span className="text-[9px] text-neutral-500 font-bold uppercase">
              Active Session
            </span>
            <span className="text-xs text-neutral-300 font-semibold truncate max-w-[130px]">
              {userEmail}
            </span>
          </div>
          <button
            onClick={onLogout}
            title="Sign Out"
            className="text-neutral-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-neutral-900 transition-all text-sm font-semibold"
          >
            🚪
          </button>
        </div>

        {/* Environment Status */}
        <div className="flex items-center gap-2 px-2">
          <div className="w-2.5 h-2.5 bg-mural-green rounded-full animate-pulse"></div>
          <span className="text-xs text-neutral-400 font-medium">
            Flash Active — Ready
          </span>
        </div>
      </div>
    </div>
  );
}
