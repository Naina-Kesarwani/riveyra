// Dev.jsx

import React, { useEffect, useRef } from "react";
import "./Dev.css";
import {
  FaCode,
  FaBrain,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";


function Dev() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".dev-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max((-rect.top) / window.innerHeight, 0),
        4
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const reveal = progress - index;

        if (reveal > 0) {
          card.style.transform = `translateY(0px)`;
          card.style.opacity = "1";
        } else {
          card.style.transform = `translateY(180px)`;
          card.style.opacity = "0";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Strategic Technology Consulting",

    desc: "We help businesses align technology with growth goals through digital transformation strategies, architecture planning, and scalable innovation solutions.",

    button: "View Consulting Services",
  },

  {
    icon: <FaCode />,
    title: "Digital Product Development & Engineering",

    desc: "From modern web platforms to enterprise software, we build high-performance digital products with scalable architecture and seamless user experiences.",

    button: "View Product Engineering Services",
  },

  {
    icon: <FaBrain />,
    title: "AI, Data and Analytics Solutions",

    desc: "Leverage AI, automation, and advanced analytics to optimize operations, predict trends, and deliver intelligent customer experiences at scale.",

    button: "View Artificial Intelligence Services",
  },

  {
    icon: <FaShieldAlt />,
    title: "Cloud Operations and Cybersecurity",

    desc: "Secure and scale your infrastructure with cloud-native operations, Zero Trust security frameworks, and enterprise-grade cybersecurity solutions.",

    button: "View Cybersecurity Services",
  },
];
  return (
    
    <section className="dev-section">
      <div className="dev-sticky">
        <div className="dev-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dev-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
                <div className="dev-icon">{card.icon}</div>
              <h2>{card.title}</h2>

              <p>{card.desc}</p>
              <button>{card.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dev;