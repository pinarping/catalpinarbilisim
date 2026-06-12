import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat fontunu çağırıyoruz ve Türkçe desteği için "latin-ext" ekliyoruz
const techFont = Montserrat({ 
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"], 
});

export const metadata = {
  title: "Çatalpınar Bilişim | Yazılım ve Teknoloji Çözümleri",
  description: "Özel yazılım çözümleri, modern web mimarileri ve güvenli altyapılar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={techFont.className}>
        {children}
      </body>
    </html>
  );
}