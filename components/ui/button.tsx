import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  variant?: "primary" | "secondary" | "dark" | "outline";
}

export function Button({
  children,
  iconBg = "bg-mural-orange",
  iconColor = "text-black",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  // Styling classes for different variations
  let btnClasses =
    "inline-flex items-center gap-4 bg-white border border-black rounded-sm pl-0 pr-6 py-0 font-medium transition-all hover:bg-neutral-50 overflow-hidden h-[48px]";

  if (variant === "dark") {
    btnClasses =
      "inline-flex items-center gap-4 bg-neutral-900 border border-neutral-900 text-white rounded-sm pl-0 pr-6 py-0 font-medium transition-all hover:bg-neutral-800 overflow-hidden h-[48px]";
  } else if (variant === "outline") {
    btnClasses =
      "inline-flex items-center gap-4 bg-transparent border border-black rounded-sm pl-0 pr-6 py-0 font-medium transition-all hover:bg-black/5 overflow-hidden h-[48px]";
  }

  return (
    <button className={`${btnClasses} ${className}`} {...props}>
      <span
        className={`flex items-center justify-center w-[48px] h-[48px] ${iconBg} ${iconColor} border-r border-black font-bold shrink-0`}
      >
        {/* Right Arrow icon */}
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
      <span className="text-sm tracking-wide uppercase font-semibold">
        {children}
      </span>
    </button>
  );
}
