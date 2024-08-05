import Features2x2 from "../ui-components/Features2x2";
import HeroLayout1 from "../ui-components/HeroLayout1";
import About from "../ui-components/About";

function HomePage() {
    return (
      <>
        <HeroLayout1 width={"100%"} marginBottom="20px"/>
        <About />
        <Features2x2 />
      </>
    );
}

export default HomePage