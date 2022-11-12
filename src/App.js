import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AppSection from "./components/AppSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import HowItWorks from "./routes/HowItWorks";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/howitworks" element={<HowItWorks />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
