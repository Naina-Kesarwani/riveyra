import React from 'react'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "./Contact.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const API_URL = "http://localhost:5000";


function Contact() {


    const [services, setServices] = useState([]);
    const [budget, setBudget] = useState("");
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectDescription: "",
    });





    const serviceOptions = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Cloud Solutions",
        "Digital Marketing",
        "AI & Automation",
    ];

    const budgetOptions = [
        "Under $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000+",
    ];

    const handleServiceChange = (service) => {
        if (services.includes(service)) {
            setServices(services.filter((item) => item !== service));
        } else {
            setServices([...services, service]);
        }
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 VALIDATION (must be before API call)
    if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Please fill all required fields");
        return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
        toast.error("Enter a valid email");
        return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
        toast.error("Enter a valid 10-digit phone number");
        return;
    }

    setLoading(true); // 🔥 start loading

    try {
        const response = await fetch(`${API_URL}/api/inquiries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                services,
                budget,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success("Inquiry submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                projectDescription: "",
            });

            setServices([]);
            setBudget("");
        } else {
            toast.error(data.message || "Submission failed");
        }

    } catch (error) {
        console.error(error);
        toast.error("Server not responding. Try again later.");
    } finally {
        setLoading(false); // 🔥 stop loading
    }
};





    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div>
            <Nav />

            <div className="contact-info-grid">

                <div className="contact-card">
                    <div className="contact-icon">✉</div>
                    <h3>Email Us</h3>
                    <p>hr@riveyrainfotech.com</p>
                    <p>sales@riveyrainfotech.com</p>
                    <span>We reply within 2 hours</span>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">📞</div>
                    <h3>Call Us</h3>
                    <p>+91 9919888269</p>
                    <span>Mon–Fri, 10AM–6:30PM IST</span>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">📍</div>
                    <h3>Visit Us</h3>
                    <p>
                        Kanpur, Uttar Pradesh
                        <br />
                        STPI, 8th Floor, A-1/4 UPSIDC Complex,
                        <br />
                        Lakhanpur, 208024
                    </p>
                    <span>Also in Lucknow & Delhi</span>
                </div>

            </div>




            <section className="contact-form-section">
                <form className="contact-form-container" onSubmit={handleSubmit}>

                    <h2>Your Details</h2>
                    <p className="section-desc">
                        Tell us who you are so we can personalise our response.
                    </p>

                    <div className="form-grid">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />


                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />


                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                        />





                        <input
                            type="text"
                            placeholder="Company name"
                            required
                            value={formData.company}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    company: e.target.value,
                                })
                            }
                        /> </div>

                    <div className="form-group">
                        <h3>Services Needed</h3>

                        <div className="option-grid">
                            {serviceOptions.map((service) => (
                                <label
                                    key={service}
                                    className={`option-card ${services.includes(service) ? "active" : ""
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={services.includes(service)}
                                        onChange={() => handleServiceChange(service)}
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Estimated Budget</h3>

                        <div className="option-grid">
                            {budgetOptions.map((item) => (
                                <label
                                    key={item}
                                    className={`option-card ${budget === item ? "active" : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="budget"
                                        checked={budget === item}
                                        onChange={() => setBudget(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Tell Us About Your Project</h3>

                        <textarea
                            rows="6"
                            placeholder="Share your goals, requirements, timeline, and any other details about your project..."
                            value={formData.projectDescription}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    projectDescription: e.target.value,
                                })
                            }
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                </form>
            </section>





            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default Contact
