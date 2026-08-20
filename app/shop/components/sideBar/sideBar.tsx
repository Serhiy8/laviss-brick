"use client";

import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CategoryEl {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: boolean | null | string;
  image: string;
  isActive: boolean;
  sortOrder: number;
  children: CategoryEl[];
}

interface SideBarClientProps {
  categories: CategoryEl[];
}

export default function SideBarClient({ categories }: SideBarClientProps) {
  const [isOpen, setIsOpen] = useState(true);

  const mainCategories = categories.filter((cat) => cat.parentId === null);

  return (
    <div className="shrink-0 w-full md:w-40 lg:w-60 md:border-r-2 md:border-border">
      <button
        type="button"
        className="flex gap-2 py-4 md:border-b-2 md:border-border w-full justify-center font-black text-accent"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Categories
        <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-2 px-4 mt-4 lg:gap-4">
          {mainCategories.map((cat) => {
            return (
              <li key={cat.id}>
                <Link
                  href={`/shop/category/${cat.slug}`}
                  className="link before:content-['['] after:content-[']'] md:before:content-none md:after:content-none"
                >
                  {cat.name}
                </Link>
                <ul className="hidden lg:block">
                  {cat.children.map((child) => {
                    return (
                      <li key={child.id}>
                        <Link
                          href={`/shop/category/${cat.slug}/${child.slug}`}
                          className="flex gap-2 items-center link"
                        >
                          <ChevronRight size={12} />
                          {child.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
