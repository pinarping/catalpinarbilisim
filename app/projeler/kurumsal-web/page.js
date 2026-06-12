import Link from "next/link";

export default function KurumsalWebPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <header className="w-full h-[70px] px-12 flex justify-between items-center border-b border-neutral-200 bg-white">
        <Link href="/" className="text-sm font-bold tracking-wider text-slate-800 hover:text-black transition-colors">
          ← ANA SAYFAYA DÖN
        </Link>
        <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">
          Dijital Çözümler
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900">
          Kurumsal Web Mimarisi
        </h1>
        <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
          Markaların dijital prestijini artıran, yüksek performanslı ve minimalist web platformu.
        </p>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-md">
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200" alt="Kurumsal Web" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Proje Hakkında</h2>
            <p className="text-neutral-600 leading-relaxed">
              Modern kurumsal kimliğe tam uyumlu, hız ve SEO odaklı özel arayüz mimarisi. Ziyaretçilerin aradıkları bilgiye en akıcı ve pürüzsüz kullanıcı deneyimiyle (UI/UX) ulaşması hedeflenmiştir. Mobil cihazlarla ve tüm tarayıcılarla kusursuz bir uyum içinde çalışmaktadır.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-2xl font-bold mb-4 text-neutral-900">Öne Çıkan Özellikler</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Minimalist ve Premium UI/UX Tasarım</li>
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Ultra Hızlı Sayfa Yüklenme Performansı</li>
              <li className="flex items-center text-neutral-600"><span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>Tam Mobil Entegrasyon (Responsive)</li>
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