import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom"
import Header from "./header/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Error from "./error/Error"
import Footer from "./footer/Footer"

export default function App() {
    return (
      <BrowserRouter>
      <div className="container">
        <Header />
            <Routes>
              <Route path="/" element={<Home />}>
                <Redirect to="/home" />
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
              <Route path="/work" element={<Work />}></Route>
              <Route path="/contact" element={<Contact />}></Route>             
              <Route path="*" element={<Error />}></Route>
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    ) 
}


