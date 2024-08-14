import Image from "next/image";
import Marquee from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="text-[#7AFFC7]">
      <Marquee />
      <Navbar />
      <ThreeItemGrid />
      <Footer />
    </div>
  );
}
