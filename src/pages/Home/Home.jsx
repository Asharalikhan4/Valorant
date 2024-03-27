import Button from "@/components/Button";
import BG_IMG from "@/assets/images/valorant.png";
import Hero from "./Hero";
import Agents from "./Agents";
import Maps from "./Maps";
const Home = () => {
  return (
    <>
      <div
        className="h-24 w-full text-center  text-white bg-no-repeat bg-contain font-valorant relaitve md:h-[63vh] md:w-[100vw]
      lg:h-[100vh] lg:w-[100vw]"
      >
        <img src={BG_IMG} alt="bg-img" />
        <Button btnName="Welcome to ValPal" />
      </div>
      <Hero />
      <Agents />
      <Maps />
    </>
  );
};

export default Home;
