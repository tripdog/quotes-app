import React, { useState, useEffect } from "react";
import StickyFooter from './StickyFooter';

function Quotes() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        setFadeIn(false); // Reset animation
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                console.log(dataQuotes);
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];

                setTimeout(() => {
                    setQuote(randomQuote.quote);
                    setAuthor(randomQuote.author);
                    setFadeIn(true); // Start animation
                }, 10);
            });
    }

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
            <StickyFooter>
                <a href="https://atomicpx.com" target="_blank" rel="noreferrer">© 2023 Atomic</a>
            </StickyFooter>
        </div>
    );
}

export default Quotes;