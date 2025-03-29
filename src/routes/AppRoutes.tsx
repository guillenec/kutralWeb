import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import PageError from "../pages/PageError/PageError"
import KutralBurguer from "../pages/KutralBurguer/KutralBurguer"

// type Props = {}

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
          
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kutralBurguer" element={<KutralBurguer />} />
        
        <Route
        path='*' element={<PageError />}
        />
    </Routes>
  
  )
}

export default AppRoutes