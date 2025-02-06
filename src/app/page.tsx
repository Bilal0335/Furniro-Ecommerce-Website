import BeautifulRoom from "@/components/BeautifulRoom";
import FurniturePart from "@/components/FurniturePart";
import Hero from "@/components/Hero";
import HeroRange from "@/components/HeroRange";
import ProductSection from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroRange />
      <ProductSection />
      <BeautifulRoom />
      <FurniturePart />
    </div>
  );
}
