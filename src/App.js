
import './App.css';
import Navbar from './components/navbar';
import Icons from './components/icons';
import Hero from './components/hero';
import SectionOne from './components/section1';
import SectionTwo from './components/section2';
import SectionThree from './components/section3';
import SectionFour from './components/section4';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Icons/>
      <Navbar/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
  );
}

export default App;
