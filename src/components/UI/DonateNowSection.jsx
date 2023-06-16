import React from "react";
import "../../styles/DonateNowSection.css"
import DonateNowbackimg from "../../assets/images/Image Carasoule.png"
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/poppins";
import { ArrowRight } from 'react-bootstrap-icons';

const DonateNowSection = () => {

    return (
        <div className="DonateNowSection">
            <div className="top_content">
                <h3 className="section_heading">Make this world a better place for people who can’t do that themselves</h3>
                <p className="section_subcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue.</p>
            </div>
            <div className="donateNowBtn">
                <img id="donatenowbackImg" src={DonateNowbackimg} alt="" className="w-100"></img>
                <div className="donatebtn">
                    <h6 className="btn_heading">Donate Now</h6>
                    <div className="arrow_icon"><ArrowRight size={96}  className="align-top"/></div>
                </div>
            </div>

        </div>

    );
};
<<<<<<< HEAD
export default DonateNowSection;
=======
export default DonateNowSection;
>>>>>>> Arshiaswork
