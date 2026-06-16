import React, { useEffect, useRef, useState } from "react";
import "./About1.css";

import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";
import img4 from "../assets/a4.jpeg";
import Nav from "../components/Nav";
import abt1 from "../assets/abt1.png";
import abt2 from "../assets/abt2.jpeg";
import abt3 from "../assets/abt3.jpeg";
import abt4 from "../assets/abt4.jpeg";
import abt5 from "../assets/abt5.jpeg";
import abt6 from "../assets/abt6.jpeg";
import Footer from "../components/Footer";


function About1() {

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



    const journeyData = [
        {
            year: "2016",
            image: abt1,
            title: "Founded in Kanpur",
            desc: "Riveyra Infotech was born with a vision to deliver world-class digital solutions from the heart of India.",
        },

        {
            year: "2017",
            image: abt2,
            title: "First Enterprise Client",
            desc: "Secured our first enterprise-scale ERP deployment, marking the shift from startup to serious technology partner.",
        },

        {
            year: "2021",
            image: abt3,
            title: "AI Practice Launched",
            desc: "Built a dedicated AI & ML team, pioneering intelligent automation for mid-market businesses across India.",
        },

        {
            year: "2023",
            image: abt4,
            title: "ISO 27001 Certified",
            desc: "Achieved ISO 27001 certification validating our commitment to information security.",
        },

        {
            year: "2024",
            image: abt5,
            title: "Pan-India Presence",
            desc: "Expanded operations to Lucknow and Delhi, serving active clients across multiple industries.",
        },

        {
            year: "2025",
            image: abt6,
            title: "500+ Projects Delivered",
            desc: "Crossed the milestone of 500 successful project deliveries with exceptional client satisfaction.",
        },
    ];




    useEffect(() => {
        const sections = document.querySelectorAll(".about-journey");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);






    return (
        <div>
            <Nav />
            <div className="about-container-top">
                <div className="about-container-content-top">
                    <div className="about-header-top">
                        <h1>Building Remarkable Digital Futures</h1>
                    </div>

                    <div className="about-subtext-top">
                        <p>
                            Riveyra Infotech is Kanpur's premier software development company — 10+ years of transforming ambitious ideas into extraordinary digital products across India and beyond.
                        </p>
                    </div>
                    <div className="button-section-top">
                        <button className="btn-top primary-top">Our Services ➜</button>
                        <button className="btn-top secondary-top">View Portfolio</button>
                    </div>
                    <div className="btn-container1-top">
                        <div className="btn1-top">
                            <h2>10+</h2>
                            <p>Years of Excellence</p>
                        </div>
                        <div className="btn1-top">
                            <h2>50+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="btn1-top">
                            <h2>500+</h2>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="btn1-top">
                            <h2>98%</h2>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "50px", paddingBottom: "50px" }} className="about-container">
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
                            className={`card ${visibleCards.includes(card.id) ? "show" : ""
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
            <section className="about-section2">

                <div className="about-header2">
                    <p>OUR JOURNEY</p>

                    <h1>7 Years of Building</h1>
                    {journeyData.map((item, index) => (
                        <div
                            className={`about-journey ${index % 2 === 0 ? "normal-row" : "reverse-row"
                                }`}
                            key={index}
                        >

                            {/* IMAGE */}
                            <div className="about-journey-img">
                                <img src={item.image} alt="" />
                            </div>

                            {/* CONTENT */}
                            <div className="about-journey-content">
                                <h2 className="journey-year">{item.year}</h2>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
            <section className="about-section2 core-values">

                <div className="about-header2">
                    <p>WHAT DRIVES US</p>

                    <h1>Our Core Values</h1>
                </div>
                <div className="core">

                    <div className="core-card">
                        <div className="core-icon">⚡</div>

                        <h1>Speed Without Compromise</h1>

                        <p>
                            We move fast — but never at the cost of quality.
                            Rapid delivery and production-grade code are not mutually exclusive.
                        </p>
                    </div>

                    <div className="core-card">
                        <div className="core-icon">🔒</div>

                        <h1>Security First</h1>

                        <p>
                            Every system we build is designed with security
                            as a first-class concern, not an afterthought.
                        </p>
                    </div>

                    <div className="core-card">
                        <div className="core-icon">📈</div>

                        <h1>Outcome-Driven</h1>

                        <p>
                            We measure success by your business results,
                            not just deliverables. If it doesn't move your metrics,
                            it doesn't count.
                        </p>
                    </div>

                    <div className="core-card">
                        <div className="core-icon">🤝</div>

                        <h1>Long-Term Partnership</h1>

                        <p>
                            We don't disappear after launch.
                            Our relationships outlast projects —
                            most clients have been with us 3+ years.
                        </p>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <div className="about-header2">
                    <h1>Ready to Build Something Great?</h1>
                    <br />
                    <h4 style={{ color: "gray" }}>Let's talk about your project. We respond within 2 hours.</h4>
                    <br />
                    <div className="button-section" style={{ marginLeft: "-10px" }}>
                        <button className="btn primary">Start a Project ➜</button>
                        <button className="btn secondary">View Our Work</button>
                    </div>
                </div>

            </section>
            <Footer />

        </div>
    );
}

export default About1;