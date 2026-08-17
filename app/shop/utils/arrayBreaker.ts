import { Faq, FaqProps } from "../components/faq/faqClient";

export const arrayBreaker = ({ faq }: FaqProps, count: number) => {
  const result: { col1: Faq[]; col2: Faq[]; col3: Faq[] } = {
    col1: [],
    col2: [],
    col3: [],
  };

  for (let x = 0; x < faq.length; x++) {
    const item: Faq = faq[x];
    if (x < count) result.col1.push(item);
    else if (x < count * 2) result.col2.push(item);
    else result.col3.push(item);
  }

  return result;
};
