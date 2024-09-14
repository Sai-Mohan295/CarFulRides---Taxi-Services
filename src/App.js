import "./App.css";
import Header from "./Header";
import whitecar from "./Images/whitecar.png";
import car from "./Images/car.png";
import checklist from "./Images/checklist.png";
import whatsapp from "./Images/whatsapp.png";
import info from "./Images/info.png";
import boy from "./Images/boy.png";
import girl from "./Images/girl.png";
import client from "./Images/client.png";
import gamer from "./Images/man.png";
import call from "./Images/call.png";
import insta from "./Images/instagram.png";
import spects from "./Images/spects.png";
import SrisailamPic from "./Images/Srisailam.jpg";
import SrisailamPicTwo from "./Images/SrisailamImageTwo.jpg";
import CarFulRideBlack from "./Images/CarFulRideBlack.png"; // Path to your logo image
import ImageSlider from "./ImageSlider";
import "./Header.css";
import React, { useState } from "react";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();

    // Here you would typically handle sending the email
    // For example, using a backend service or an email API
    console.log("Feedback submitted:", feedback);

    // Reset feedback textarea
    setFeedback("");

    // Optionally show a confirmation message
    alert("Happy Journey! Buddy😋");
  };

  return (
    <div className="App">
      {isPopupOpen && <Popup onClose={closePopup} />}
      <Header onOpenPopup={openPopup} />
      <Marquee />
      <TypingText />
      <span class="button-content">
        <b>Travel agency in Hyderabad, Telangana </b>
      </span>
      <br />
      <a href="tel:+919502904662" className="phone-icon" aria-label="Call Us">
        <img src={call} alt="Car" className="call-image" />
        <button class="button">
          <span class="button-content">Book a ride now🤳🏼</span>
        </button>
      </a>
      <Srisailam />
      <ImageSlider />
      <InfoCard />
      <h1 class="word-by-word">
        <span>Customer Feedback</span>
      </h1>
      <h2>They 💖 us!</h2>
      <InfoCards />
      <a
        href="https://www.instagram.com/carfulrides "
        className="phone-icon"
        aria-label="Call Us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={insta} alt="insta" className="insta-image" />
      </a>
      <h4>We are on INSTAAA✨, Ping us🤳🏼</h4>
      <FeedbackForm
        feedback={feedback}
        onFeedbackChange={handleFeedbackChange}
        onSubmitFeedback={handleSubmitFeedback}
      />
      <hr />
      <h2>©️2024, carfulrides. All rights reserved.</h2>
      <h5>
        Developed by
        <p style={{ color: "red" }}>@Sai-Mohan & @Jagadeesh-Thamadala</p>
      </h5>
      <br />
      <br />
      <br />
      <br />
      {isPopupOpen && <Popup onClose={closePopup} />}
      <FooterMenu onOpenPopup={openPopup} />
    </div>
  );
}

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <span className="marquee-text">In Hyderabad</span>
        <img src={whitecar} alt="Car" className="car-image" />
        <span className="marquee-text">Cab Services!</span>
        <img src={car} alt="Car" className="car-image" />
        {/* Repeat images to create a continuous effect */}
      </div>
    </div>
  );
};

// TypingText component
const TypingText = () => {
  return (
    <div className="typing-container">
      <div class="container">
        <h1 class="animated-text">Welcome to CarFulRides⚡</h1>
      </div>
    </div>
  );
};

