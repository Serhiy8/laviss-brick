"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqProps {
  faq: Faq[];
}

export default function FaqClient({ faq }: FaqProps) {
  const [openId, setOpenId] = useState(0);

  return (
    <div className="py-5">
      <ul className="grid sm:grid-cols-2 px-4 md:px-0 md:grid-cols-3 gap-5">
        {faq.map((el) => (
          <li
            key={el.id}
            className={`relative border border-border p-6 flex flex-col justify-center ${openId === el.id ? "bg-background-img  rounded-tl-xl rounded-tr-xl" : "rounded-xl"}`}
          >
            <button
              type="button"
              className="flex w-full justify-between text-start items-center gap-2"
              onClick={() => {
                setOpenId(openId === el.id ? 0 : el.id);
              }}
            >
              {el.question}
              {openId === el.id ? (
                <X size={20} className="shrink-0" />
              ) : (
                <Plus size={20} className="shrink-0" />
              )}
            </button>
            {openId === el.id && (
              <p
                className={`absolute w-full p-6 top-full left-0 border border-border z-1 ${openId === el.id ? "bg-background-img rounded-bl-xl rounded-br-xl" : ""}`}
              >
                {el.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
