export default function Projects() {
  return (
    <section id="projelerimiz" className="relative scroll-mt-[100px] py-24 px-6 bg-white text-neutral-900 border-t border-neutral-200 overflow-hidden z-10">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-50 to-neutral-100 rounded-full blur-3xl opacity-80 -z-10 -translate-x-1/4 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
              Öne Çıkan Projelerimiz
            </span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">Geliştirdiğimiz modern altyapılar ve yazılım çözümlerinden someları.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="group relative overflow-hidden rounded-2xl bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 hover:border-slate-300 transition-all duration-500 flex flex-col">
            <div className="h-56 w-full bg-[#0a0f1d] flex items-center justify-center overflow-hidden border-b border-neutral-100">
              <img 
                src="/kebbapp-logo.png" 
                alt="KebbApp Logo" 
                className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">SaaS Altyapısı</div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                  KebbApp
                </span>
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                SaaS mimarisine sahip kapsamlı yazılım projesi. Teknik dokümantasyon, sunucu yönetimi ve modern arayüzü ile uçtan uca geliştirilmiş sistem altyapısı.
              </p>
              <a href="/projeler/kebbapp" className="inline-flex items-center text-slate-900 font-semibold group-hover:text-[#2A66F5] transition-colors">
                Projeyi İncele →
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 hover:border-slate-300 transition-all duration-500 flex flex-col">
            <div className="h-56 w-full overflow-hidden border-b border-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" 
                alt="Kurumsal Web Mimarisi" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Dijital Çözümler</div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                  Kurumsal Web Mimarisi
                </span>
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                Markaların dijital varlıklarını güçlendiren, yüksek performanslı ve minimalist UI/UX standartlarına sahip özel web platformları.
              </p>
              <a href="/projeler/kurumsal-web" className="inline-flex items-center text-slate-900 font-semibold group-hover:text-[#2A66F5] transition-colors">
                Projeyi İncele →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}