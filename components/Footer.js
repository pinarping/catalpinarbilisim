export default function Footer() {
  return (
    <footer id="iletisim" className="bg-white text-neutral-950 border-t border-neutral-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-neutral-100">
          
          <div className="md:col-span-1">
            <div className="text-lg font-bold tracking-wider mb-4 text-neutral-900">
              ÇATALPINAR BİLİŞİM VE TEKNOLOJİ SANAYİ TİCARET A.Ş.
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              İşletmeniz için özel yazılım çözümleri, modern web mimarileri ve yüksek performanslı SaaS altyapıları inşa eden teknoloji partneriniz.
            </p>
          </div>

          <div className="md:col-span-1 md:pl-12">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Navigasyon</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#hizmetler" className="hover:text-black transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#projelerimiz" className="hover:text-black transition-colors">Projelerimiz</a></li>
              <li><a href="#hakkimizda" className="hover:text-black transition-colors">Hakkımızda</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">İletişim</h4>
            <p className="text-neutral-600 text-sm mb-4">Projelerinizi hayata geçirmek veya bilgi almak için bizimle iletişime geçin.</p>
            {/* Mail adresini info@catalpinarbilisim.com olarak değiştirdik */}
            <a 
              href="mailto:info@catalpinarbilisim.com" 
              className="text-base font-semibold text-neutral-900 hover:underline inline-block"
            >
              info@catalpinarbilisim.com
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Çatalpınar Bilişim. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <span className="text-neutral-300">Özel Mimari Yapı</span>
          </div>
        </div>

      </div>
    </footer>
  )
}