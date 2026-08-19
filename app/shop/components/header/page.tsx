import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobileMenu/page";
import Image from "next/image";
export default function Header(): React.ReactNode {
  return (
    <header className="">
      <MobileMenu />
      <div className="flex flex-1 justify-between py-3 border-b-2 border-border">
        <div className="w-40 lg:grow-0 lg:w-60">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="logo"
              width={70}
              height={40}
              className="mx-auto"
            />
          </Link>
        </div>
        <div className="flex flex-row md:grow md:justify-between">
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-12">
              <li>
                <Link href="/" className="link link-active">
                  Головна
                </Link>
              </li>
              <li>
                <Link href="/shop/products" className="link">
                  Магазин
                </Link>
              </li>
              <li>
                <Link href="/shop/articles" className="link">
                  Статті
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex-2 pr-2">
            <ul className="flex flex-row gap-6  justify-end">
              <li>
                <a href="tel:+380503750233">
                  <Phone strokeWidth={1.5} size={18} />
                </a>
              </li>
              <li>
                <a href="/shop/basket">
                  <ShoppingCart strokeWidth={1.5} size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
