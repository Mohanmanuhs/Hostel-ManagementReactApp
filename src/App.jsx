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



function App() {

  return (
    <>
      <Router>
        <Header></Header>

        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}

export default App
