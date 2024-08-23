import Navbar from '../NabarLogin/NavbarLogin';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import './trangchu.css';
import { UserContext } from '../../../Context/UserContext';
import { useContext } from 'react';
import NavbarLogin from '../NabarLogin/NavbarLogin';
function TrangChuLogin() {
    const { user } = useContext(UserContext);
    return (
        <div>
            {!user && <Navbar />}
            {!!user && <NavbarLogin />}
            <br />
            <br />
            <br />
            <Home />
            <Main />
            <Footer />
        </div>
    );
}

export default TrangChuLogin;
