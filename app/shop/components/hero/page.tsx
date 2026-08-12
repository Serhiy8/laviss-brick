import HeroTop from "./hero-top/page";
import HeroBottom from "./heroBottom/page";

export default function Hero(): React.ReactNode {
  return (
    <div className="hidden md:flex gap-x-4 gap-y-6 w-full flex-wrap pt-2 pl-2 h-full lg:pt-10 lg:pl-8 ">
      <HeroTop />
      <HeroBottom />
    </div>
  );
}
