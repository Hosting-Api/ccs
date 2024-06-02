import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/logo.png";
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
            <div className="container md:flex">
                <center>
                    <div className="footer-column ">
                        <a href="#">
                            <Image
                                src={logo}
                                alt="Your Logo"
                                height={130}
                                width={130}
                            />
                        </a>
                    </div>
                    <br />
                </center>
                <div className="footer-content">
                    <div className="footer-column w-auto">
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
                    <div className="footer-column w-auto">
                        <h5>
                            <b>Contact</b>
                        </h5>
                        <ul>
                            <li>
                                <label htmlFor="Email">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{
                                            height: "22px"
                                        }}
                                    />
                                </label>

                                <span name="Email">
                                    creativecloudsolutionsccs@gmail.com
                                </span>
                            </li>
                            <li>
                                {/* <a> */}
                                <label htmlFor="Phone">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{
                                            height: "22px"
                                        }}
                                    />
                                </label>
                                <span name="Phone">
                                    +917984175557 &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                </span>
                                {/* </a> */}
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column w-auto">
                        <h5>
                            <b>Follow Us</b>
                        </h5>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/creative_cloud_solutions">
                                    <label htmlFor="Insta">
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            style={{
                                                height: "22px"
                                            }}
                                        />
                                    </label>

                                    <span name="Insta">
                                        creative_cloud_solutions
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/people/Creative-Cloud-Solution/61558159500154/">
                                    <label htmlFor="FB">
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            style={{
                                                height: "22px"
                                            }}
                                        />
                                    </label>
                                    <span name="FB">
                                        Creative Cloud Solutions &nbsp;
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/creative-cloud-solutions-264531300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                    <label htmlFor="LD">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            style={{
                                                height: "22px"
                                            }}
                                        />
                                    </label>
                                    <span name="LD">
                                        Creative Cloud Solutions &nbsp;
                                    </span>
                                </a>
                            </li>
                        </ul>
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
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                }
                .footer-column {
                    margin-bottom: 15px;
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
                }

                label {
                    float: left;
                }
                span {
                    display: block;
                    overflow: hidden;
                    padding: 0px 4px 0px 6px;
                }
                @media (min-width: 768px) {
                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        text-align: left;
                    }
                    .footer-column {
                        flex: 1;
                        margin-right: 65px;
                        margin-bottom: 0;
                        // width: auto;
                    }
                }
            `}</style>
            <SectionContainer className="footer-credits relative">
                <div className="wrap wrap-px py-6">
                    <center>
                        <p className="my-0">© {year} All rights reserved</p>
                    </center>
                </div>
            </SectionContainer>
        </footer>
    );
};
