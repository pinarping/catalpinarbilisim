"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Iletisim() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    // İleride buraya e-posta gönderme API kodu eklenecek.
    // Şimdilik sadece başarı mesajını gösteriyoruz.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-32 px-6 max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-12 rounded-2xl border border-[#D6E4FF] shadow-lg text-center w-full">
          <div className="w-24 h-24 bg-[#F0F5FF] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-[#2A66F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293B]">Mesajınız başarıyla alındı.</h2>
          <p className="text-neutral-600 mb-10 text-lg">En kısa sürede sizinle iletişime geçeceğiz.</p>
          <Link href="/" className="inline-block px-10 py-4 bg-[#2A66F5] text-white font-bold rounded-xl hover:bg-[#1E54D4] transition-all shadow-lg shadow-[#2A66F5]/20">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-32 px-6 max-w-3xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#1E293B]">Bizimle İletişime Geçin</h1>
        <p className="text-neutral-600">Projeleriniz ve sorularınız için aşağıdaki formu doldurabilirsiniz.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-neutral-700">Adınız Soyadınız</label>
          <input type="text" required className="w-full border border-neutral-300 rounded-xl p-4 focus:outline-none focus:border-[#2A66F5] focus:ring-1 focus:ring-[#2A66F5] transition-all" placeholder="Adınız" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-neutral-700">E-posta Adresiniz</label>
          <input type="email" required className="w-full border border-neutral-300 rounded-xl p-4 focus:outline-none focus:border-[#2A66F5] focus:ring-1 focus:ring-[#2A66F5] transition-all" placeholder="ornek@sirket.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-neutral-700">Telefon Numarası</label>
          <input type="tel" className="w-full border border-neutral-300 rounded-xl p-4 focus:outline-none focus:border-[#2A66F5] focus:ring-1 focus:ring-[#2A66F5] transition-all" placeholder="0555 555 55 55" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-neutral-700">Mesajınız</label>
          <textarea rows="5" required className="w-full border border-neutral-300 rounded-xl p-4 focus:outline-none focus:border-[#2A66F5] focus:ring-1 focus:ring-[#2A66F5] transition-all" placeholder="Projenizden veya sorunuzdan bahsedin..."></textarea>
        </div>
        <button type="submit" className="w-full py-4 mt-2 bg-[#2A66F5] text-white font-bold rounded-xl hover:bg-[#1E54D4] transition-all shadow-lg shadow-[#2A66F5]/20">
          Mesajı Gönder
        </button>
      </form>
    </div>
  );
}