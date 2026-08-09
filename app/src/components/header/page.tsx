import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import MobileMenu from "./mobileMenu/page";
export default function Header(): React.ReactNode {
  return (
    <header className="border-b-2 border-border">
      <MobileMenu />
      <Container>
        <div className="flex justify-between py-3">
          <div className="px-12 grow lg:grow-0">
            <Link href="/app/src">Логотип</Link>
          </div>
          <div className="flex flex-row justify-between px-12 lg:grow">
            <nav className="hidden lg:block">
              <ul className="flex flex-row gap-12">
                <li>
                  <Link href="src" className="header-link header-link-active">
                    Головна
                  </Link>
                </li>
                <li>
                  <Link href="src/products" className="header-link">
                    Магазин
                  </Link>
                </li>
                <li>
                  <Link href="src/articles" className="header-link">
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
      </Container>
    </header>
  );
}
