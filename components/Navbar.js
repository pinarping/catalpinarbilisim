import Image from "next/image";

export default function Navbar() {
  return (
    // Menü şeridini ince (h-[70px]) olarak kilitliyoruz
    <nav className="w-full h-[70px] px-12 flex justify-between items-center border-b border-neutral-200 bg-neutral-50/80 backdrop-blur-md sticky top-0 z-50">
      
      {/* Logonun orijinal yatay konumunu koruyup, dikeyde menüyü kalınlaştırmasını engelliyoruz */}
      <div className="h-0 flex items-center overflow-visible">
        <Image 
          src="/logo-2.png" 
          alt="Çatalpınar Bilişim Logo" 
          width={400} 
          height={200} 
          priority 
        />
      </div>

      <div className="hidden md:flex space-x-12 text-sm font-medium tracking-wide text-neutral-600">
        <a href="#hizmetler" className="hover:text-slate-700 transition-colors duration-300">Hizmetlerimiz</a>
        <a href="#projelerimiz" className="hover:text-slate-700 transition-colors duration-300">Projelerimiz</a>
        <a href="#hakkimizda" className="hover:text-slate-700 transition-colors duration-300">Hakkımızda</a>
        <a href="#iletisim" className="hover:text-slate-700 transition-colors duration-300">İletişim</a>
      </div>
    </nav>
  )
}