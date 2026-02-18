import Image from "next/image";
import b1 from "../../public/heropics/pic.png"; 

export default function Hero() {
  return (
    <div className="relative w-full h-[1000px] overflow-hidden ">
      <Image src={b1}   alt="A description of the image" fill    className="object-cover" priority/>
    </div>
  );
}