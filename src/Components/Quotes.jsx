import React, { useState, useEffect } from "react";
import StickyFooter from './StickyFooter';
import Meditation from '../Components/Meditation.jsx'
import { data } from '../Components/data.js' // Import the array from data.js

function Quotes() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        setFadeIn(false); // Reset animation
        let randomNum = Math.floor(Math.random() * data.quotes.length);
        let randomQuote = data.quotes[randomNum];

        setTimeout(() => {
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
            setFadeIn(true); // Start animation
        }, 10);
    };


    const handleClick = () => {
        getQuote();
    }

    return (
        <div className="quotebox-container">
            <div id="quote-box">
            <div id="text" className={fadeIn ? 'fade-in' : ''}>
                    <p>{quote}</p>
                </div>
                <div id="author" className={fadeIn ? 'fade-in' : ''}>
                    <p>{author}</p>
                </div>
                <div id="buttons">
                    <div className="social-media"></div>
                    <button onClick={handleClick}>More Wisdom</button>
                </div>
            </div>
            <Meditation />
            <StickyFooter>
                <a href="https://atomicpx.com" target="_blank" rel="noreferrer">© 2023 Atomic</a>
            </StickyFooter>
        </div>
    );
}

export default Quotes;