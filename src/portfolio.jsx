import React from "react";
import Header from './header';
import './index.css'; 
import frog1 from '/images/frog1.JPG?url';
import pangolin1 from '/images/pangolin1.png?url';
import maggie1 from '/images/maggie1.JPG?url';
import headsculpt1 from '/images/emma-nobg.png?url';
import lobster1 from '/images/lobster1.png?url';
import fairy_bottle1 from '/images/fairy-bottle1.png?url';
import watch1 from '/images/watch1.png?url';
import architectural1 from '/images/architectural1.png?url';
import puppets1 from '/images/puppets1.png?url';
import butterfly1 from '/images/butterfly1.jpg?url';
import animation1 from '/images/animation1.png?url';
import cad1 from '/images/cad1.png?url';

const items = [
    { id: 1, image: frog1, text: "African Bullfrog" },
    { id: 2, image: pangolin1, text: "Anatomical Pangolin" },
    { id: 3, image: headsculpt1, text: "Life Sized Head Sculpt" },
    { id: 4, image: maggie1, text: "Maggie’s Hospice Centre" },
    { id: 5, image: lobster1, text: "Siren Lobster Feast" },
    { id: 6, image: fairy_bottle1, text: "Tinkerbell Potion Bottle" },
    { id: 7, image: watch1, text: "Officine Panerai Watch" },
    { id: 8, image: cad1, text: "Computer Aided Design" },
    { id: 9, image: architectural1, text: "Architectural Models" },
    { id: 10, image: puppets1, text: "Group Puppet Project" },
    { id: 11, image: butterfly1, text: "Hullabaloo Event" },
    { id: 12, image: animation1, text: "Animation Collaboration" },
  ];
  
  const Portfolio = () => {
    return (
      <div>
        <Header />
        <div id="about-div" className="mx-12 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>    
        </div>
      </div>
    );
  };
  
  export default Portfolio;