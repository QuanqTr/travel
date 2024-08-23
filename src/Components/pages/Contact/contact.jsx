import React, { useContext } from 'react';
import Navbar from '../../TrangChu/Navbar/Navbar';
import img from '../../../Assets/img(4).webp';
import './contact.scss';
import { Link } from 'react-router-dom';
import Footer from '../../TrangChu/Footer/Footer';
import { UserContext } from '../../../Context/UserContext';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';
const contact = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user } = useContext(UserContext);
    return (
        <div  className="contact-page">
            {!user && <Navbar />}
            {!!user && <NavbarLogin />}
            <div>
                <div className="contact-content">
                    <div className="contact-top">
                        <img src={img} alt="Contact Us" className="contact-top-image" />
                        <div className="contact-top-text">
                            <h1>Contact Us</h1>
                            <ul className="text-list">
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="contact-middle">
                        <div class="contact-form-wrapper">
                            <div className="contact-form-left">
                                <h3>Reach Us Anytime</h3>
                                <form>
                                    <div className="form-group">
                                        <label for="Name">*Name</label>
                                        <input type="text" id="name" placeholder="Nguyễn Văn A" />
                                    </div>
                                    <div className="form-group">
                                        <label for="Email">Email</label>
                                        <input type="text" id="email" placeholder="abcde111@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" placeholder="012345678910" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">*Write Your Message</label>
                                        <textarea id="message" placeholder="What’s on your mind"></textarea>
                                    </div>
                                    <button type="submit" class="submit-btn">
                                        Submit Now
                                    </button>
                                </form>
                            </div>
                            <div className="contact-info-right">
                                <div className="info-group">
                                    <div className="title">
                                        <h6>Phone</h6>
                                    </div>
                                    <div className="content">
                                        <p>+84 369 745 246</p>
                                        <p>+84 369 745 246</p>
                                    </div>
                                   
                                </div>
                                <div className="info-group">
                                    <div className="title">
                                        <h6>Email Now</h6>
                                    </div>
                                    <div className="content">
                                        <p>info@example.com</p>
                                        <p>example@example.com</p>
                                    </div>
                                </div>
                                <div class="info-group">
                                    <div className="title">
                                        <h6>Location</h6>
                                    </div>
                                    <div className="content">
                                        <p>77 Nguyễn Huệ, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế</p>
                                    </div>
                                   
                                </div>
                                <div class="info-group">
                                    <div className="title">
                                        <h6>Opening Time</h6>
                                    </div>
                                    <div className="content">
                                        <p>8:00AM - 10:PM</p>
                                    </div>
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-calendar"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.7714478776224!2d107.5919970931486!3d16.459078018225963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13f462a1445%3A0x1b70ba6cb49fb526!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIEh14bq_!5e0!3m2!1svi!2s!4v1724244657524!5m2!1svi!2s"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Dai Hoc Khoa Hoc Hue"
                        ></iframe>
                        
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default contact;
