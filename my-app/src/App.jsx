// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import AboutMe from "./AboutMe";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<AboutMe />} />
//     </Routes>
//   );
// }


import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import AboutMe from "./AboutMe";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}
