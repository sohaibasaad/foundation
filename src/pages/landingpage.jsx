import React from "react";
import AboutSection from "../components/UI/AboutSection";
import Footer from "../components/Footer/footer";
import DonateNowSrction from "../components/UI/DonateNowSection";
import Header from "../components/Header/header";
import MainBanner from "../components/MainBanner/mainbanner";
import DonateNow from "../components/DonateNow/donateNow";
import ChooseUs from "../components/ChooseUs/chooseUs";

const landingpage = () => {
  return (
    <div>
      <Header/>
      <MainBanner />
      <DonateNow />
      {/* =========== about section ================ */}
      <AboutSection />
      <ChooseUs />
      {/* =========== about section ================ */}
      <DonateNowSrction />
      {/* =========== footer section ================ */}
      <Footer />
    </div>
  );
};
export default landingpage;
