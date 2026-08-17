"use client";
import { Plus, X } from "lucide-react";
import { FaqProps } from "./faqClient";
import { useState } from "react";

export default function FaqCol({ faq }: FaqProps) {
  const [openId, setOpenId] = useState(0);
  return (
    <>
      {faq.map((el) => (
        <li
          key={el.id}
          className={`min-h-25 border border-border p-6 flex flex-col justify-center rounded-2xl ${openId === el.id ? "bg-gray-100" : ""}`}
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
            <p className={`w-full p-6 top-full left-0 bg-gray-100 z-1`}>
              {el.answer}
            </p>
          )}
        </li>
      ))}
    </>
  );
}
