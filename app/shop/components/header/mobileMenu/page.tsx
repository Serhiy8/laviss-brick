"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="absolute top-2.5 left-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {isOpen && (
        <nav className="absolute top-0 w-screen h-screen z-1 border-border bg-white shadow-lg">
          <Link href="/shop" className="block py-3">
            Головна
          </Link>

          <Link href="/shop/products" className="block py-3">
            Каталог
          </Link>

          <Link href="/shop/articles" className="block py-3">
            Статті
          </Link>
        </nav>
      )}
    </div>
  );
}
