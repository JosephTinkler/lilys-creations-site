import React from "react";
import Header from './header';
import './index.css'; 
import lilyPhoto from '/images/lily_logo.png';
import frogNoBg from '/images/Lily-frog-nobg.png';
import frogMain from '/images/Lily-frog-main.png';
import mainimg from '/images/mainimg.png';


const Home = () => {
    const scrollToSection = () => {
        window.scrollTo({
          top: 900, // Adjust this value to the position you want to scroll to
          behavior: 'smooth', // Smooth scroll
        });
      };
    return (
        <div className="mb-32">
            <Header />
            <div className="flex flex-col items-center justify-center mt-32 mb-64">
                <img src={frogNoBg} className="bounce-animation image-shadow" alt="Lily Photo" style={{ width: "150px", height: "auto" }}/>
                <h1 className="mt-3">Lily's Modelmaking</h1>
                <button onClick={scrollToSection} className="button mt-16 mb-32">Read More</button>
            </div>
            <div id="about-div" className="about-div mx-12 mt-5 flex">
                <div id="about-text" className="about-text w-1/2">
                    <h1 className='mb-2'>Hello, my name is Lily Beer</h1>
                    <h2 className='text-black mb-4'>I am currently studying BA(Hons) Modelmaking at Arts University Bournemouth.</h2>
                    <p className='text-black pr-2'>
                    I'm a passionate maker who believes in craftsmanship, sustainability, and engaging design. I studied BA (Hons) Modelmaking at Arts University Bournemouth, where I honed my skills in creating a range of high-quality models that connect people to nature, education, and art. <br/>

I've created educational models for organisations like Dorset Heath Partnership and Blackpool Zoo, designed to spark curiosity, build connection, and support conservation efforts.<br/>

I believe in the value of traditional craftsmanship and well-made objects. I'm always looking for ways to upcycle, buy second-hand, and make rather than buy.<br/>
                    </p>
                </div>
                <div id="image-div" className="image-div w-1/2">
                    <img src={mainimg} alt="Lily's Creations Logo" className="w-full h-full object-cover rounded-3xl" />
                </div>
               
            </div>  
            <div className="mx-12 mt-10 flex flex-col align-center justify-center text-center gap-4"> <div className="text-black">
                Check out my dissertation on "Restoring Connections: How Mass-production Has Eroded Our Bond with Everyday Objects and How We Can Rebuild It." 
                </div>
                <a href="/Dissertation.pdf" download className="flex justify-center align-center">
      <button className="button">Download Dissertation</button>
    </a></div>
        </div>
    );
};

export default Home;