
import DeepsightLogo from '../assets/img/Deepsight Logo.png';
import "../dist/css/portofolio.css";
function PortofolioPage() {
  return (
    <div className="container">
          {/* Title */}
          <h1 className="title-portofolio">OUR PORTOFOLIO</h1>
    
          {/* portofolio Section */}
          <div className="portofolio-section">
            {/* Left Column */}
            <div className="portofolio-column">
              <div className="portofolio-item">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="portofolio 1" />
              </div>
              <div className="sub-portofolio-item">
                <div className="portofolio-item">
                    <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="portofolio 2" />
                </div>
                <div className="portofolio-item">
                    <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="portofolio 3" />
                </div>
              </div>
            </div>
    
            {/* Right Column */}
            <div className="portofolio-column">
              <div className="portofolio-item-1">
                <img src={DeepsightLogo} alt="portofolio 4" />
              </div>
              <div className="sub-portofolio-item">
    
                <div className="portofolio-item">
                    <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="portofolio 5" />
                </div>
                <div className="portofolio-item">
                    <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="portofolio 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PortofolioPage
