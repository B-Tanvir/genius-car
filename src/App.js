import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
          <Route path={'/service'}>
              <Route path={':serviceId'} element={<ServiceDetails/>}/>
          </Route>
          <Route path={'*'} element={<ErrorPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
