import Image from "next/image";
import Link from "next/link";

export default function HeroBottom() {
  return (
    <>
      <Link href="" className="basis-[calc(66.6%-8px)] relative">
        <Image
          src="/image/hero-banner-2.jpg"
          alt="банер для газоблоків"
          width={800}
          height={250}
        />
        <div className="absolute top-0 h-full flex items-center">
          <div className="text-text max-w-75 m-auto p-4">
            <h3 className="text-accent text-xl p-4 font-bold">
              Газоблоки провідних виробників України.
            </h3>
            <ul className="p-4">
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Poriston</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>UDK</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Stonelight</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>ЖКСІ</p>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <form action="submit" className=" bg-background-secondary">
        <label htmlFor="phone">Номер телефону</label>
        <input type="tel" name="phone" id="phone" />
      </form>
    </>
  );
}
