import { useNavigate } from "react-router-dom";
import '../dist/css/product.css'
function ProductPage() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="prod-container">
      <h1 className="prod-title">OUR PRODUCTS</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque
        saepe maiores dicta impedit incidunt consequatur temporibus dolorum est
        eos.
      </p>
      <div className="prod-grid">
        <div className="product-box">
          <h3>DEEP SIGHT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="learn-more-btn"
            onClick={() => navigate("/waysite-react.github.io/product/deepsight")}
          >
            Learn More
          </button>
        </div>

        <div className="product-box">
          <h3>TUTELLA</h3>
          <p>Nulla facilisi. Integer convallis dolor sed sapien scelerisque facilisis.</p>
          <button
            className="learn-more-btn"
            onClick={() =>
              navigate("/waysite-react.github.io/product/tutella")
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage
