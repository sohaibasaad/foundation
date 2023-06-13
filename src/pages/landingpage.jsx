import React from "react";
import AboutSection from "../components/UI/AboutSection";
import Footer from "../components/Footer/footer"
import DonateNowSrction from "../components/UI/DonateNowSection"

const landingpage = () => {
  return (
    <div>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* =========== about section ================ */}
      <DonateNowSrction />
      {/* =========== footer section ================ */}
      <Footer />
    </div>
  );
};
export default landingpage;
