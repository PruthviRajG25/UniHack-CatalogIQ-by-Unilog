import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="w-full flex flex-col">
      {/* 1. Value Props */}
      <div className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Item 1 */}
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-mural-lavender rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-sans font-bold text-black">
              Bring teams together
            </h3>
            <p className="text-black/80 text-base">
              Connect your teams in shared spaces to spur new ideas and better
              conversations.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-mural-blue rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="text-xl font-sans font-bold text-black">
              Get the big picture
            </h3>
            <p className="text-black/80 text-base">
              Put all the moving parts of your projects in context and say
              sayonara to silos.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-mural-pink rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-sans font-bold text-black">
              Make time for teams
            </h3>
            <p className="text-black/80 text-base">
              Align distributed teams to make decisions quickly and keep the
              ball rolling.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-mural-green rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-sans font-bold text-black">
              Stay safe and sound
            </h3>
            <p className="text-black/80 text-base">
              Compliant with GDPR and CCPA regulations to keep your data and
              employees secure.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Social Proof */}
      <div className="bg-mural-lavender w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] w-full border-b border-black/10">
          {/* Left Side */}
          <div className="p-12 md:p-16 lg:p-24 flex flex-col justify-center items-start lg:border-r border-black/10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[40px] leading-tight font-serif text-black mb-8">
              Trusted by the world's most
              <br />
              security conscious enterprises
            </h2>
            <Button
              variant="dark"
              iconBg="bg-neutral-900"
              iconColor="text-white"
            >
              Discover enterprise
            </Button>
          </div>

          {/* Right Side - Logos Grid */}
          <div className="grid grid-cols-3 grid-rows-3">
            {/* Autodesk */}
            <div className="flex items-center justify-center p-8 border-r border-b border-black/10 h-[160px]">
              <div className="font-sans font-bold text-xl tracking-tighter flex items-center gap-2 text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11 2L2 22h5l2.5-5.5h5L17 22h5L13 2H11zm1 5.5l1.5 3.5h-3l1.5-3.5z" />
                </svg>
                AUTODESK
              </div>
            </div>
            {/* Microsoft */}
            <div className="flex items-center justify-center p-8 border-r border-b border-black/10 h-[160px]">
              <div className="font-sans font-semibold text-xl flex items-center gap-2 text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                </svg>
                Microsoft
              </div>
            </div>
            {/* Atlassian */}
            <div className="flex items-center justify-center p-8 border-b border-black/10 h-[160px]">
              <div className="font-sans font-bold text-xl flex items-center gap-2 text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.4 2L2 22h7.5l4-8.5L11.4 2zm1 3l5 17h4.5L13.5 5l-1.1-2z" />
                </svg>
                ATLASSIAN
              </div>
            </div>
            {/* IBM */}
            <div className="flex items-center justify-center p-8 border-r border-b border-black/10 h-[160px]">
              <div className="font-serif font-bold text-[48px] tracking-tighter text-black flex relative">
                IBM
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,#d1e0ff_2px,#d1e0ff_4px)]"></div>
              </div>
            </div>
            {/* Abercrombie & Fitch */}
            <div className="flex items-center justify-center p-8 border-r border-b border-black/10 h-[160px]">
              <div className="font-serif text-[12px] text-center font-bold text-black leading-tight">
                Abercrombie & Fitch Co.
              </div>
            </div>
            {/* Intuit */}
            <div className="flex items-center justify-center p-8 border-b border-black/10 h-[160px]">
              <div className="font-sans font-bold text-3xl tracking-tight text-black">
                INTUIT
              </div>
            </div>
            {/* Jacobs */}
            <div className="flex items-center justify-center p-8 border-r border-black/10 h-[160px]">
              <div className="font-serif font-bold text-3xl text-black">
                Jacobs
              </div>
            </div>
            {/* Steelcase */}
            <div className="flex items-center justify-center p-8 border-r border-black/10 h-[160px]">
              <div className="font-sans font-bold text-2xl tracking-tighter text-black">
                Steelcase
              </div>
            </div>
            {/* Adobe */}
            <div className="flex items-center justify-center p-8 h-[160px]">
              <div className="font-sans font-bold text-xl flex items-center gap-2 text-black">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M15 2L24 22H17l-3-7-3 7H2L11 2h4zm-3 8.5L9 16h6l-3-5.5z" />
                </svg>
                Adobe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
