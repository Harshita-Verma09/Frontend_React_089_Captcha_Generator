import React, { useState } from "react";
import "./Captcha.css"

const SimpleCaptcha = () => {
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    };

    
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setMessage(""); 
        setInput("");
    };

    const verifyCaptcha = () => {
        if (input.trim() === captcha) {
            setMessage("Correct Captcha!");
        } else {
            setMessage("Wrong Captcha, try again.");
        }
    };

    return (
        <div className="captcha-container">
            <h2>Captcha Verification</h2>
            <div className="captcha-box">{captcha}</div>
            <button className="refresh-btn" onClick={refreshCaptcha}>
                Refresh
            </button>
            <div className="input-section">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter captcha"
                />
                <button className="verify-btn" onClick={verifyCaptcha}>
                    Verify
                </button>
            </div>
            <p className="message">{message}</p>
        </div>
    );
};

export default SimpleCaptcha;
