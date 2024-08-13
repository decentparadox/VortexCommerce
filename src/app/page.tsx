import Image from "next/image";
import Marquee from "@/components/Banner";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Marquee />
      <Navbar />
    </div>
  );
}