// InfoCard component
const Srisailam = () => {
  return (
    <div className="card-container">
      <div className="cardone">
        <h2>Hyderabad To Srisailam 1 Day Tour Package</h2>
        <img src={SrisailamPicTwo} alt="Car" className="SrisailamImage" />
        <p className="card-text">
          As one of the twelve Jyotirlingas, the Mallikarjuna Jyotirlinga stands
          as a beacon of devotion and spirituality, drawing countless devotees
          into its fold and serving as a reminder of the eternal connection
          between humanity and the divine.
        </p>
        <a href="tel:+916300793127" className="phone-icon" aria-label="Call Us">
          <button class="button">
            <span class="button-content">Book now🤳🏼</span>
          </button>
        </a>
      </div>
      <div className="cardone">
        <h2>Places You Will Visit During 1 Day Tour Package</h2>
        <img src={SrisailamPic} alt="Car" className="SrisailamImage" />

        <p className="card-text">
          ✅Mallikarjuna Temple <br />
          ✅Bramarambika Devi Temple <br />
          ✅Sakshi Ganapathi Temple <br />
          ✅Hatakeswara Temple <br />
          ✅Octopus View Point <br />
          ✅Srisailam Dam
        </p>
      </div>
    </div>
  );
};
// InfoCard component
const InfoCard = () => {
  return (
    <div className="card-container">
      <div className="cardone">
        <img src={spects} alt="Car" className="card-car" />
        <p className="card-text">
          We offer a wide range of transportation services to our customers
          located in Hyderabad seeking TAXI services.
          <br /> Our prime focus is on providing excellent customer service, and
          ensuring the <b>safety and comfort</b> of passengers💌
          <h3>Customer Safety mukyam bigiluuu🚗</h3>
        </p>
      </div>
      <div className="cardone">
        <img src={checklist} alt="Car" className="card-car" />
        <p className="card-text">
          Insurance ✅ <br />
          Pollution ✅ <br />
          Licence ✅ <br />
          Seat belt ✅ <br />
          Customer safety ✅ <br />
          Rash driving ❌
          <br /> We guarantee your comfort
          <h3>
            The key to safety is in <s> your </s>our hands..🎀
          </h3>
        </p>
      </div>
    </div>
  );
};

// InfoCards component
const InfoCards = () => {
  return (
    <div className="info-cards-container">
      <div className="card">
        <img src={girl} alt="Car" className="card-car" />
        <h3>Gayathri</h3>
        <p className="card-text">
          "I had a fantastic experience with this taxi service.{" "}
          <b>Well done CarFulRides⚡.</b> The driver was punctual, friendly, and
          knew the quickest routes. My ride was smooth and comfortable. Will
          definitely use them again!"
        </p>
      </div>
      <div className="card">
        <img src={boy} alt="Car" className="card-car" />
        <h3>Pavan</h3>
        <p className="card-text">
          "Great service! <b>Good luck CarFulRides⚡</b>. The car was clean and
          well-maintained, and the driver was professional. I felt safe and
          valued throughout the journey. Highly recommend!"
        </p>
      </div>
      <div className="card">
        <img src={gamer} alt="Car" className="card-car" />
        <h3>Rakesh</h3>
        <p className="card-text">
          "This taxi service exceeded my expectations.{" "}
          <b>Great job CarFulRides⚡.</b> I appreciated the timely updates and
          the courteous driver. The ride was enjoyable, and I arrived at my
          destination on time."
        </p>
      </div>
      <div className="card">
        <img src={client} alt="Car" className="card-car" />
        <h3>Raghu</h3>
        <p className="card-text">
          "I had a great experience. The driver was very knowledgeable about the
          city and gave me some great tips for my stay. The ride was comfortable
          and the service was top-notch. <b>Impressive CarFulRides⚡!!</b>"
        </p>
      </div>
    </div>
  );
};

// Popup component
const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close-button" onClick={onClose}>
          X
        </button>
        <h2 className="popup-title">Hi👋🏽, This is Jagadeesh & Sai</h2>
        <h3>Our Logo ⬇️</h3>
        <img
          src={CarFulRideBlack}
          alt="Special Offer"
          className="popup-image"
        />
        <p className="popup-text">
          Our Address : Near Kukatpally metro station, Beside SR grand mens pg
        </p>
        <h4>Contact : +917993840550</h4>
      </div>
    </div>
  );
};

// FeedbackForm component
const FeedbackForm = ({ feedback, onFeedbackChange, onSubmitFeedback }) => {
  return (
    <div className="feedback-form-container">
      <h2 className="feedback-title">We Value Your Feedback!</h2>
      <form onSubmit={onSubmitFeedback} className="feedback-form">
        <textarea
          value={feedback}
          onChange={onFeedbackChange}
          placeholder="Enter your feedback here..."
          className="feedback-textarea"
          rows="5"
          required
        />
        <button type="submit" className="feedback-submit-button">
          Send Feedback
        </button>
      </form>
    </div>
  );
};

// FooterMenu component
const FooterMenu = ({ onOpenPopup }) => {
  return (
    <div className="footer-menu">
      <a href="#search" className="whatsapp" onClick={onOpenPopup}>
        <img src={info} alt="whastapp" className="whatsapp" />
        <span className="whatsapp">About</span>
      </a>
      <a
        href="https://wa.me/+919502904662"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="whastapp" className="whatsapp" />
        <span className="whatsapp">Contact</span>
      </a>
    </div>
  );
};

export default App;
