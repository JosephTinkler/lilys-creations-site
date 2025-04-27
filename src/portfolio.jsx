import React from "react";
import { useState } from "react";
import Header from './header';
import './index.css'; 
//cover images
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
import tapir1 from '/images/tapir1.png?url';
//popup images
import tapir2 from '/images/portfolio/2.png?url'
import tapir3 from '/images/portfolio/3.png?url'
import tapir4 from '/images/portfolio/4.png?url'
import tapir5 from '/images/portfolio/5.png?url'
import frog2 from '/images/portfolio/6.png?url'
import frog3 from '/images/portfolio/7.png?url'
import frog4 from '/images/portfolio/8.png?url'
import pangolin2 from '/images/portfolio/9.png?url'
import pangolin3 from '/images/portfolio/10.png?url'
import maggie2 from '/images/portfolio/11.png?url'
import maggie3 from '/images/portfolio/12.png?url'
import maggie4 from '/images/portfolio/13.png?url'
import butterfly2 from '/images/portfolio/14.png?url';
import fairy_bottle2 from '/images/portfolio/15.png?url';
import lobster2 from '/images/portfolio/16.png?url';
import lobster3 from '/images/portfolio/17.png?url';
import watch2 from '/images/portfolio/18.png?url';
import watch3 from '/images/portfolio/19.png?url';
import puppets2 from '/images/portfolio/20.png?url';
import puppets3 from '/images/portfolio/21.png?url';
import animation2 from '/images/portfolio/22.png?url';
import architectural2 from '/images/portfolio/23.png?url';
import cad2 from '/images/portfolio/24.png?url';
import headsculpt2 from '/images/portfolio/25.png?url';
import headsculpt3 from '/images/portfolio/26.png?url';


const items = [
    { id: 1, images: [tapir1,tapir2,tapir3,tapir4,tapir5], text: "Blackpool Zoo Tapir" },
    { id: 2, images: [frog1,frog2,frog3,frog4], text: "African Bullfrog" },
    { id: 3, images: [pangolin1,pangolin2,pangolin3], text: "Anatomical Pangolin" },
    { id: 4, images: [headsculpt1,headsculpt2,headsculpt3], text: "Life Sized Head Sculpt" },
    { id: 5, images: [maggie1,maggie2,maggie3,maggie4], text: "Maggie’s Hospice Centre" },
    { id: 6, images: [lobster1,lobster2,lobster3], text: "Siren Lobster Feast" },
    { id: 7, images: [fairy_bottle1,fairy_bottle2], text: "Tinkerbell Potion Bottle" },
    { id: 8, images: [watch1,watch2,watch3], text: "Officine Panerai Watch" },
    { id: 9, images: [cad1,cad2], text: "Computer Aided Design" },
    { id: 10, images: [architectural1,architectural2], text: "Architectural Models" },
    { id: 11, images: [puppets1,puppets2,puppets3], text: "Group Puppet Project" },
    { id: 12, images: [butterfly1,butterfly2], text: "Hullabaloo Event" },
    { id: 133, images: [animation1,animation2], text: "Animation Collaboration" },
  ];
  
  const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
  
    const openModal = (images) => {
      setSelectedImages(images);
      setIsOpen(true);
    };
  
    return (
      <div>
        <Header />
        <div id="about-div" className="mx-12 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={item.images[0]} // Show the first image as the thumbnail
                  alt={item.text}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openModal(item.images)}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>    
        </div>
  
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-lily-pink text-white hover:text-gray-500"
                >
                  ✕
                </button>
              </div>
  
              <div className="flex flex-col items-center space-y-6 mt-4 overflow-y-auto max-h-[80vh]">
  {selectedImages.slice(1).map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Selected ${index}`}
      className="rounded-lg max-w-full h-auto"
    />
  ))}
</div>

            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Portfolio;