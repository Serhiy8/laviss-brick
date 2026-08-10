"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SideBar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-r-2 px-8 border-border shrink-0 w-60">
      <button
        type="button"
        className="flex gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Categories
        <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link href="faceBrick" className="">
              Облицювальна цегла
            </Link>
          </li>
          <li>
            <Link href="clinkerBrick">Клінкерна цегла</Link>
          </li>
          <li>
            <Link href="blocks">Будівельні блоки</Link>
          </li>
          <li>
            <Link href="ogorozhi">Огорожі</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
