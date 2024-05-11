import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

const DATA = [
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "#",
                target: "_self"
            },
            {
                label: "Services",
                href: "/#services",
                target: "_self"
            },
            {
                label: "Contact",
                href: "/#contact",
                target: "_self"
            }
        ]
    },
    {
        title: "Social",
        items: [
            {
                label: "LinkedIn",
                href: "#",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "#",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "#",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "#",
                target: "_blank"
            }
        ]
    },
    {
        title: "Contact",
        items: [
            {
                label: "Phone : +917984175557",
                // label: (
                //     <FontAwesomeIcon
                //         icon={faPhone}
                //         style={{ height: "18px" }}
                //     />
                // ),

                href: "tel:+917984175557",
                target: "_blank"
            },
            {
                label: "Email : creativecloudsolutionsccs@gmail.com",
                // label: (
                //     <FontAwesomeIcon
                //         icon={faEnvelope}
                //         label="Email"
                //         style={{ marginRight: "5px", height: "18px" }}
                //     />
                // ),

                href: "mailto:creativecloudsolutionsccs@gmail.com",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--zlogo grid gap-8 z-10">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        className="h-70 w-80"
                                        height="25"
                                        width="100"
                                    />
                                </Link>
                                {/* <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://github.com/christian-luntok/nutritrack"
                                        className="btn btn--secondary"
                                    >
                                        Get Template
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup> */}
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
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
