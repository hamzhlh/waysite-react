
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
        <Route path="/waysite-react.github.io/home" Component={HomePage}/>
        <Route path="/waysite-react.github.io/about" Component={AboutUsPage}/>
        <Route path="/waysite-react.github.io/product" Component={ProdServPage}/>
        <Route path="/waysite-react.github.io/portofolio" Component={PortofolioPage}/>
        <Route path="/waysite-react.github.io/blog" Component={BlogPage}/>
        <Route path="/waysite-react.github.io/contact" Component={ContactUs}/>
      </Routes>
    </div>
  )
}

export default App
