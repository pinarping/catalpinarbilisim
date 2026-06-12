export default function Cta() {
  return (
    <section className="py-24 px-6 bg-[#F0F5FF] border-t border-[#D6E4FF]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
            Projenizi Başlatalım
          </span>
        </h2>
        <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
          Fikirlerinizi gerçeğe dönüştürmek ve dijital dünyada sağlam bir yer edinmek için bizimle iletişime geçin. Ekibimiz size en uygun çözümü sunmak için hazır.
        </p>
        <button className="px-10 py-5 bg-[#2A66F5] text-white text-lg font-bold rounded-xl hover:bg-[#1E54D4] transition-all shadow-xl shadow-[#2A66F5]/20 hover:-translate-y-1">
          Bizimle İletişime Geçin
        </button>
      </div>
    </section>
  );
}