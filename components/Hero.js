export default function Hero() {
  return (
    <section className="relative flex-grow flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      
      {/* Arka plan rengini logodaki çelik mavisi (slate/sky) tonlarına çektik */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100 to-slate-200 rounded-full blur-[100px] opacity-60 -z-10"></div>

      <div className="max-w-3xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight pb-3 pt-1 leading-tight mb-6 text-neutral-900">
          Geleceğin Teknolojilerini <br/>
          {/* Yazı geçişini logoya uygun slate ve sky renklerine ayarladık */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-sky-700">
            İnşa Ediyoruz
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Çatalpınar Bilişim olarak, işletmeniz için özel yazılım çözümleri, modern web mimarileri ve güvenli altyapılar geliştiriyoruz. Fikirlerinizi dijital dünyaya taşıyalım.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Buton rengini logonun koyu mavi/gri tonuna (slate-800) çektik */}
          <a href="#proje-baslat" className="w-full sm:w-auto bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-slate-800/20 hover:bg-slate-900 transition-all duration-300 text-center">
            Projeyi Başlatın
          </a>
          <a href="#hizmetler" className="w-full sm:w-auto border border-neutral-300 bg-white/50 backdrop-blur-sm text-neutral-700 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 hover:border-neutral-400 transition-all duration-300 text-center">
            Çözümlerimizi İnceleyin
          </a>
        </div>
      </div>
    </section>
  )
}