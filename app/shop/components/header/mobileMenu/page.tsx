"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="absolute top-3.25 left-6 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {isOpen && (
        <nav className="absolute top-0 w-screen h-screen rounded-xl border border-border bg-white shadow-lg">
          <Link href="/" className="block py-3">
            Головна
          </Link>

          <Link href="/products" className="block py-3">
            Каталог
          </Link>

          <Link href="/articles" className="block py-3">
            Статті
          </Link>
        </nav>
      )}
    </div>
  );
}
