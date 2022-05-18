import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Mail from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(!open);
  };
const handleArrow = (direction)=>{
  let newSlideNumber;
  if(direction==='left'){
    newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
  }else{
    newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
  }
  setSliderNumber(newSlideNumber)
}
  return (
    <>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">

        {open && 
      <div className="sliderContainer">
           <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setOpen(false)}/>
           <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleArrow('left')} />
           <div className="sliderWrapper">
             <img src={photos[sliderNumber].src} alt="sliderImg" className="sliderImg" />
           </div>
           <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleArrow('right')} />
      </div>
      }

        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Sea Beach Road, Laboni Point, Hotel Motel Zone, Cox's Bazar, 4700
              Cox's Bazar, Bangladesh –
            </span>
          </div>
          <span className="hotelDistance">Travel Sustainable property</span>
          <span className="hotelTaxi">
            Distance in property description is calculated using OpenStreetMap
          </span>
          <button className="hotelButton">Reserve or Book now</button>

          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=""
                  className="hotelSingleImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelsDetailsText">
              <h1 className="hotelsDetailsTitle">
                Hotel Sea World Cox's Bazar
              </h1>
              <div className="hotelsDetailsDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore soluta fugiat nulla, recusandae similique, cumque
                aspernatur nostrum, dolores corporis modi quibusdam aperiam!
                Repellat, eligendi asperiores ex sapiente esse nisi beatae vel
                iste architecto, inventore reprehenderit porro fugiat. Iusto
                illum dolorum in dolor ab quo consequuntur esse iste voluptates
                necessitatibus architecto nesciunt corporis suscipit aliquam,
                eius quia. Provident sapiente magnam deleniti odio eveniet ipsum
                ab. Voluptatem molestias hic atque non expedita amet dicta quis
                consequatur dolores error mollitia, voluptatibus suscipit
                sapiente voluptas rerum commodi doloremque cum at aut blanditiis
                doloribus magnam quibusdam recusandae! Corrupti omnis eaque
                quisquam beatae enim expedita animi!
              </div>
            </div>
            <div className="hotelsDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
