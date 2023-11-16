import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import 'react-circular-progressbar/dist/styles.css';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Theme from './components/Themes/Theme';
import Animation from './components/Animation/Animation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Theme />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/portfolio' element={<PortfolioPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
