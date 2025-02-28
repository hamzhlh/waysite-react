import "../dist/css/tutella.css";
import TutellaLogo from '../assets/img/Tutella Logo.png';

function TutellaPage() {
  return (
    <div>
      <div className="container">
            {/* Title */}
            <h1 className="title">TUTELLA</h1>
      
            {/* tutella Section */}
            <div className="tutella-section">
              {/* Left Column */}
              <div className="tutella-column">
                <div className="tutella-item">
                  <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="tutella 1" />
                  <p style={{ 
                      marginTop: "8px"
                   }}>
                  This is the story description for Tutella tutellas. Highlighting the journey and impact of the innovations.
                </p>
                </div>
                {/* <div className="sub-tutella-item">
                  <div className="tutella-item">
                      <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="tutella 2" />
                  </div>
                  <div className="tutella-item">
                      <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="tutella 3" />
                  </div>
                </div> */}
              </div>
      
              {/* Right Column */}
              <div className="tutella-column">
                <div className="tutella-item-1">
                  <img src={TutellaLogo} alt="tutella 4" />
                </div>
                {/* <div className="sub-tutella-item">
      
                  <div className="tutella-item">
                      <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="tutella 5" />
                  </div>
                  <div className="tutella-item">
                      <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="tutella 6" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="tutella-section-2">
                <div className="tutella-item-2">
                    <img src="https://wallpapercave.com/wp/wp1877444.jpg" alt="tutella 1" />
                </div>
            </div>
          </div>
    </div>
  )
}

export default TutellaPage
