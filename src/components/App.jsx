import { Routes, Route, useLocation } from "react-router-dom";
import { Container } from "./Container";
import Header from "./header";
import Home from "./home";
// import About from "./about";
import Skills from "./skills";
import Works from "./works";
import WorkDetails from "./works/WorkDetails";
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
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/about" element={<About />}></Route> */}
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route
                path="/works/:id/*"
                element={<WorkDetails />}
              ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AnimatePresence>
      </Container>
  );
}


