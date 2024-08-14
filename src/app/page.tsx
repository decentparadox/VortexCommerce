import Image from "next/image";
import Marquee from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Footer from "@/components/Footer";
import { Carousel } from "@/components/carousel";
export default function Home() {
  return (
    <div className="text-[#7AFFC7] flex flex-col gap-12">
      <div>
      <Marquee />
      <Navbar />
      </div>
      <div>
      <ThreeItemGrid />
      <Carousel />
      </div>
      <Footer />
    </div>
  );
}
