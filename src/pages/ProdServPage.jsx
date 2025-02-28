
import { useNavigate } from "react-router-dom";
import "../dist/css/prodserv.css";

function ProdServPage() {
  const navigate = useNavigate();

  return (
    <div className="prod-serv-container">
      <h1 className="prod-serv-title">SERVICE WE PROVIDE</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque
        saepe maiores dicta impedit incidunt consequatur temporibus dolorum est
        eos.
      </p>
      <div className="prod-serv-grid">
        <div className="service-box">
          <h3>IT SOLUTION CONSULTING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="learn-more-btn"
            onClick={() => navigate("/waysite-react.github.io/service/itsolution")}
          >
            Learn More
          </button>
        </div>

        <div className="service-box">
          <h3>TELECOMMUNICATION SOLUTION CONSULTING</h3>
          <p>Nulla facilisi. Integer convallis dolor sed sapien scelerisque facilisis.</p>
          <button
            className="learn-more-btn"
            onClick={() =>
              navigate("/waysite-react.github.io/service/telecomsolution")
            }
          >
            Learn More
          </button>
        </div>

        <div className="service-box">
          <h3>CYBERSECURITY SOLUTION</h3>
          <p>Suspendisse vel nisi nec purus dictum tincidunt a a nisl.</p>
          <button
            className="learn-more-btn"
            onClick={() =>
              navigate("/waysite-react.github.io/service/cybersecurity")
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdServPage;
