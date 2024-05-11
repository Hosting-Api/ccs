import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Dairyland Navsari",
        content: "A dairy farm in Navsari",
        align: "right",
        image: "/w1.png",
        href: "https://www.instagram.com/dairyland_navsari?igsh=dm9rNXJ4OHZ3NTZq"
    },
    {
        id: uuid(),
        title: "Aroma Health & Wellness",
        content: "A massage parlor in Parle Point, Surat",
        align: "right",
        image: "/w2.png",
        href: "https://www.instagram.com/aroma_health_wellness?igsh=YWRqaGhxdHppdGNw"
    },
    {
        id: uuid(),
        title: "The Natural Kitchen",
        content: "A restaurant in Surat",
        align: "right",
        image: "/w3.png",
        href: "https://www.instagram.com/the_natural_kitchen_restro?igsh=MTVzaTY0enZhczhzdw=="
    }
];

import React from "react";

const Work = () => {
    return (
        <>
            <SectionContainer className="process-items mt-16 space-y-16">
                {ContentImageData.map((item) => (
                    <div
                        id={item.id}
                        key={item.id}
                        className="process-item--container grid md:grid-cols-2 gap-y-8"
                    >
                        <div
                            className={`process-item--image rounded-3xl ${
                                item.align === "left"
                                    ? ""
                                    : "md:order-2 lg:order-1 xl:order-1"
                            }`}
                        >
                            <Image
                                src={item.image}
                                width={250}
                                height={250}
                                objectFit="cover"
                                alt="Process Banner 1"
                                // className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                            />
                        </div>
                        <div
                            className={`process-item--content ${
                                item.align === "left"
                                    ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                    : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                        >
                            <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                            <ul className="process-item--list space-y-3">
                                {item.listItems?.length &&
                                    item.listItems.map((listItem) => (
                                        <li
                                            id={listItem.id}
                                            key={listItem.id}
                                            className="inline-grid grid-flow-col-dense"
                                        >
                                            <Icon
                                                icon="ph:seal-check-bold"
                                                className="w-6 h-6 text-secondary-500 mr-2"
                                            />
                                            {listItem.content}
                                        </li>
                                    ))}
                                <a
                                    href={item.href}
                                    className="text-black bg-[#ffc56e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-primary-900"
                                >
                                    View
                                </a>
                            </ul>
                        </div>
                    </div>
                ))}
            </SectionContainer>
        </>
    );
};

export default Work;
