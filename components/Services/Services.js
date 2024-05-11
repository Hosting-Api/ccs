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
                            src="/post.jpg"
                            alt="Customizable Layouts image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Posts
                        </CardHeader>
                        <p>
                            We provide premium quality posters / flyers for
                            Instagram / Whatsapp to promote your business.
                        </p>
                    </CardBody>
                </Card>

                {/* Card 2 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/reel.jpg"
                            alt="Customizable Layouts image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Reels
                        </CardHeader>
                        <p>
                            Our team has experienced reels creaters who would
                            create excellent reels for you.
                        </p>
                    </CardBody>
                </Card>

                {/* Card 3 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/account.jpg"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Account Management
                        </CardHeader>
                        <p>
                            We can manage your social media accounts with
                            regular posting of content as demanded by our
                            client.
                        </p>
                    </CardBody>
                </Card>

                {/* Card 4 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/photoshoot.jpg"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Photoshoot & Videography
                        </CardHeader>
                        <p>
                            We have experienced photographers and videographers
                            who would capture excellent photos and videos for
                            your business.
                        </p>
                    </CardBody>
                </Card>

                {/* Card 5 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/website.avif"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Website Development
                        </CardHeader>
                        <p>
                            We can develop you excellent websites for further
                            growth of your business across the globe.
                        </p>
                    </CardBody>
                </Card>

                {/* Card 6 */}

                <Card className="col-span-1 text-primary-900">
                    <CardBody className="w-full bg-white-600/20 p-12">
                        <CardImage
                            src="/meeting.avif"
                            alt="Progress Tracking image used."
                        />
                        <CardHeader className="!text-black !text-2xl !font-bold">
                            Growth Planning & Strategy
                        </CardHeader>
                        <p>
                            We would help you in planning and strategizing the
                            the further steps for the growth of your business.
                        </p>
                    </CardBody>
                </Card>

                {/* More Cards */}
            </CardGroup>
        </>
    );
};

export default Services;
