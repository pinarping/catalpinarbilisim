export default function Services() {
  return (
    <section id="neler-yapiyoruz" className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
              Neler Yapıyoruz?
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#A6C4FF] hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                Özel Yazılım Geliştirme
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed">İhtiyaçlarınıza özel, ölçeklenebilir ve güvenli yazılım çözümleri üretiyoruz. İş süreçlerinizi dijitalleştirerek verimliliğinizi artırıyoruz.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#A6C4FF] hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                SaaS Altyapıları
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed">Bulut tabanlı, yüksek performanslı ve modern mimariye sahip SaaS platformları kuruyoruz. Fikirlerinizi küresel ölçekte hizmet veren ürünlere dönüştürüyoruz.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-[#A6C4FF] hover:shadow-md transition-all">
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                Mobil & Ekosistem
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed">Farklı cihazlarda kusursuz çalışan, kullanıcı dostu mobil ve Apple/Android ekosistem uygulamaları geliştiriyoruz.</p>
          </div>

        </div>
      </div>
    </section>
  );
}