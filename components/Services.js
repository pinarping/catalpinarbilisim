export default function Services() {
  return (
    <section id="hizmetler" className="relative scroll-mt-[100px] py-24 px-6 bg-neutral-50 text-neutral-900 border-t border-neutral-200 overflow-hidden z-10">
      
      {/* Arka Plandaki Dijital Işık Huzmesi (Şimdi görünecek) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-slate-200 to-sky-100 rounded-full blur-3xl opacity-70 -z-10 translate-x-1/4 -translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Neler Yapıyoruz?</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">Modern teknolojilerle işletmenizi geleceğe taşıyacak dijital çözümler üretiyoruz.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Kart: Özel Yazılım (Temiz kod ve Mac ekranı) */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
            <div className="h-48 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                alt="Özel Yazılım" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Özel Yazılım Geliştirme</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                İhtiyaçlarınıza tam uyumlu, ölçeklenebilir ve yüksek performanslı modern web uygulamaları inşa ediyoruz.
              </p>
            </div>
          </div>

          {/* 2. Kart: SaaS (Bulut ve Ağ Mimarisi) */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
            <div className="h-48 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="SaaS Altyapıları" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">SaaS Altyapıları</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Bulut tabanlı, güvenli ve kolay yönetilebilir SaaS (Hizmet Olarak Yazılım) mimarileri kuruyoruz.
              </p>
            </div>
          </div>

          {/* 3. Kart: Mobil (Mobil Cihaz ve Ekosistem) */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
            <div className="h-48 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" 
                alt="Mobil ve Ekosistem" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">Mobil & Ekosistem</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Apple ve Google geliştirici standartlarına tam uyumlu, kesintisiz ve akıcı mobil deneyimler tasarlıyoruz.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}