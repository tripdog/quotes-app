import React from 'react';

function Quotes(props) {
    const handleClick = () => {

    }
    return (
        <div id="quote-box">
            <div id="text">
                <p>Don't give up.</p>
            </div>
            <div id="author"><p>Tom Phillips</p></div>
            <div id="buttons">
                <div className="social-media">
                </div>

                <button onClick={handleClick}>
                    New Quote</button>

            </div>
        </div>
    )
}

export default Quotes;