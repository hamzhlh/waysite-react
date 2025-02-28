import '../dist/css/modal.css'
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

function ModalComponent({ show, handleClose, photoDetail }) {
  const { title, image, description } = photoDetail;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" ,
        borderRadius: 0
      }} // Modal transparan putih
    >
      <Modal.Header
        style={{
          position: "relative", // Posisi relatif untuk parent
          display: "flex",
          justifyContent: "center",
          padding:"20px 30px 0px 30px",
          borderBottom: "none", // Hilangkan border bawaan
          borderRadius: 0
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", // Absolut di atas header
            top: "-10px",
            right: "-10px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            fontSize: "1rem",
            color: "#333",
          }}
        >
          &times; {/* Close icon */}
        </button>

        <div
          style={{
            backgroundColor: "#1e3a8a", // Biru tua untuk header
            borderRadius: "10px", // Membuat sudut atas melengkung
            color: "white",
            textAlign: "center",
            width: "100%",
            padding: "8px"
          }}
        >
          <h5 style={{ 
            marginTop: ".5rem"
           }}>{title}</h5>
        </div>
      </Modal.Header>
      <Modal.Body
        style={{
          padding: "20px", // Hilangkan padding default
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e3a8a", // Biru tua untuk body
            borderRadius: "10px",
            // margin: "20px 0px",
            padding: "20px",
            color: "white",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "10px",
              objectFit: "cover",
            }}
          />
          <p>{description}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

// Define PropTypes
ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  photoDetail: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

// Default props for 'photoDetail' if none is provided
ModalComponent.defaultProps = {
  photoDetail: {
    title: "Untitled",
    image: "",
    description: "No description available.",
  },
};

export default ModalComponent;
