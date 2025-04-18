import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Header />
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </HashRouter>
);
