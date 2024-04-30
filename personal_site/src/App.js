import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Work from './pages/work/workPage';
import Home from './pages/home/homePage';

function App() {
  return (
  <>
    <Navbar/>
    <div className="container">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </div>
  </>
  );
}

export default App;
