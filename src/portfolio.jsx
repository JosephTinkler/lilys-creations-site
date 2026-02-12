import React from "react";
import { useState } from "react";
import Header from './header';
import './index.css'; 
//cover images
import StainedGlass6 from '/images/StainedGlass6.jpeg?url';
import Ceramic2 from '/images/Ceramic2.jpeg?url';
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
import tortoisecover from '/images/portfolio/tortoisecover.png?url';
//popup images
import Ceramic1 from '/images/Ceramic1.jpeg?url';
import Ceramic3 from '/images/Ceramic3.jpeg?url';
import Ceramic4 from '/images/Ceramic4.jpeg?url';
import Ceramic5 from '/images/Ceramic5.jpeg?url';
import StainedGlass1 from '/images/StainedGlass1.jpeg?url';
import StainedGlass2 from '/images/StainedGlass2.jpeg?url';
import StainedGlass3 from '/images/StainedGlass3.jpeg?url';
import StainedGlass4 from '/images/StainedGlass4.jpeg?url';
import StainedGlass5 from '/images/StainedGlass5.jpeg?url';
import StainedGlass7 from '/images/StainedGlass7.jpeg?url';
import StainedGlass8 from '/images/StainedGlass8.jpeg?url';
import StainedGlass9 from '/images/StainedGlass9.jpeg?url';
import StainedGlass10 from '/images/StainedGlass10.jpeg?url';
import StainedGlass11 from '/images/StainedGlass11.jpeg?url';
import StainedGlass12 from '/images/StainedGlass12.jpeg?url';
import StainedGlass13 from '/images/StainedGlass13.jpeg?url';
import StainedGlass14 from '/images/StainedGlass14.jpeg?url';
import StainedGlassLamp from '/images/StainedGlassLamp.png?url';
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
import cad3 from '/images/portfolio/newcad1.png?url';
import headsculpt2 from '/images/portfolio/25.png?url';
import headsculpt3 from '/images/portfolio/26.png?url';
import tortoise1 from '/images/portfolio/tortoise1.png?url';
import tortoise2 from '/images/portfolio/tortoise2.png?url';
import tortoise3 from '/images/portfolio/tortoise3.png?url';
import tortoise4 from '/images/portfolio/tortoise4.png?url';
import tortoise5 from '/images/portfolio/tortoise5.png?url';
import tortoise6 from '/images/portfolio/tortoise6.png?url';


const items = [
    { id: 1, images: [StainedGlass6,StainedGlassLamp,
    ], smallImages: [StainedGlass12,StainedGlass14,
    StainedGlass10,
    ,
    StainedGlass8,
        StainedGlass5,

    StainedGlass9,
    StainedGlass11,
    
    StainedGlass7,StainedGlass1,StainedGlass2,
    StainedGlass3,
    StainedGlass4], text: "Stained Glass" },
    { id: 2, images: [Ceramic2],smallImages : [Ceramic2,Ceramic3,Ceramic4,Ceramic1,Ceramic5], text: "Ceramic Creations" },
    { id: 3, images: [tortoisecover,tortoise1,tortoise2,tortoise3,tortoise4,tortoise5,tortoise6], text: "Tortoise and Hare", url:'uRXZcX3YC6Q' },
    { id: 4, images: [tapir1,tapir2,tapir3,tapir4,tapir5], text: "Blackpool Zoo Tapir" },
    { id: 5, images: [frog1,frog2,frog3,frog4], text: "African Bullfrog", audio:'/audio/frogaudio.mp3' },
    { id: 6, images: [pangolin1,pangolin2,pangolin3], text: "Anatomical Pangolin" },
    { id: 7, images: [headsculpt1,headsculpt2,headsculpt3], text: "Life Sized Head Sculpt" },
    { id: 8, images: [maggie1,maggie2,maggie3,maggie4], text: "Maggie’s Hospice Centre" },
    { id: 9, images: [lobster1,lobster2,lobster3], text: "Siren Lobster Feast" },
    { id: 10, images: [fairy_bottle1,fairy_bottle2], text: "Tinkerbell Potion Bottle" },
    { id: 11, images: [watch1,watch2,watch3], text: "Officine Panerai Watch" },
    { id: 12, images: [cad1,cad2,cad3], text: "Computer Aided Design" },
    { id: 13, images: [architectural1,architectural2], text: "Architectural Models" },
    { id: 14, images: [puppets1,puppets2,puppets3], text: "Group Puppet Project", url:'Qe-HTjODA8Y' },
    { id: 15, images: [butterfly1,butterfly2], text: "Hullabaloo Event" },
    { id: 16, images: [animation1,animation2], text: "Animation Collaboration" },
  ];
  function YouTubeEmbed({videoId}) {
    if (!videoId || videoId.trim() === '') {
      return <p></p>; // fallback UI
    }   
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        {<iframe
          src= {embedUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'relative',
            width: '560px',
            height: '315px'
          }}
        /> 
      
        }
      </div>
    );
  }
  function AudioPlayer({path}) {
    return (
<audio controls>
  <source src={path} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

    );
  }
  const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
      setSelectedItem(item);
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
                  onClick={() => openModal(item)}
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>    
        </div>
  
        {/* Modal */}
        {isOpen && selectedItem && (
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
              {selectedItem?.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Selected ${index}`}
                  className="rounded-lg max-w-full h-auto"
                />
              ))}

              {/* Small image grid */}
              {selectedItem?.smallImages?.length > 0 && (
                <div className="grid grid-cols-3 gap-3 w-full">
                  {selectedItem.smallImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Small ${index}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  ))}
                </div>
              )}
              {selectedItem?.url ? (
                <YouTubeEmbed videoId={selectedItem.url} />
              ) : null}
              {selectedItem?.audio ? (
                <AudioPlayer path={selectedItem.audio} />
              ) : null}
                </div>

            </div>
          </div>
        )}
      </div>
    );
  };
  
  
  export default Portfolio;