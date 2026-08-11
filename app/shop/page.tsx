import Hero from "./components/hero/page";
import SideBar from "./components/sideBar/sideBar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Hero />
      </div>
    </>
  );
}
