// Import each page to declare routes
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
  {/* Place nav at top of page */}
    <Navbar/>
    <div className="container">
      {/* Routes for site */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work1" element={<Work/>} />
        <Route path="/work2" element={<Work2/>} />
        <Route path="/work3" element={<Work3/>} />
      </Routes>
    </div>
    {/* Footer at bottom of page */}
    <Footer/>
  </>
  );
}

export default App;
