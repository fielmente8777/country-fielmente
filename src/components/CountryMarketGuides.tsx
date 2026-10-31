const base="https://fielmente.com/international-hotel-marketing-agency/locations/";
const countryGuides:Record<string,{name:string;path:string}[]>={
 france:[{name:"Paris hotel and restaurant marketing",path:"france/paris/"}],
 netherlands:[{name:"Amsterdam hotel and restaurant marketing",path:"netherlands/amsterdam/"}],
 canada:[{name:"Ontario hospitality marketing",path:"canada/ontario/"},{name:"Mississauga hotel and restaurant marketing",path:"canada/ontario/mississauga/"}],
 uk:[{name:"London hotel and restaurant marketing",path:"united-kingdom/london/"},{name:"Scotland hospitality marketing",path:"united-kingdom/scotland/"}],
 thailand:[{name:"Bangkok hospitality marketing",path:"thailand/bangkok/"},{name:"Phuket hotel and resort marketing",path:"thailand/phuket/"},{name:"Koh Samui resort and villa marketing",path:"thailand/koh-samui/"}],
 australia:[{name:"Hotel marketing in Australia",path:"australia/hotel-marketing/"},{name:"Restaurant marketing in Australia",path:"australia/restaurant-marketing/"}],
};
export default function CountryMarketGuides({slug}:{slug:string}){
 const guides=countryGuides[slug]??[];
 return <section className="max_screen_width border-y border-main-border bg-[#F9FAFB] py-12 md:py-16"><div className="max_width"><p className="text-sm font-semibold uppercase tracking-widest text-secondary">International experience and local service plans</p><h2 className="mt-4 max-w-3xl text-2xl font-bold text-primary md:text-3xl">Find the plan that fits your property</h2><p className="mt-5 max-w-3xl leading-relaxed text-secondary">Explore our named international client references and connected country, city and property-specific services. The right scope follows your location, guest mix, enquiry process and booking goals.</p>{guides.length>0&&<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{guides.map(g=><li key={g.path}><a href={base+g.path} className="block h-full rounded-xl border border-main-border bg-white px-5 py-4 font-semibold text-primary hover:border-tertiary">{g.name} <span aria-hidden="true">↗</span></a></li>)}</ul>}<div className="mt-7 flex flex-wrap gap-4"><a href="https://fielmente.com/international-hospitality-marketing-experience/" className="inline-flex rounded-full bg-btn-dark px-6 py-3 font-semibold text-white">Explore international client references</a><a href={base} className="inline-flex rounded-full border border-main-border bg-white px-6 py-3 font-semibold text-primary">All countries and destinations</a></div></div></section>;
}
