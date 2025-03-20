import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import ChangePass from './components/ChangePass';
import HostelsPage from './components/HostelList';
import Logout from './components/Logout';
import { AuthProvider } from './AuthProvider';
import Applications from './components/ApplicationStu';
import HostelDetails from './components/HostelDetails';
import api from './api';
import { useEffect } from 'react';
import HostelForm from './components/CreateHostel';
import StaffHostel from './components/StaffHostel';
import StaffApplications from './components/ApplicationStaff';
import PaymentsStaff from './components/PaymentsStaff';
import PaymentsStudent from './components/PaymentsStudent';
import RoomHostel from './components/RoomHostel';
import AboutUs from './components/AboutUs';

function App() {

  useEffect(() => {
    const fetchUserMode = async () => {
      try {
        const response = await api.get("/user/getUserMode");
        localStorage.setItem("userRole", response.data);
      } catch (error) {
        console.error("Error fetching user mode:", error);
      }
    };

    fetchUserMode();

  }, []);
  

  return (
    <>
      <Router>
        <AuthProvider>

          <Header></Header>

          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path='/' element={<Content></Content>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup></Signup>}></Route>
              <Route path='/hostels' element={<HostelsPage></HostelsPage>}></Route>
              <Route path='/about' element={<AboutUs></AboutUs>}></Route>
              <Route path='/logout' element={<Logout></Logout>}></Route>
              <Route path="/hostelDetails/:hostelId" element={<HostelDetails />} />
              <Route path='/applications' element={<Applications />}></Route>
              <Route path='/create' element={<HostelForm />}></Route>
              <Route path='/staffHostel' element={<StaffHostel />}></Route>
              <Route path='/staffApplication' element={<StaffApplications />}></Route>
              <Route path='/staffPayments' element={<PaymentsStaff />}></Route>
              <Route path='/studentPayments' element={<PaymentsStudent />}></Route>
              <Route path='/room' element={<RoomHostel />}></Route>

            </Routes>
            <Footer></Footer>
          </div>
        </AuthProvider>

      </Router>
    </>
  )
}

export default App
