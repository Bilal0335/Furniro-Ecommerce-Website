import Image from "next/image";
import HeroImage from "../../public/image/banner.jpg";

export default function Hero() {
  return (
    <>
      <div>
        <Image
          src={HeroImage}
          width={1440}
          height={316}
          alt="Picture of the author"
          className="w-full h-auto mt-20"
        />
      </div>
    </>
  );
}
