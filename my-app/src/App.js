
/*;

import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';
*/

import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
/*
function App() {
  return (
<div className="App">
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
        </Router>
      </div>
  );
}
*/

function App(){
  return (
     <Router>
          <Header />
          <Banner />
          <Main />
          <Footer/>
    </Router>
  )

}


export default App;
