export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Arka plan dekoratif dokunuş - Logo mavisinden hafif bir esinti */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2A66F5]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F0F5FF] border border-[#D6E4FF] mb-8">
          <span className="text-xs font-bold tracking-widest text-[#2A66F5] uppercase">
            Yazılım ve Teknoloji Ofisi
          </span>
        </div>

        {/* İstediğin Degrade Başlık: Logo Mavisinden Koyu Laciverte */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
            Geleceğin Teknolojilerini <br className="hidden md:block" /> İnşa Ediyoruz
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Çatalpınar Bilişim olarak, işletmeniz için özel yazılım çözümleri, 
          modern web mimarileri ve güvenli altyapılar geliştiriyoruz. 
          Fikirlerinizi dijital dünyaya tam uyumla taşıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-[#2A66F5] text-white font-bold rounded-xl hover:bg-[#1E54D4] transition-all shadow-lg shadow-[#2A66F5]/20 hover:-translate-y-1">
            Projeyi Başlat
          </button>
          <button className="px-8 py-4 bg-white text-[#1E293B] font-bold rounded-xl border border-neutral-200 hover:border-[#2A66F5] hover:text-[#2A66F5] transition-all">
            Çözümlerimizi İnceleyin
          </button>
        </div>
      </div>
    </section>
  );
}