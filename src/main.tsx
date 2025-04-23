import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PayItForward from "./pages/PayItForward";
import P3Evolve from "./pages/P3Evolve";
import ScrollToTop from "./components/ScrollTop";
import Headroom from "react-headroom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ScrollToTop />
    <Headroom pin className='z-50'>
      <Header />
    </Headroom>
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pay-it-forward' element={<PayItForward />} />
      <Route path='/p3-evolve' element={<P3Evolve />} />
    </Routes>
    <Footer />
  </HashRouter>
);
