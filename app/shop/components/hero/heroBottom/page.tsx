import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBottom() {
  return (
    <>
      <Link
        href="/shop/category/budivelni-bloku"
        className="flex-2 relative transition-transform duration-300 hover:scale-102"
      >
        <Image
          src="/image/hero-banner-3.jpg"
          alt="банер для газоблоків"
          loading="eager"
          width={800}
          height={250}
        />
        <div className="absolute top-0 flex flex-col justify-center h-full text-text max-w-75">
          <h3 className="text-accent pl-2 font-bold text-[12px] lg:text-sm lg:pl-4 xl:text-xl">
            Газоблоки провідних
            <br /> виробників України.
          </h3>
          <ul className="pl-2 text-[10px] lg:text-[16px] lg:pl-4">
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
      </Link>
      <div className="flex flex-col justify-around bg-background-img flex-1 rounded-xl lg:rounded-[22px] p-4 lg:gap-2 lx:gap-6 ">
        <form
          action="submit"
          className="flex flex-col text-center gap-1 lg:gap-2 lx:gap-3"
        >
          <label
            htmlFor="phone"
            className="text-accent  font-bold text-[12px] lg:text-xl"
          >
            Замовити консультацію.
          </label>
          <div className="flex gap-2 mx-auto text-[12px] lg:text-[16px]">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="bg-background outline-0 text-[10px] lg:px-2 lg:py-1 rounded-sm lg:text-[16px]"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-accent rounded-sm w-6 h-6 lg:w-8 lg:h-8"
            >
              <ChevronRight className="h-4 w-4 lg:w-6 lg:h-6" color="#e5e7eb" />
            </button>
          </div>
          <p className=" text-[12px] lg:text-[16px]">Категорія</p>
          <select
            name="oder call"
            className="bg-background rounded-sm text-[12px] lg:text-[16px]"
          >
            <option value="cegla" className=" text-[12px] lg:text-[16px]">
              Цегла
            </option>
            <option value="blocks" className=" text-[12px] lg:text-[16px]">
              Блоки
            </option>
            <option value="ogorizhi" className=" text-[12px] lg:text-[16px]">
              Огорожі
            </option>
          </select>
        </form>
      </div>
    </>
  );
}
