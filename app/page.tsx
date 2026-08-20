import Faq from "./shop/components/faq/page";
import Hero from "./shop/components/hero/page";
import OrderCall from "./shop/components/orderCall/orderCall";
import SideBar from "./shop/components/sideBar/page";

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <SideBar />
        <Hero />
      </div>
      <Faq />
      <OrderCall />
    </>
  );
}
