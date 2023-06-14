import React from "react";
import AboutSection from "../components/UI/AboutSection";
import Footer from "../components/Footer/footer";
import OurGoals from "../components/OurGoals";
import DonateNowSection from "../components/UI/DonateNowSection";


const landingpage = () => {
  return (
    <div>
      <OurGoals />
      {/* =========== about section ================ */}
      <AboutSection />
      {/* =========== Donate Now section ================ */}
      <DonateNowSection/>
      {/* =========== footer section ================ */}
      <Footer />
    </div>

  );
};
export default landingpage;
