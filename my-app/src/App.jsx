import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CreativeDesin from "./CreativeDesign";
import Illustration from "./Illustration";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import AcademicProject from "./AcademicProject";
import Uluonder from "./Uluonder";
import StudentHouse from "./StudentHouse";
import Book from "./Book";
import Competition from "./Competition";
import BuiltDesign from "./BuiltDesign";
import BuiltDesignInter from "./BuiltDesignInter";
import Branding from "./Branding";


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
        <Route path="/book" element={<Book/>} /> 
        <Route path="/academic" element={<AcademicProject/>} />
        <Route path="/uluonder" element={<Uluonder/>} />
        <Route path="/student-house" element={<StudentHouse/>} />
        <Route path="/competition" element={<Competition/>} />
        <Route path="/built-design" element={<BuiltDesign/>} />
        <Route path="/built-design-inter" element={<BuiltDesignInter/>} />
        <Route path="/branding" element={<Branding/>} /> 


      </Routes>
    </AnimatePresence>
  );
}
