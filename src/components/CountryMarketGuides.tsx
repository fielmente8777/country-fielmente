// Links from each country page to fielmente.com. Only pages that exist: the city and country "location guides"
// these links used to point at were never published on fielmente.com (they returned 404), and Google treats
// sets of near-identical city pages as doorway pages, so they are not linked here.
export default function CountryMarketGuides() {
  return (
    <section className="max_screen_width border-y border-main-border bg-[#F9FAFB] py-12 md:py-16">
      <div className="max_width">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">International experience</p>
        <h2 className="mt-4 max-w-3xl text-2xl font-bold text-primary md:text-3xl">See the work behind the plan</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-secondary">
          Client results, the websites we have built and how we run marketing for hotels, resorts and restaurants outside India.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="https://fielmente.com/case-study/" className="inline-flex rounded-full bg-btn-dark px-6 py-3 font-semibold text-white">
            Client results
          </a>
          <a href="https://fielmente.com/international-hotel-marketing-agency/" className="inline-flex rounded-full border border-main-border bg-white px-6 py-3 font-semibold text-primary">
            International hotel marketing
          </a>
          <a href="https://fielmente.com/our-work/" className="inline-flex rounded-full border border-main-border bg-white px-6 py-3 font-semibold text-primary">
            Our work
          </a>
        </div>
      </div>
    </section>
  );
}
