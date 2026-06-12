import Link from 'next/link';

export default function KebbAppProject() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto min-h-screen">
      {/* Üst Navigasyon ve Etiket */}
      <div className="flex justify-between items-center mb-12">
        <Link 
          href="/#projelerimiz" 
          className="text-sm font-bold text-slate-500 hover:text-[#2A66F5] transition-colors flex items-center gap-2"
        >
          ← ANA SAYFAYA DÖN
        </Link>
        <span className="text-xs font-bold tracking-widest text-[#2A66F5] uppercase bg-[#F0F5FF] px-3 py-1 rounded-full border border-[#D6E4FF]">
          SaaS Altyapısı
        </span>
      </div>

      {/* Sayfa Başlığı - Degrade */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
          KebbApp SaaS Altyapısı
        </span>
      </h1>

      {/* Logo Alanı - ARKA PLAN RENGİ #0c0f2f OLARAK GÜNCELLENDİ */}
      <div className="bg-[#0c0f2f] rounded-3xl p-8 md:p-16 mb-16 flex items-center justify-center shadow-2xl overflow-hidden border border-neutral-100">
        <img 
          src="/kebbapp-logo.png" 
          alt="KebbApp Logo" 
          className="w-full max-w-lg h-auto object-contain transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Proje Detay Metni */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-[#1E293B]">Proje Hakkında</h2>
        <div className="text-neutral-700 leading-relaxed space-y-6 text-justify">
          <p>
            KebbApp, modern işletmelerin operasyonel süreçlerini tek bir merkezden yönetmesini sağlayan tam 
            ölçeklenebilir bir SaaS platformudur. Geliştirme sürecinde mikroservis mimarisi, gerçek zamanlı veri akışları 
            ve yüksek güvenlik standartları ön planda tutulmuştur. Teknik dokümantasyonundan sunucu 
            optimizasyonuna kadar her aşaması en ince ayrıntısına kadar planlanmıştır.
          </p>
          <p>
            Projenin kullanıcı arayüzü, en karmaşık veri setlerini bile son kullanıcının kolayca anlayabileceği 
            minimalist ve modern bir tasarım diliyle kurgulanmıştır. Yüksek trafik altında bile performansından 
            ödün vermeyen bu altyapı, işletmelerin dijitalleşme süreçlerindeki en güçlü yardımcısı olmayı hedeflemektedir.
          </p>
        </div>
      </div>
    </div>
  );
}