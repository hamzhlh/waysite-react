
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import BlogPage from "./pages/BlogPage"
import PortofolioPage from "./pages/PortofolioPage"
import ProdServPage from "./pages/ProdServPage"
import ContactUs from "./pages/ContactUs"
import NavbarComponent from "./components/NavbarComponent"
import ItSolutionPage from "./pages/ItSolutionPage"
import TeleSolutionPage from "./pages/TeleSolutionPage"
import CyberSolutionPage from "./pages/CyberSolutionPage"
import ProductPage from "./pages/ProductPage"
import DeepSightPage from "./pages/DeepSightPage"
import TutellaPage from "./pages/TutellaPage"
function App() {

  return (
    <div className="app-background">
      <NavbarComponent/>
      <Routes>
        <Route path="/waysite-react.github.io/home" Component={HomePage}/>
        <Route path="/waysite-react.github.io/about" Component={AboutUsPage}/>
        <Route path="/waysite-react.github.io/service" Component={ProdServPage}/>
        <Route path="/waysite-react.github.io/product" Component={ProductPage}/>
        <Route path="/waysite-react.github.io/portofolio" Component={PortofolioPage}/>
        <Route path="/waysite-react.github.io/blog" Component={BlogPage}/>
        <Route path="/waysite-react.github.io/contact" Component={ContactUs}/>

        <Route path="/waysite-react.github.io/service/itsolution" Component={ItSolutionPage} />
        <Route path="/waysite-react.github.io/service/telecomsolution" Component={TeleSolutionPage} />
        <Route path="/waysite-react.github.io/service/cybersecurity" Component={CyberSolutionPage} />

        <Route path="/waysite-react.github.io/product/deepsight" Component={DeepSightPage} />
        <Route path="/waysite-react.github.io/product/tutella" Component={TutellaPage} />
      </Routes>
    </div>
  )
}

export default App
