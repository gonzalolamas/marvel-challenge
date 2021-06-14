import React from "react";
import '../assets/css/App.css';
import Search from '../components/Search/Search';
import Footer from '../components/Footer/Footer';

const Hero = () => {
    return(
        <div className="App">
          <div className="nav-bar">
            <Search />
            <Footer />
          </div>
        </div>
    );
}

export default Hero;