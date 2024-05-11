import React from "react";

const Foot = () => {
    return (
        <footer style={{ backgroundColor: "white", color: "black" }}>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Your Logo" />
                    </div>
                    <div className="social-links">
                        <a href="https://facebook.com">
                            <img src="/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com">
                            <img src="/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com">
                            <img src="/instagram.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                footer {
                    padding: 20px;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .footer-logo img {
                    width: 100px; /* Adjust as needed */
                    height: auto;
                }
                .social-links a {
                    margin-right: 10px;
                }
                .social-links img {
                    width: 30px; /* Adjust as needed */
                    height: 30px; /* Adjust as needed */
                }
            `}</style>
        </footer>
    );
};

export default Foot;
