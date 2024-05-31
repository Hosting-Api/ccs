import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { SectionContainer } from "@components/Section";

const WhatsAppButton = ({ phoneNumber }) => {
    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "50px",
                right: "20px",
                backgroundColor: "#25D366",
                alignContent: "center",
                color: "white",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                zIndex: "99" // Ensure it's above other content
            }}
            onClick={openWhatsApp}
        >
            <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ marginRight: "5px", height: "40px" }}
            />
        </div>
    );
};

export default WhatsAppButton;
