import { arrayBreaker } from "../../utils/arrayBreaker";
import FaqCol from "./faqCol";

export type Faq = {
  id: number;
  question: string;
  answer: string;
};

export type FaqProps = {
  faq: Faq[];
};

export default function FaqClient({ faq }: FaqProps) {
  const faqCol = arrayBreaker({ faq: faq }, 4);
  return (
    <div className="py-5 grid grid-cols-3 gap-3 items-start">
      <ul className="grid grid-cols-1 px-4 md:px-0 gap-5">
        <FaqCol faq={faqCol.col1} />
      </ul>
      <ul className="grid grid-cols-1 px-4 md:px-0 gap-5">
        <FaqCol faq={faqCol.col2} />
      </ul>
      <ul className="grid grid-cols-1 px-4 md:px-0 gap-5">
        <FaqCol faq={faqCol.col3} />
      </ul>
    </div>
  );
}
