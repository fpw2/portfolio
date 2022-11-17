import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "./Container";
import Header from "./header";
import Home from "./home";
// import About from "./about";
import Skills from "./skills";
import Work from "./work";
import Contact from "./contact";
import Error from "./error/Error";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
      <Container>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />}></Route>
            {/* <Route path="/about" element={<About />}></Route> */}
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AnimatePresence>
      </Container>
  );
}


