import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" max-w-7xl m-auto px-4 md:px-2 ">
      <div className="flex flex-col-reverse gap-4 items-center justify-between py-8 text-center md:flex-row">
        <Image src="/image/logo.png" alt="" width={140} height={42} />
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[16px] lg:text-xl text-accent">
            Наша адреса:
          </p>
          <div>
            <Link
              className="flex gap-2 link link-hover"
              href="https://maps.app.goo.gl/o6EkpfmVtZuy6Ca57"
              rel="noopener noreferrer"
              target="blank"
            >
              <MapPin strokeWidth={1.5} />
              <p>Офіс: м.Рівне, вул. Промислова 1.</p>
            </Link>
          </div>
          <div>
            <Link
              className="flex gap-2 link link-hover"
              href="https://maps.app.goo.gl/gZDYYYURn39436L16"
              rel="noopener noreferrer"
              target="blank"
            >
              <MapPin strokeWidth={1.5} />
              <p>Склад: м. Рівне, вул. Млинівська 25.</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[16px] lg:text-xl text-accent">
            Наші контакти:
          </p>
          <div>
            <Link
              className="flex gap-2 link link-hover"
              href="tel:+380503750233"
            >
              <Phone strokeWidth={1.5} />
              <p>+38 (050) 375 02 33</p>
            </Link>
          </div>
          <div>
            <Link
              className="flex gap-2 link link-hover"
              href="tel:+380973750233"
            >
              <Phone strokeWidth={1.5} />
              <p>+38 (097) 375 02 33</p>
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex flex-col justify-between items-center gap-4 md:flex-row border-t border-border py-8">
        <li>
          <p>Copyright © 2026 Laviss-brick</p>
        </li>
        <li>
          <Link href="/" className="link link-hover">
            Публічний договір (оферта)
          </Link>
        </li>
        <li>
          <p>Powered by Laviss-brick</p>
        </li>
      </ul>
    </div>
  );
}
