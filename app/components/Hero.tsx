import Image from "next/image";
import b1 from "../../public/heropics/pic1.png"; 

export default function Hero() {
  return (
    <div>
      <Image src={b1} alt="A description of the image" />
    
    </div>
  );
}