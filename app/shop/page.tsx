import Faq from "./components/faq/page";
import Hero from "./components/hero/page";
import SideBar from "./components/sideBar/page";

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
