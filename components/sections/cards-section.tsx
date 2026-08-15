export function CardsSection() {
  return (
    <section className="bg-mural-beige py-24 px-6 md:px-12 w-full">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-[56px] leading-tight font-serif text-mural-dark text-center mb-16 max-w-2xl mx-auto">
          Just what the enterprise ordered
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col h-full rounded-xl overflow-hidden border border-mural-dark">
            <div className="bg-mural-purple p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <div className="font-bold text-2xl mb-12">Microsoft</div>
                <h3 className="text-3xl font-serif mb-6 leading-tight">
                  Microsoft + Mural = magic
                </h3>
              </div>
              <p className="text-lg font-medium leading-snug">
                Mural takes the Microsoft ecosystem to another level.
              </p>
            </div>
            <a
              href="#"
              className="bg-mural-dark text-white p-6 flex justify-between items-center group hover:bg-black transition-colors"
            >
              <span className="font-medium text-lg">
                Explore Microsoft partnership
              </span>
              <span className="group-hover:translate-x-1 transition-transform text-2xl leading-none">
                &rarr;
              </span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full rounded-xl overflow-hidden border border-mural-dark">
            <div className="bg-mural-blue p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <div className="font-bold text-2xl mb-12">SAP</div>
                <h3 className="text-3xl font-serif mb-6 leading-tight">
                  How SAP achieved a 400+% ROI
                </h3>
              </div>
              <p className="text-lg font-medium leading-snug">
                After getting started with Mural, flexibility and transparency
                increased.
              </p>
            </div>
            <a
              href="#"
              className="bg-mural-dark text-white p-6 flex justify-between items-center group hover:bg-black transition-colors"
            >
              <span className="font-medium text-lg">Get the study</span>
              <span className="group-hover:translate-x-1 transition-transform text-2xl leading-none">
                &rarr;
              </span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full rounded-xl overflow-hidden border border-mural-dark">
            <div className="bg-mural-green p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <div className="font-bold text-2xl mb-12">
                  Hewlett Packard
                  <br />
                  Enterprise
                </div>
                <h3 className="text-3xl font-serif mb-6 leading-tight">
                  HPE saves 1,400+ hours per year
                </h3>
              </div>
              <p className="text-lg font-medium leading-snug">
                Accelerating customer innovation culture with Mural + LUMA
                System™
              </p>
            </div>
            <a
              href="#"
              className="bg-mural-dark text-white p-6 flex justify-between items-center group hover:bg-black transition-colors"
            >
              <span className="font-medium text-lg">Read case study</span>
              <span className="group-hover:translate-x-1 transition-transform text-2xl leading-none">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
