import "../../styles/footerDashboard.css";
import WhatsappImg from "../../assets/images/whatsapp-white.png"
import FacebookImg from "../../assets/images/facebook-white.png"
import DashboardfootImg from "../../assets/images/dashbboard-footer-bg.png"
function footerDashboard() {
    return (
        <footer className="footerDashboard-main-wrap">
            <img className="footer-bg-img" src={DashboardfootImg} />
            <div className="container">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between footerDashboard-cnt">
                    <p>Have a question? Want to know more? Check out our <a href="#">FAQs</a> page or chat with us.</p>
                    <ul className="text-end p-0">
                        <li><a href="#" className="whatsapp-foot mb-3 mb-xl-0"><img src={WhatsappImg} /> Contact Us</a></li>
                        <li><a href="#" className="facebook-foot"><img src={FacebookImg} /> Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default footerDashboard