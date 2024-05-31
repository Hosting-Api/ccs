import { useState } from "react";

// export default function Fetch() {
export const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function submit(e) {
        // This will prevent page refresh
        e.preventDefault();

        // replace this with your own unique endpoint URL
        fetch("https://formcarry.com/s/KslMOOrYdcx", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ name: name, email: email, message: message })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (submitted) {
        return (
            <p>We have received your message, thank you for contacting us!</p>
        );
    }

    return (
        <form className="contact-form" onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
            />
            <br />
            <center>
                <button type="submit">Submit</button>
            </center>
        </form>
    );
};
