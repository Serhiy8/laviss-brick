import Faq from "./shop/components/faq/page";
import Hero from "./shop/components/hero/page";
import SideBar from "./shop/components/sideBar/page";

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <SideBar />
        <Hero />
      </div>
      <Faq />
    </>
  );
}
