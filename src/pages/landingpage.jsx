import React from "react";
import AboutSection from "../components/UI/AboutSection";
import Footer from "../components/Footer/footer";
import OurGoals from "../components/OurGoals";


const landingpage = () => {
  return (
    <div>
    <OurGoals />
    {/* =========== about section ================ */}
       <AboutSection />
    {/* =========== footer section ================ */}
       <Footer />
    </div>
    
  );
};
export default landingpage;
