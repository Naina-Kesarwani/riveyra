import React, { useEffect, useRef, useState } from "react";
import "./About.css";

import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";
import img4 from "../assets/a4.jpeg";

function About() {
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cardData = [
    {
      id: "card1",
      image: img1,
      title: "Maximize Efficiency",
      desc: "Streamlined workflows that cut costs and save time.",
    },
    {
      id: "card2",
      image: img2,
      title: "Strategic Guidance",
      desc: "Expert advisors aligned to your business goals.",
    },
    {
      id: "card3",
      image: img3,
      title: "24/7 Support",
      desc: "Round-the-clock assistance whenever you need it.",
    },
    {
      id: "card4",
      image: img4,
      title: "Competitive Edge",
      desc: "Technology that puts you ahead of the competition.",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>We Build Remarkable Digital Experiences</h1>
      </div>

      <div className="about-subtext">
        <p>
          Riveyra Infotech is Kanpur's premier software development company with
          over 7 years of proven excellence, delivering reliable and innovative
          digital solutions across India and beyond.
        </p>
      </div>

      <div className="card-section">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            id={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`card ${
              visibleCards.includes(card.id) ? "show" : ""
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={card.image} alt="" />
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-section">
        <button className="btn primary">Our Story ➜</button>
        <button className="btn secondary">Watch Intro</button>
      </div>
    </div>
  );
}

export default About;