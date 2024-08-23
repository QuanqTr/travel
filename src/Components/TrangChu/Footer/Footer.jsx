import React, { useEffect } from 'react';
import './footer.css';
import video from '../../../Assets/Video1.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore, MdOutlineFacebook } from 'react-icons/md';
import { SiZalo } from 'react-icons/si';
import { GrInstagram } from 'react-icons/gr';
import { FaPhone } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small> KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="/#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> HueTour.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Chúng tôi cam kết mang đến những trải nghiệm du lịch tuyệt vời nhất cho quý khách. Hãy theo
                            dõi chúng tôi trên các mạng xã hội để cập nhật những tin tức và ưu đãi mới nhất.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <MdOutlineFacebook className="icon" />
                            <GrInstagram className="icon" />
                            <SiZalo className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/*Group 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                        {/*Group 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HosteWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>
                        {/*Group 3 */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">LAST MINUTE</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Hương Thủy
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Phú Lộc
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Thành Phố Huế
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Quảng Điền
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Hương Trà
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <big>TRA CỨU NHANH - DU LỊCH GỌN</big>
                        <small>
                            LIÊN HỆ NGAY <FaPhone className="icon" />
                        </small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
