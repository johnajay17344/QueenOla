import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/herosection/hero";
import Catalogue from "./catalogue";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalogue />
    </main>
  );
}