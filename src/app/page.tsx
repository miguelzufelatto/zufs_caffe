import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import History from "@/components/History";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <History />
      <Subscription />
      <Footer />
    </main>
  );
}
