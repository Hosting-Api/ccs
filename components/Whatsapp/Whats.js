import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
    const buttonStyle = {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    };

    const iconStyle = {
        width: "40px",
        height: "40px"
        // zIndex: "10000"
    };

    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
        >
            <FontAwesomeIcon
                icon={faWhatsapp}
                style={{
                    marginRight: "5px",
                    height: "35px",
                    color: "white",
                    alignContent: "center"
                }}
            />
        </a>
    );
};

export default WhatsAppButton;
