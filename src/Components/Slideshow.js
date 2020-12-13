import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
  const fadeImages = [
    "https://modern-villas.com/wp-content/uploads/2018/08/Luxury-Villa-with-Seaviews-in-Javea-3.jpg",
    "https://www.slrlounge.com/wp-content/uploads/2014/07/973A2703-41.jpg",
    "https://88designbox.com/upload/2018/02/07/modern-house-in-la-canada.jpg",
    "https://i.pinimg.com/originals/92/5f/6f/925f6f3d13fd181bb03bee5ab2db51f3.jpg"

  ];

  return (
    <div>
      <div>
        <Fade duration="1800" style={{marginBottom:"10px"}}>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} style={{width:"100%",height:"550px"}} />
            </div>
          </div>
          <div className="each-fade">
            
            <div>
              <img src={fadeImages[1]} style={{width:"100%",height:"550px"}}/>
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} style={{width:"100%",height:"550px"}}/>
            </div>
           
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[3]} style={{width:"100%",height:"550px"}}/>
            </div>
           
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slideshow;


