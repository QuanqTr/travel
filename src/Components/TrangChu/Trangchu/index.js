import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import './trangchu.css'
import { UserContext } from '../../../Context/UserContext'
import { useContext } from 'react'
import NavbarLogin from '../NabarLogin/NavbarLogin'
function TrangChu(){
    const { user } = useContext(UserContext);
    return(
       <div>
        {!user && <Navbar />}
        {!!user && <NavbarLogin />}
        <Home/>
        <Main/>
        <Footer/>
       </div>
    );
}

export default TrangChu