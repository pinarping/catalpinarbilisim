import { Search, MessageSquare, Zap } from 'lucide-react';

export default function HowWeWork() {
  return (
    <section id="nasil-calisiyoruz" className="py-24 px-6 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
              Nasıl Çalışıyoruz?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-[#F0F5FF] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#D6E4FF] group-hover:border-[#A6C4FF] transition-colors">
              <Search className="w-8 h-8 text-[#2A66F5]" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                Derinlemesine Analiz
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed text-sm">İş hedeflerinizi anlamak için teknik altyapınızı hassasiyetle inceliyoruz.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-[#F0F5FF] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#D6E4FF] group-hover:border-[#A6C4FF] transition-colors">
              <MessageSquare className="w-8 h-8 text-[#2A66F5]" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                Net ve Şeffaf İletişim
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed text-sm">Geliştirme sürecinin her aşamasında sizi düzenli raporlarla bilgilendiriyoruz.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-[#F0F5FF] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#D6E4FF] group-hover:border-[#A6C4FF] transition-colors">
              <Zap className="w-8 h-8 text-[#2A66F5]" />
            </div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A66F5] to-[#1E293B]">
                Yalınlık ve Performans
              </span>
            </h3>
            <p className="text-neutral-600 leading-relaxed text-sm">Gereksiz karmaşadan uzak, yüksek hızlı ve verimli kod mimarileri üretiyoruz.</p>
          </div>

        </div>
      </div>
    </section>
  );
}