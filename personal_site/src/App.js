import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Work from './pages/work/workPage';
import Home from './pages/home/homePage';
import Footer from './components/footer/footer';
import Work2 from './pages/work/workPage2';
import Work3 from './pages/work/workPage3';

function App() {
  return (
  <>
    <Navbar/>
    <div className="container">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work1" element={<Work/>} />
        <Route path="/work2" element={<Work2/>} />
        <Route path="/work3" element={<Work3/>} />
      </Routes>
    </div>
    <Footer/>
  </>
  );
}

export default App;
