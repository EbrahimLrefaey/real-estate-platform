import AllCompo from "./components/AllCompo";
import Footer from "./components/Footer";
import Banner from "./Home/Banner";
import BestDeal from "./Home/BestDeal";
import ContactHome from "./Home/ContactHome";
import ContactHomeContent from "./Home/ContactHomeContent";
import Facts from "./Home/Facts";
import Featured from "./Home/Featured";
import PropertiesHome from "./Home/PropertiesHome";
import VideoContent from "./Home/VideoContent";
import VideoSection from "./Home/VideoSection";
import { CartProvider } from "react-use-cart";



function App() {
  return (
    <CartProvider>
      <AllCompo />
      <Banner />
      <Featured />
      <VideoSection />
      <VideoContent />
      <Facts />
      <BestDeal />
      <PropertiesHome />
      <ContactHome />
      <ContactHomeContent />
      <Footer />
    </CartProvider>
  );
}

export default App;
