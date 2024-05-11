import React from "react";
import {
    Card,
    CardBody,
    CardGroup,
    CardHeader,
    CardImage
} from "@components/Card";

const Services = () => {
    return (
        <>
            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                {/* Card 1 */}
                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/features1.png"
                            alt="Customizable Layouts image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Customizable Layouts
                        </CardHeader>
                        <p>
                            Personalize your meal planning experience with our
                            flexible layouts. Tailor your sections, categories,
                            and tabs to suit your unique style and organization
                            preferences. Our template adapts to your needs,
                            providing a seamless and personalized planning
                            experience.
                        </p>
                        <a
                            href="#"
                            className="text-black bg-[#ffc56e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-primary-900"
                        >
                            View
                        </a>
                    </CardBody>
                </Card>

                {/* Card 2 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/features1.png"
                            alt="Customizable Layouts image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Customizable Layouts
                        </CardHeader>
                        <p>
                            Personalize your meal planning experience with our
                            flexible layouts. Tailor your sections, categories,
                            and tabs to suit your unique style and organization
                            preferences. Our template adapts to your needs,
                            providing a seamless and personalized planning
                            experience.
                        </p>
                        <a
                            href="#"
                            className="text-black bg-[#ffc56e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-primary-900"
                        >
                            View
                        </a>
                    </CardBody>
                </Card>

                {/* Card 3 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/features1.png"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Progress Tracking
                        </CardHeader>
                        <p>
                            Celebrate your wins and stay motivated on your
                            nutrition journey. NutriTrack allows you to monitor
                            your progress with weight, measurements, and other
                            key metrics. Track your improvements over time and
                            see the positive impact of your healthy choices.
                        </p>
                        <a
                            href="#"
                            className="text-black bg-[#ffc56e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-primary-900"
                        >
                            View
                        </a>
                    </CardBody>
                </Card>

                {/* Card 4 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/features1.png"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Progress Tracking
                        </CardHeader>
                        <p>
                            Celebrate your wins and stay motivated on your
                            nutrition journey. NutriTrack allows you to monitor
                            your progress with weight, measurements, and other
                            key metrics. Track your improvements over time and
                            see the positive impact of your healthy choices.
                        </p>
                        <a
                            href="#"
                            className="text-black bg-[#ffc56e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-black  dark:focus:ring-primary-900"
                        >
                            View
                        </a>
                    </CardBody>
                </Card>

                {/* More Cards */}
            </CardGroup>
        </>
    );
};

export default Work;
