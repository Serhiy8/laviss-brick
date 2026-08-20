import Image from "next/image";
import Link from "next/link";

export default function HeroTop() {
  return (
    <>
      <h1 className="text-center flex-1 font-black m-auto p-4 basis-[calc(50%-8px)] text-[20px] lg:text-[30px] xl:text-[40px] ">
        Купуй будівельні матеріали{" "}
        <span className="text-accent">швидко та легко</span> з ЛАВІСС-брік.
      </h1>
      <Link
        href="/shop/category/cegla"
        className=" transition-transform duration-300 hover:scale-102 relative flex-1 overflow-hidden rounded-md basis-[calc(50%-8px)]"
      >
        <Image
          src="/image/hero-banner.jpg"
          alt="Hero banner"
          width={488}
          height={244}
          loading="eager"
          className="h-auto w-full rounded-xl"
        />

        <div className="absolute top-0 h-full flex items-center">
          <div className="text-text m-auto">
            <h3 className="text-accent pl-2 font-bold text-[12px] lg:text-sm lg:pl-4 xl:text-xl">
              Великий вибір <br />
              цегли:
            </h3>
            <ul className="pl-2 text-[10px] lg:text-[16px] lg:pl-4">
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
