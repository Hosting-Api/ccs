import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { Contact } from "@components/Contact";
import SEO from "@components/SEO/SEO";
import { Footer } from "@components/Footer";
<<<<<<< HEAD
import LogoSlider from "@components/LogoSlider/LogoSlider";
=======
>>>>>>> 03eee1d9b93abb136873fe600cc173ae5ce31349

// import Plans from "@components/Plans/Plans";
import Work from "@components/Work/Work";
import Services from "@components/Services/Services";
// import Whatsapp from "@components/Whatsapp/Whatsapp";
import { Button } from "@components/Button";
import Whats from "@components/Whatsapp/Whats";
const phoneNumber = "+917984175557";

export default function Home() {
    return (
        <Layout className="">
            <SEO title="CCS" description="Creative Cloud Solutions" />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Our Services */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="services" className="services">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Services</BadgeMessage>
                                {/* <BadgeIcon icon="twemoji:waving-hand" /> */}
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                We offer follwing Services
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p></p>
                            </Content>
                            <Services />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Services */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="work" className="work">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Work</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Check Out our Work
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    We have worked with many clients and below
                                    are some of our work.
                                </p>
                            </Content>
                            <Work />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Plans */}
                    {/* <MotionBTTContainer */}
                    {/* transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="plans" className="plans">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Plans</BadgeMessage>
                                {/* <BadgeIcon icon="twemoji:waving-hand" /> */}
                    {/* </BadgeGroup> */}
                    {/* <Plans /> */}
                    {/* </SectionContainer>  */}
                    {/* </MotionBTTContainer> */}
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
<<<<<<< HEAD
                        <SectionContainer id="clients" className="benefits">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Clients</BadgeMessage>
=======
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Testimonials</BadgeMessage>
>>>>>>> 03eee1d9b93abb136873fe600cc173ae5ce31349
                                {/* <BadgeIcon icon="twemoji:waving-hand" /> */}
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                                alignment="center"
                            >
<<<<<<< HEAD
                                Our Clients
                            </PageTitle>
                            {/* <Columns /> */}
                            <LogoSlider />
=======
                                This is what our customers say
                            </PageTitle>
                            <Columns />
>>>>>>> 03eee1d9b93abb136873fe600cc173ae5ce31349
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="contact" className="contact">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Contact Us</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some Questions ?
                                {/* <br></br>No worries! We&apos;ve got the answers
                                you need: */}
                            </PageTitle>
                            {/* <Accordion /> */}
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Whatsapp Button */}
                    <Whats />
<<<<<<< HEAD

=======
                   
>>>>>>> 03eee1d9b93abb136873fe600cc173ae5ce31349
                    <Contact />
                </SectionContainer>
            </div>
        </Layout>
    );
}
