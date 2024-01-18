import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './pages/User/Home/componants/NavBar';
import { Footer } from "./pages/User/Home/componants/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
