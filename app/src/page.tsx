import SideBar from "./components/sideBar/page";
import Header from "./components/header/page";
import { Container } from "./components/ui/Container";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <>
      <Container>
      <Header />
        <div className="flex">
          <SideBar />
          <Hero />
        </div>
      </Container>
    </>
  );
}
