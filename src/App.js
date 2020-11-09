import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Testimonies from './Components/Testimonies/Testimonies';

function App() {
  return (
    <div className="App">
      <Header />
      <Testimonies />
      <Footer />
    </div>
  );
}

export default App;
