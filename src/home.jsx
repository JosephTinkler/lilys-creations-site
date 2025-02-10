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
                <button onClick={scrollToSection} className="button mt-16">Read More</button>
            </div>
            <div id="about-div" className="mx-12 mt-5 flex">
                <div id="about-text" className="w-1/2">
                    <h1 className='mb-2'>Hello, my name is Lily Beer</h1>
                    <h2 className='text-black mb-4'>I am currently studying BA(Hons) Modelmaking at Arts University Bournemouth.</h2>
                    <p className='text-black'>Lorem ipsum odor amet, consectetuer adipiscing elit. Amet faucibus dapibus est eleifend senectus euismod. Ad ridiculus natoque laoreet aliquam erat mollis. Curabitur nam hac enim sollicitudin proin nibh nibh. Class semper felis eleifend ornare pulvinar eleifend fringilla. Orci nascetur fermentum tortor efficitur rutrum.

Sollicitudin ultrices eget libero sagittis orci dictumst mattis. Sollicitudin fringilla urna sapien ultricies at bibendum diam nascetur. Varius erat enim eros malesuada ipsum vivamus, etiam parturient. Per metus maximus at ad magnis diam egestas inceptos. Class gravida suspendisse vehicula pretium praesent lacus libero varius sit. Posuere convallis sollicitudin integer montes cras felis. Felis primis sociosqu nulla purus cursus? Tincidunt ultrices lectus magnis himenaeos diam vestibulum senectus lacinia. Malesuada dignissim facilisis porta bibendum quam faucibus tortor luctus.</p>
                </div>
                <div id="image-div" className="w-1/2">
                    <img src={mainimg} alt="Lily's Creations Logo" className="w-full h-full object-cover rounded-3xl" />
                </div>
            </div>  
        </div>
    );
};

export default Home;