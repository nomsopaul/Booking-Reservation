import './hotel.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState (0);
  const [open, setOpen] = useState (false);

  const photos = [
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/emirates-a319-4-1024x683.jpeg',
    },
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/emirate-a319-3.jpeg',
    },
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/emirates-a319-2.jpeg',
    },
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/emirates-a319-1-1024x683.jpeg',
    },
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/inside-emirates-a319-private-jet.jpeg',
    },
    {
      src: 'https://bitluxtravel.com/wp-content/uploads/2021/03/emirates-a319-2.jpeg',
    },
  ];

  const handleOpen = i => {
    setSlideNumber (i);
    setOpen (true);
  };

  const handleMove = direction => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber (newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open &&
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen (false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove ('l')}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove ('r')}
            />
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Emirates Jet</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a jet over $114 at this rate and get a free service
          </span>
          <div className="hotelImages">
            {photos.map ((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Emirates A319 Private Jet</h1>
              <p className="hotelDesc">
                Internationally acclaimed, Emirates represents the largest airline of the United Arab Emirates.
                Headquartered in Garhoud, Dubai, the airline boasts over 3600 weekly flights from its Dubai International Airport hub.
                From there Emirates services flights to more than 150 cities spread across 80 countries and six continents.
                {' '}
                The company operates a mixed fleet including Boeing wide-body and Airbus aircrafts.
                Known for luxurious flights accommodating the upscale needs of discerning travelers,its executive lines are engineered to impress.
                In this expose we take a closer look inside one of their top-of-the-line private jets: the AirBus A319.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a nice 9-day vacation!</h1>
              <span>
                Located in the real heart of Dubai, this property has an
                excellent score of 9.8!
              </span>
              <h2>
                <b>$20000</b> (9 days)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
