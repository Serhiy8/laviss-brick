import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import MobileMenu from "./mobileMenu/page";
import Image from "next/image";
export default function Header(): React.ReactNode {
  return (
    <header className="">
      <MobileMenu />
      <div className="flex justify-between py-3 border-b-2 border-border">
        <div className="grow lg:grow-0 w-60">
          <Link href="/app/src">
            <Image
              src="/image/logo.png"
              alt="logo"
              width={70}
              height={50}
              className="mx-auto"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-between px-21.25 lg:grow">
          <nav className="hidden lg:block">
            <ul className="flex flex-row gap-12">
              <li>
                <Link href="src" className="link link-active">
                  Головна
                </Link>
              </li>
              <li>
                <Link href="src/products" className="link">
                  Магазин
                </Link>
              </li>
              <li>
                <Link href="src/articles" className="link">
                  Статті
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul className="flex flex-row gap-6">
              <li>
                <a href="tel:+380503750233">
                  <Phone strokeWidth={1.5} size={18} />
                </a>
              </li>
              <li>
                <a href="src/basket">
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
