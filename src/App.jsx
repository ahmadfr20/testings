import styles from './style'

import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import BOTW from "./components/Contents/BOTW";
import Benefit from "./components/Benefit/Benefit"
import Youtube from "./components/Youtube/Youtube";
import Footer from "./components/Footer/Footer"
import FAQ from "./components/FAQ/FAQs"
import ContentThumbnail from './components/Contents/ContentThumbnail';
import CTA from './components/CTA/CTA';
import Phone from './components/Hero/Phone';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';


const App = () => (
  <div className=" w-full overflow-hidden">
    <div >
      <div class=' items-center'>
        <Navbar />
      </div>
    </div>

    <div>
      <div >
        <Hero />
        <br /><br />
        <Phone />
        <br /> <br />
      </div>
    </div>

    <br />

    <div >
      <div class='w-full'>
        <ContentThumbnail />
        <BOTW />
        <Products />
        <Benefit />
        < Testimonials />
        <FAQ/>
        <Youtube />
        <CTA />
        <br />
        <br />
        <Footer />
      </div>
    </div>

  </div>
);

export default App