import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

const Book = () => {
    return (
        <>
            <ButtonGroup>
                <a
                    role="button"
                    href="https://wa.me/+917984175557?text=I%20am%20interested%20in%20meeting"
                    className="btn btn--secondary ml-4"
                >
                    Book a Meeting
                    <Icon icon="material-symbols:arrow-forward-rounded" />
                </a>
            </ButtonGroup>
        </>
    );
};

export default Book;
