import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Book from "@components/Book";
import { SectionContainer } from "@components/Section";

const navigation = [
    { name: "Services", to: "#services", href: "/#services" },
    { name: "Our Work", to: "#work", href: "/#work" },
    // { name: "Plans", to: "#plans", href: "/#plans" },
<<<<<<< HEAD
    { name: "Our Clients", to: "#clients", href: "/#clients" },
=======
    { name: "Testimonials", to: "#testimonials", href: "/#testimonials" },
>>>>>>> 03eee1d9b93abb136873fe600cc173ae5ce31349
    { name: "Contact", to: "#contact", href: "/#contact" }

    // {
    //     name: "Contact",
    //     href: "/#contact",
    //     isArrow: true,
    //     target: "_blank"
    // }
];

export const Nav = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => {
        setIsNavOpen(false);
    };
    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>

                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="header-nav--menu-item"
                            >
                                <a
                                    key={item.name}
                                    to={item.to}
                                    href={item.href}
                                    className={`menu-item--link flex items-center
                    ${router.pathname === item.href ? "active" : ""}
                  `}
                                    onClick={closeNav}
                                    target={item.target ? item.target : "_self"}
                                >
                                    {item.name}
                                    {item.isArrow && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <Icon
                                                icon="material-symbols:arrow-outward"
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                        <Book />
                    </ul>
                </div>
            </div>
        </nav>
    );
};
