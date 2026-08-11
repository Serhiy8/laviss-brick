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
  const [isOpen, setIsOpen] = useState(false);

  const mainCategories = categories.filter((cat) => cat.parentId === null);

  return (
    <div className="border-r-2 border-border shrink-0 w-60">
      <button
        type="button"
        className="flex gap-2 py-4 border-b-2 border-border w-full justify-center font-black"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Categories
        <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-4">
          {mainCategories.map((cat) => {
            return (
              <li key={cat.id}>
                <Link href={`/shop/category/${cat.slug}`} className="link">
                  {cat.name}
                </Link>
                <ul className="">
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
