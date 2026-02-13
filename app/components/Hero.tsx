import Image from "next/image";
import b1 from "../public/heropics/pic1.png"; 
import b2 from "../public/heropics/pic2.png";
import b3 from "../public/heropics/pic3.png";

export default function Hero() {
  return (
    <div
      className=" h-screen bg-cover bg-center w-screen
                 bg-[url('/heropics/pic3.png')] 
                 sm:bg-[url('/heropics/pic2.png')] 
                 lg:bg-[url('/heropics/pic1.png')]"
    >
    </div>
  );
}