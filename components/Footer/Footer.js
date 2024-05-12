import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAlignCenter,
    faEnvelope,
    faLink,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faInstagram,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer style={{ backgroundColor: "white", color: "black" }}>
            <div className="container">
                <center>
                    <div className="footer-column">
                        <a href="#">
                            <Image
                                src="/logo.png"
                                alt="Your Logo"
                                height={130}
                                width={130}
                            />
                        </a>
                    </div>
                    <br />
                </center>
                <div className="footer-content">
                    <div className="footer-column">
                        <h5>
                            <b>Company</b>
                        </h5>
                        <ul>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#work">Our Work</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>
                            <b>Contact</b>
                        </h5>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{
                                        height: "18px"
                                    }}
                                />
                                info@example.com
                            </li>
                            <li>
                                <a>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{
                                            height: "18px"
                                        }}
                                    />
                                    +1234567890
                                </a>
                            </li>
                            {/* <li>Address: 123 Street, City</li> */}
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h5>
                            <b>Follow Us</b>
                        </h5>
                        <div className="social-links">
                            <a href="https://instagram.com">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    style={{
                                        height: "26px"
                                    }}
                                />
                            </a>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    style={{
                                        height: "26px"
                                    }}
                                />
                            </a>
                            <a href="https://twitter.com">
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    style={{
                                        height: "26px"
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                footer {
                    padding: 20px;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .footer-column {
                    flex: 1;
                    margin-right: 20px;
                }
                .footer-column h4 {
                    margin-bottom: 10px;
                }
                .footer-column ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                .footer-column ul li {
                    margin-bottom: 5px;
                    align-items: center;
                }
                .social-links a {
                    margin-right: 10px;
                }
                .social-links img {
                    width: 30px;
                    height: 30px;
                }
            `}</style>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative ">
                <div className="wrap wrap-px py-6">
                    <center>
                        <p className="my-0">
                            {/* © {year} All rights reserved{" - "} */}© {year}
                            {" - "}
                            All rights reserved
                        </p>
                    </center>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
