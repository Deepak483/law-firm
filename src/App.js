import Carousel from "./Component/Carousel/Carousel";
import FAQ from "./Component/FAQ/FAQ";
import Hero from "./Component/Hero/Hero";
import Introduction from "./Component/Introduction/Introduction";
import Navbar from "./Component/Navbar/Navbar";
import Subscribe from "./Component/Subscribe/Subscribe";
import Teams from "./Component/Teams/Teams";
import Verticals from "./Component/Verticals/Verticals";
import WhyUs from "./Component/WhyUs/WhyUs";
import styles from "./index.css";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <div style={{ margin: "3rem 3rem" }}>
        <Navbar />
        <Hero />
      </div>
      <main>
        <Introduction />
        <WhyUs />
        <Verticals />
        <Carousel />
        <Teams />
        <FAQ />
        <Subscribe/>
      </main>
        <Footer />
    </>
  );
}

export default App;
