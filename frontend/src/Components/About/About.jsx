// src/components/About.js

import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="about-main">
        <Navbar/>
        <div className="about-sec">
    <div className="about-page">
      <h1>About Us</h1>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to our Watch Haven! We are passionate about watches and committed to bringing you the finest collection of timepieces from around the world. Our journey began with a love for precision and craftsmanship, and we strive to share that passion with you through our curated selection of watches.
        </p>
      </section>
      <section className="about-section">
        <img src="https://www.rschrono.com/cdn/shop/collections/RS-Chrono-Wheel-Watch-Petronas-Collection-Header-Desktop_40848f85-7220-4946-a3bc-60f4426794b8.jpg?v=1707240504&width=2000" alt="Our Story" className="about-image" />
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide watch enthusiasts with an exceptional shopping experience. We aim to offer a diverse range of watches that cater to different styles, preferences, and budgets. Whether you're looking for a classic timepiece or a modern watch, we have something for everyone.
        </p>
      </section>
      <section className="about-section">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Wide variety of high-quality watches</li>
          <li>Exceptional customer service</li>
          <li>Competitive prices</li>
          <li>Secure online shopping experience</li>
          <li>Fast and reliable shipping</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to reach out to us at <a href="mailto:info@watchhaven.com">info@watchhaven.com</a>. We're here to help!
        </p>
      </section>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
