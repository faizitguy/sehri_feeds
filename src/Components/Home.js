import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { SiPhonepe } from "react-icons/si";

const Home = () => {
  function redirectToPhonePe() {
    // Replace 'receiverUPI' and 'amount' with actual values
    const receiverUPI = '9492457193@ybl';
    const amount = '100'; // Amount in rupees
    const receiverName = "Faiz Ahmed Khan";
    const description = "For Touheed Masjid Sehri Arragements";

    const pplink = `upi://pay?pa=${receiverUPI}@id&pn=${receiverName}&am=${amount}&cu=INR&tn=${description}`;
    // Generate the deep link
    // var deepLink = 'phonepe://upi?pa=' + receiverUPI + '&pn=Recipient%20Name&am=' + amount + '&cu=INR';

    // Redirect the user to PhonePe
    window.location.href = pplink;
}

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Help Us Feed Fasting Worshipers
          </h1>
          <p className="primary-text">
            He who feeds a fasting person will have a reward like that of the fasting person, without any reduction in his reward” (Tirmidhi).
          </p>
          <button className="secondary-button" onClick={() => redirectToPhonePe()}>
            Donate Now <SiPhonepe />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
