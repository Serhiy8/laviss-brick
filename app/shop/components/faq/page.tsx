import fetchFAQ from "../../_operations/FAQ/fetchFaq";
import FaqClient from "./faqClient";

export default async function Faq() {
  const data = await fetchFAQ();
  return <FaqClient faq={data} />;
}
