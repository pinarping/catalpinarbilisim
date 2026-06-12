import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm"; // Yeni form bileşenimizi çağırdık
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Services />
        <Projects />
        <About />
        <ContactForm /> {/* Formu buraya ekledik */}
      </main>
      <Footer />
    </div>
  )
}