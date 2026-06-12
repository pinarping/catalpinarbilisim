export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-neutral-200 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Şirket Unvanı - Degrade */}
        <h3 className="text-lg md:text-xl font-bold tracking-wide mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
            ÇATALPINAR BİLİŞİM VE TEKNOLOJİ SANAYİ TİCARET A.Ş.
          </span>
        </h3>
        
        {/* Telif Hakkı ve Linkler */}
        <p className="text-neutral-500 text-sm mb-6">
          © {new Date().getFullYear()} Tüm Hakları Saklıdır.
        </p>
        
        <div className="flex gap-6 text-sm text-neutral-600">
          <a href="#" className="hover:text-[#2A66F5] transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-[#2A66F5] transition-colors">Kullanım Koşulları</a>
          <a href="#" className="hover:text-[#2A66F5] transition-colors">KVKK Aydınlatma Metni</a>
        </div>
      </div>
    </footer>
  );
}