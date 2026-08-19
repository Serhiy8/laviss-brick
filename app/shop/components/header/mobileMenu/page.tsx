"use client";

import { Menu, X } from "lucide-react";
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
        <nav className="top-0 w-screen h-screen z-1 border-border bg-white shadow-lg flex justify-evenly items-center flex-col fixed">
          <div className="felx justify-center text-center">
            <Link
              href="/"
              className="block py-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              Головна
            </Link>

            <Link
              href="/shop/products"
              className="block py-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              Каталог
            </Link>

            <Link
              href="/shop/articles"
              className="block py-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              Статті
            </Link>
          </div>

          <button
            type="button"
            className="border border-primary hover:border-primary-hover rounded-full p-3 shadow-[0_4px_14px_0_rgba(255,177,0,0.4)] hover:shadow-[0_6px_20px_0_rgba(255,189,46,0.6)] transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X size={26} className="text-primary hover:border-primary-hover" />
          </button>
        </nav>
      )}
    </div>
  );
}
