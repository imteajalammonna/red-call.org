import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='tiro-bangla'>
      <ToastContainer />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
