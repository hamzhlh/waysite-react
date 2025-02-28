
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import BlogPage from "./pages/BlogPage"
import PortofolioPage from "./pages/PortofolioPage"
import ProdServPage from "./pages/ProdServPage"
import ContactUs from "./pages/ContactUs"
import NavbarComponent from "./components/NavbarComponent"
function App() {

  return (
    <div className="app-background">
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/about" Component={AboutUsPage}/>
        <Route path="/product" Component={ProdServPage}/>
        <Route path="/portofolio" Component={PortofolioPage}/>
        <Route path="/blog" Component={BlogPage}/>
        <Route path="/contact" Component={ContactUs}/>
      </Routes>
    </div>
  )
}

export default App
