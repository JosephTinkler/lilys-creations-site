import React from "react";
import Header from './header';
import './index.css'; 
import lilyPhoto from '/images/lily_logo.png';
import frogNoBg from '/images/Lily-frog-nobg.png';
import frogMain from '/images/Lily-frog-main.png';
import mainimg from '/images/mainimg.png';
import instagram from '/images/instagram.svg';
import mail from '/images/mail.svg';
import linkedin from '/images/linkedin.svg';


const Contact = () => {
    
    return (
        <div className="mb-32">
            <Header />
            <div id="contact-about" className="flex justify-center align-center"></div>
            <div id="contact-div" className="flex gap-2 justify-center align-center mt-32">
               <a className="flex justify-center align-center" target="_blank" href="https://www.instagram.com/lily.g.beer/">
                <img src={instagram} />
               </a>
               <a className="flex justify-center align-center" target="_blank" href="mailto:lilygbeer@gmail.com">
                    <img src={mail} />
                </a>
                <a className="flex justify-center align-center" target="_blank" href="https://uk.linkedin.com/in/lily-beer-2b530033a">
                    <img src={linkedin} />
                </a>
            </div>  
        </div>
    );
};

export default Contact;