import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroBottom() {
  return (
    <>
      <Link
        href=""
        className="basis-[calc(66.6%-8px)] relative pl-13 transition-transform duration-300 hover:scale-102"
      >
        <Image
          src="/image/hero-banner-3.jpg"
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
      <div className="flex flex-col gap-6 justify-around bg-background-img basis-[calc(33.3%-8px)] rounded-[22px] p-4">
        <form action="submit" className="flex flex-col text-center gap-y-3">
          <label htmlFor="phone" className="text-accent text-xl font-bold">
            Номер телефону
          </label>
          <div className="flex gap-2 mx-auto">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="bg-background outline-0 text-[18px] px-2 py-1 rounded-sm"
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-accent rounded-sm w-8 h-8"
            >
              <ChevronRight size={24} color="#e5e7eb" />
            </button>
          </div>
          <p>Категорія</p>
          <select className="bg-background rounded-sm">
            <option value="cegla">Цегла</option>
            <option value="blocks">Блоки</option>
            <option value="ogorizhi">Огорожі</option>
          </select>
        </form>
        <p className="text-center">
          Залиште свій номер телефону, і наш менеджер зв&quot;яжеться з вами
          найближчим часом.
        </p>
      </div>
    </>
  );
}
