import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import HowItWorks from "./routes/HowItWorks";
import Contact from "./routes/Contact";
import Privacy from "./routes/Privacy";
import Footer from "./components/Footer";
import Error from "./routes/Error";
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
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
