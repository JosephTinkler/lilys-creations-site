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
          top: 700, // Adjust this value to the position you want to scroll to
          behavior: 'smooth', // Smooth scroll
        });
      };
    return (
        <div className="mb-32">
            <Header />
            <div className="flex flex-col items-center justify-center mt-32 mb-64">
                <img src={frogNoBg} className="bounce-animation image-shadow" alt="Lily Photo" style={{ width: "150px", height: "auto" }}/>
                <h1 className="mt-3">Lily's Modelmaking</h1>
                <button onClick={scrollToSection} className="button mt-16 mb-16">Read More</button>
            </div>
            <div id="about-div" className="mx-12 mt-5 flex">
                <div id="about-text" className="w-1/2">
                    <h1 className='mb-2'>Hello, my name is Lily Beer</h1>
                    <h2 className='text-black mb-4'>I am currently studying BA(Hons) Modelmaking at Arts University Bournemouth.</h2>
                    <p className='text-black pr-2'>I am a passionate maker dedicated to craftsmanship, sustainability, and engaging design. My work focuses on fostering connections—whether through nature, education, or art. I studied BA (Hons) Modelmaking at Arts University Bournemouth, where I developed my skills in creating high-quality, detailed models for educational and interactive experiences.

My values centre around fostering a connection to nature and art. I have always had a passion for animals and have pursued this interest through studies in Animal Management and Dog Grooming at Merrist Wood College. I am particularly drawn to creating meaningful, interactive experiences that inspire and educate others. I have created interactive, educational models for organizations like Dorset Heath Partnership and Blackpool Zoo, to inspire learning and engagement.
I value traditional craftsmanship and embrace how artisanal processes create lasting connections with objects. Objects crafted with skill and care fulfill our innate desire for unique, human-centered design, in contrast to mass-produced, low-quality items. I embrace this by upcycling old items, shopping at charity shops, and challenging myself to create rather than buy whenever possible. I value the ‘reduce, reuse, recycle’ approach, which not only benefits the environment but also saves money.</p>
                </div>
                <div id="image-div" className="w-1/2">
                    <img src={mainimg} alt="Lily's Creations Logo" className="w-full h-full object-cover rounded-3xl" />
                </div>
            </div>  
        </div>
    );
};

export default Home;