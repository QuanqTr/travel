import React, { useContext, useState } from 'react';
import Footer from '../../TrangChu/Footer/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Thêm framer-motion
import 'aos/dist/aos.css';
import Img1 from '../../../Assets/anh-about.png';
import video from '../../../Assets/Video1.mp4';
import { IoMdCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import Img from '../../../Assets/Logo.png';
import { FaGlobeAmericas, FaUserTie,FaArrowRight,FaPlay } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { GiPriceTag } from 'react-icons/gi';
import { BsCalendarCheck, BsArrowRepeat } from 'react-icons/bs';
import './about.scss'
import Navbar from '../../TrangChu/Navbar/Navbar';
import { UserContext } from '../../../Context/UserContext';
import NavbarLogin from '../../TrangChu/NabarLogin/NavbarLogin';

const About = () => {
    
    const { user } = useContext(UserContext);

    const [active, setActive] = useState('navBar');
    
    // Hàm để bật thanh điều hướng
    const showNav = () => {
        setActive('navBar activeNavbar');
    };
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
      setIsVideoPlaying(true);
    };

    // Hàm để tắt thanh điều hướng
    const removeNavbar = () => {
        setActive('navBar');
    };


    return (
        <div>
           {!user && <Navbar />}
           {!!user && <NavbarLogin />}
            {/* Phần Home */}
            <div className="home-container">
                <section className="home">
                    <div className="overlay"></div>
                    <video src={video} muted autoPlay loop type="video/mp4"></video>

                    <div className="homeContent container">
                        <div className="textDiv">
                            <span data-aos="fade-up" className="smallText">Du lịch Huế</span>
                            <h1 data-aos="fade-up" className="homeTitle">Tra cứu nhanh - Du lịch gọn</h1>
                        </div>
                    </div>
                </section>

                <button>
                    <Link data-aos="fade-up" to="/home" className="home-button">
                        <span className="text">Trang chủ</span>
                        <FaArrowRight className="icon" />
                    </Link>
                </button>
            </div>

             {/* HueTour Tốt Nhất */}
            
             <section className="about-section" />
                <div className="why-triprex">
                    <h2 data-aos="fade-up" className="section-title">Tại Sao Nên Chọn Huetour.</h2>
                    <div data-aos="fade-up" className="features-grid">
                        {[
                            { icon: <BsCalendarCheck />, title: 'Đặt Chỗ Nhanh', description: 'Dễ dàng đặt chỗ và xác nhận nhanh chóng cho các tour du lịch tại Thừa Thiên Huế.' },
                            { icon: <GiPriceTag />, title: 'Giá Cạnh Tranh', description: 'Cung cấp các gói tour với giá hợp lý, phù hợp với ngân sách của du khách.' },
                            { icon: <FaGlobeAmericas />, title: 'Phạm Vi Tỉnh Thành', description: 'Khám phá Thừa Thiên Huế với các tour du lịch đa dạng và phong phú.' },
                            { icon: <BsArrowRepeat />, title: 'Tính Linh Hoạt Tối Ưu', description: 'Lịch trình linh hoạt, dễ dàng thay đổi theo nhu cầu của du khách.' },
                            { icon: <BiSupport />, title: 'Hỗ Trợ Tốt Nhất 24/7', description: 'Đội ngũ hỗ trợ luôn sẵn sàng phục vụ 24/7 để giải đáp thắc mắc của du khách.' },
                            { icon: <FaUserTie />, title: 'Các Tour Được Hướng Dẫn', description: 'Trải nghiệm các tour du lịch được hướng dẫn bởi các chuyên gia địa phương giàu kinh nghiệm.' },
                        ].map((feature, index) => (
                            <motion.div
                            key={index}
                            className="feature-item"
                            whileHover={{ scale: 1.1, rotate: 10, borderRadius: '15px' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                        ))}
                    </div>
                </div>
{/* Thống kê */}
<div data-aos="fade-up" className="statistics-section">
                <div className="stat-item">
                <img src={require('../../../Assets/tour-guide.png')}/>
                    <h3>+55</h3>
                    <p>Hướng dẫn viên du lịch</p>
                    
                </div>
                <div className="stat-item">
                <img src={require('../../../Assets/positive-review.png')}/>
                    <h3>%99.5</h3>
                    <p>Đánh giá tích cực</p>
                   
                </div>
                <div className="stat-item">
                <img src={require('../../../Assets/immigrant.png')}/>
                    <h3>+K2.5</h3>
                    <p>Chuyến du lịch thành công</p>
                    
                </div>
                <div className="stat-item">
                <img src={require('../../../Assets/destination-flag.png')}/>
                    <h3>+K3.5</h3>
                    <p>Khách du lịch hài lòng</p>
                    
                </div>
            </div>
            {/* Phần chính */}
           <div className="tour-section">
  <div data-aos="fade-up" className="content">
    <h1>Cung cấp các dịch vụ du lịch tốt nhất!</h1>
    <p>
      Hãy tự tin lựa chọn dịch vụ của chúng tôi. Chúng tôi luôn cam kết mang lại
      trải nghiệm tuyệt vời cho quý khách. Với đội ngũ hướng dẫn viên chuyên nghiệp
      và nhiều năm kinh nghiệm, chúng tôi sẽ giúp chuyến đi của bạn trở nên đáng nhớ.
    </p>

        <div className="actions">
        <button className="watch-tour-btn" onClick={handlePlayVideo}>
            <FaPlay className="play-icon" /> Watch Tour
            </button>
        </div>
      </div>
      <div data-aos="fade-up" className="Main-about grid">
        <img src={Img1} alt="Giới Thiệu" className="about-image" />
      </div>
    </div>
    {/* Phát video nếu isVideoPlaying là true */}
    {isVideoPlaying && (
        <div className="video-overlay">
          <video src={video} controls autoPlay className="tour-video"></video>
          <button onClick={() => setIsVideoPlaying(false)} className="close-video">
            Close
          </button>
        </div>
      )}        
            <Footer />
        </div>
    );
}

export default About;
