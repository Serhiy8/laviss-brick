import HeroTop from "./hero-top/page";
import HeroBottom from "./heroBottom/page";

export default function Hero(): React.ReactNode {
  return (
    <div className="flex gap-4 w-full pt-10 flex-wrap">
      <HeroTop />
      <HeroBottom />
    </div>
  );
}
