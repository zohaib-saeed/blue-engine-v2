import Hero from "../components/home/hero";
import Features from "../components/home/featuers";
import Pricing from "../components/home/pricing";
import Proefperiode from "../components/home/proefperiode";
import Resources from "../components/home/resources";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
       <Hero />
       <Features />
       <Pricing/>
       <Proefperiode/>
      <Resources/>
     <Footer/>
    </>
  );
};
export default Home;
