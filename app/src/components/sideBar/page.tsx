"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SideBar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
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
        <ul>
          <li>
            <Link href="faceBrick" className="link">
              Облицювальна цегла
            </Link>
          </li>
          <li>
            <Link href="clinkerBrick" className="link">
              Клінкерна цегла
            </Link>
          </li>
          <li>
            <Link href="blocks" className="link">
              Будівельні блоки
            </Link>
          </li>
          <li>
            <Link href="ogorozhi" className="link">
              Огорожі
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
