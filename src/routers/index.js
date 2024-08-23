import TrangChu from '../Components/TrangChu/Trangchu';
import Login from '../Components/TrangChu/Login/Login';
import Register from '../Components/TrangChu/Register/Register';
import TrangChuLogin from '../Components/TrangChu/TrangChuLogin';
import ProfilePage from '../Components/pages/AccountPage/ProfilePage';
import PlacesPage from '../Components/pages/AccountPage/PlacesPage';
import PlacesFormPage from '../Components/pages/AccountPage/PlacesFormPage';
import DetailPage from '../Components/pages/AccountPage/DetailPage';
import BookingsPage from '../Components/pages/AccountPage/BookingsPage';
import About from '../Components/pages/About/About';
import Contact from '../Components/pages/Contact/contact';
import Destination from '../Components/pages/Destinate/Destinate';
import BookingPlace from '../Components/pages/AccountPage/BookingPlace';

const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/home', component: TrangChuLogin },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/account', component: ProfilePage },
    { path: '/account/places', component: PlacesPage },
    { path: '/account/places/new', component: PlacesFormPage },
    { path: '/account/places/:id', component: PlacesFormPage },
    { path: '/place/:id', component: DetailPage },
    { path: '/account/bookings', component: BookingsPage },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/destination', component: Destination},
    { path: '/account/bookings/:id', component: BookingPlace },
];

export { publicRoutes };