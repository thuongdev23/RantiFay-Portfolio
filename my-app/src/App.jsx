import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CreativeDesin from "./CreativeDesign";
import Illustration from "./Illustration";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";


export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/creative" element={<CreativeDesin />} />
        <Route path="/illustration" element={<Illustration/>} />
        <Route path="/logo" element={<Logo/>} />


      </Routes>
    </AnimatePresence>
  );
}
