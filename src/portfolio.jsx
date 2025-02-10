import React from "react";
import Header from './header';
import './index.css'; 
import lilyPhoto from '/images/lily_logo.png'; // Import your logo image

const portfolio = () => {
    return (
        <div>
            <Header />
            <div id="about-div" className="mx-12 mt-5 flex">
                <div id="about-text" className="w-1/2">
                    <h1 className='mb-2'>Hello, my name is Lily Beer</h1>
                    <h2 className='text-black mb-4'>I am currently studying BA(Hons) Modelmaking at Arts University Bournemouth.</h2>
                </div>
                <div id="image-div" className="w-1/2">
                    <img src={lilyPhoto} alt="Lily's Creations Logo" className="logo" />
                </div>
            </div>  
        </div>
    );
};

export default portfolio;