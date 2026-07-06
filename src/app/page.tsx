import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/herosection/hero";
import Catalogue from "./catalogue";
import Location from "../components/location/location"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalogue />
      <Location/>
    </main>
  );
}