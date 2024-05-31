import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import WhatsAppButton from "@components/Whatsapp/Whatsapp";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            {/* <WhatsAppButton
                style={{ zIndex: "99" }}
                phoneNumber="+917984175557"
            /> */}
            <Footer />
            {/* <Foot /> */}
        </main>
    );
};
