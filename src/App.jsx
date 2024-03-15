import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
