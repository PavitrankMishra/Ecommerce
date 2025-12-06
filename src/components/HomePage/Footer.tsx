import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <>
            <section className="mainFooterContainer">
                <section className="footerContainer">
                    <section className="footerLeft">
                        <span className="logoName">AABHARAN</span>
                        <span>Aabharan let's you step into a world of refined luxury. Our jewellery blends minimalist design with premium craftsmanship, creating pieces that shine with subtle beauty. Perfect for daily wear, gifting, or special occasions.</span>
                        <section className="footerIcons">
                            <FontAwesomeIcon icon={faFacebookF} className="socialIcons" />
                            <FontAwesomeIcon icon={faInstagram} className="socialIcons" />
                            <FontAwesomeIcon icon={faYoutube} className="socialIcons" />
                        </section>
                    </section>
                    <section className="footerRight">
                        <section className="footer1">
                            <span>Our Story</span>
                            <span>FAQs | Help</span>
                            <span>Contact Us</span>
                            <span>Privacy Policy</span>
                            <span>Return Policy</span>
                            <span>Terms of Service</span>
                        </section>
                        <section className="footer2"></section>
                        <section className="footer3">
                            <span>About</span>
                            <span>Contact</span>
                            <span>Our Retail outlets</span>
                            <span>Shipping Policy</span>
                            <span>Return Policy</span>
                            <span>Exhange Policy</span>
                        </section>
                    </section>
                </section>
                <section className="lastPart">
                    &copy; 2025. All rights reserved
                </section>
            </section>
        </>
    )
}

export default Footer;
