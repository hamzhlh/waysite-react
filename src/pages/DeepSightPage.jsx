import "../dist/css/deepsight.css";
import DeepsightLogo from '../assets/img/Deepsight Logo.png';

function DeepSightPage() {
  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">DEEP SIGHT</h1>

      {/* Product Section */}
      <div className="product-section">
        {/* Left Column */}
        <div className="product-column">
          <div className="product-item">
            <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Product 1" />
            <p style={{ 
                marginTop: "8px"
             }}>
            This is the story description for DeepSight products. Highlighting the journey and impact of the innovations.
          </p>
          </div>
          <div className="sub-product-item">
            <div className="product-item">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Product 2" />
            </div>
            <div className="product-item">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Product 3" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="product-column">
          <div className="product-item-1">
            <img src={DeepsightLogo} alt="Product 4" />
          </div>
          <div className="sub-product-item">

            <div className="product-item">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Product 5" />
            </div>
            <div className="product-item">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="Product 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeepSightPage;
