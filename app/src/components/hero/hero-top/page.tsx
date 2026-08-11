import Image from "next/image";
import Link from "next/link";

export default function HeroTop() {
  return (
    <>
      <h1 className="text-center flex-1 font-black text-[36px] m-auto p-4 basis-[calc(50%-8px)]">
        Купуй будівельні матеріали{" "}
        <span className="text-accent">швидко та легко</span> з ЛАВІСС-брік.
      </h1>
      <Link
        href="/"
        className="group relative flex-1 overflow-hidden rounded-xl basis-[calc(50%-8px)]"
      >
        <Image
          src="/image/hero-banner.jpg"
          alt="Hero banner"
          width={488}
          height={244}
          loading="eager"
          className="h-auto w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-0 h-full flex items-center">
          <div className="text-text w-43 m-auto">
            <h3 className="text-accent text-xl p-4 font-bold">
              Великий вибір цегли:
            </h3>
            <ul className="p-4">
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Клінкер</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Облицювальна</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Вогнетривка</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-accent rounded-[50%]" />
                <p>Бетонна</p>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
