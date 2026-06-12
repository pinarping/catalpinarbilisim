import Link from "next/link";

export default function KebbAppPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <header className="w-full h-[70px] px-12 flex justify-between items-center border-b border-neutral-200 bg-white">
        <Link href="/" className="text-sm font-bold tracking-wider text-slate-800 hover:text-black transition-colors">
          ← ANA SAYFAYA DÖN
        </Link>
        <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">
          SaaS Altyapısı
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900">
          KebbApp SaaS Altyapısı
        </h1>
        <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
          Bulut tabanlı, ölçeklenebilir ve yüksek güvenlikli kurumsal SaaS yönetim sistemi.
        </p>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-md bg-white flex items-center justify-center p-8 border border-neutral-100">
          <img src="/kebbapp-logo.png" alt="KebbApp" className="max-h-full object-contain" />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Proje Hakkında</h2>
            <p className="text-neutral-600 leading-relaxed">
              KebbApp, modern işletmelerin operasyonel süreçlerini tek bir merkezden yönetmesini sağlayan tam teşekküllü bir SaaS platformudur. Geliştirme sürecinde mikroservis mimarileri, gerçek zamanlı veri akışları ve yüksek güvenlik standartları ön planda tutulmuştur. Teknik dokümantasyonundan sunucu optimizasyonuna kadar her aşaması en ince ayrıntısına kadar planlanmıştır.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Öne Çıkan Özellikler</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Uçtan Uca Şifrelenmiş Veri Tabanı</li>
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Gelişmiş API Entegrasyonları</li>
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Yüksek Performanslı Sunucu Mimarisi</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Çatalpınar Bilişim. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}