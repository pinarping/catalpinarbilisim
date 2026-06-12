"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="proje-baslat" className="scroll-mt-[100px] py-24 px-6 bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projenizi Başlatalım</h2>
          <p className="text-neutral-500">İhtiyaçlarınızı bize kısaca anlatın, en kısa sürede detayları konuşmak için sizinle iletişime geçelim.</p>
        </div>

        {submitted ? (
          // Yeşil yerine sitenin slate/çelik mavisi tonlarına uyumlu hale getirilen pürüzsüz başarı kutusu
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center shadow-sm space-y-3">
            <div className="text-4xl">✔</div>
            <h3 className="text-xl font-bold text-slate-900">Mesajınız Başarıyla Alındı!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Çatalpınar Bilişim'e gösterdiğiniz ilgi için teşekkür ederiz. Formda belirttiğiniz detaylar incelenerek en kısa sürede sizinle iletişime geçilecektir.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-4 text-xs font-semibold text-slate-700 underline hover:text-slate-950"
            >
              Yeni bir form gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-50 p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Adınız Soyadınız</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white text-neutral-900" placeholder="Örn: Ahmet Yılmaz" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">E-posta Adresiniz</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white text-neutral-900" placeholder="ornek@sirket.com" required />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Telefon Numaranız</label>
              <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white text-neutral-900" placeholder="05XX XXX XX XX" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Nasıl Bir Çözüme İhtiyacınız Var?</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent bg-white text-neutral-900 resize-none" placeholder="Projenizin detaylarından veya aklınızdaki fikirden bahsedin..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-800 text-white font-semibold py-4 rounded-lg hover:bg-slate-900 transition-colors shadow-md">
              Talebi Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  )
}