import "../dist/css/about.css";
import { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import WayLogo from "../assets/img/WAY Logo no BG hi res-trans-01.png";
function AboutUsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const photos = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "John Doe",
      description:
        "John Doe is a software engineer with 5 years of experience in web development.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Jane Smith",
      description:
        "Jane Smith is a graphic designer specializing in UI/UX design.",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Alice Brown",
      description:
        "Alice Brown is a project manager who ensures everything runs smoothly.",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Charlie Green",
      description:
        "Charlie Green is a marketing specialist focused on brand growth.",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Emily White",
      description:
        "Emily White is a data analyst with a passion for uncovering insights.",
    },
  ];

  const handleShowModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="about-us-container">
      <div
        className="d-flex"
        style={{
          marginBottom: "120px",
          gap: "32px"
        }}
      >
        <div className="w-25 h-auto about-logo">
          <h1 className="pb-2">ABOUT US</h1>
          <img src={WayLogo}></img>
        </div>
        <div className="w-75 h-auto" style={{ 
            textIndent:"32px",
            textAlign: "justify",
            alignContent: "center"
           }}>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            esse similique tenetur non voluptatem alias dolorem nostrum
            reprehenderit praesentium? Perferendis eveniet, ullam quo amet ad
            assumenda distinctio eligendi! Officiis cupiditate, maiores pariatur
            libero eaque natus eveniet nostrum atque ut iusto perferendis amet
            explicabo commodi delectus saepe, culpa, laboriosam quo esse quia
            repellat. Cupiditate id aliquam quam iure, suscipit ipsam est
            necessitatibus laboriosam voluptatem maxime deleniti numquam soluta
            enim debitis, quo deserunt asperiores quas commodi. Repellendus id,
            error vel quod quisquam, mollitia earum illum distinctio quibusdam
            eaque veniam fuga ratione, cum voluptates iusto sint sunt repellat
            debitis harum? Perspiciatis, culpa necessitatibus? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. 
          </p>
          <p>Impedit illum distinctio,
            consectetur ducimus, ut saepe repellendus ipsum quis quas,
            cupiditate quod reiciendis dolorum vitae! Blanditiis ex ipsam quae
            perspiciatis fugiat delectus tenetur fugit excepturi in culpa
            corrupti, repellendus temporibus numquam, sit adipisci iure
            officiis, pariatur accusantium quos laborum repellat perferendis cum
            consequuntur. Cupiditate reprehenderit voluptate quos nemo inventore
            aliquid non animi facilis unde minima, ut quidem, accusamus id
            incidunt natus fugit quisquam cumque placeat nisi. Quidem iste ab
            non autem laboriosam, officia quae consectetur odit iure quos
            molestiae minima quisquam a consequuntur vel commodi? At, culpa.
            Necessitatibus error quis nihil.</p>
        </div>
      </div>
      <h1 className="about-us-title">MEET THE TEAM</h1>
      <div className="photo-grid">
        {photos.slice(0, 3).map((photo) => (
          <div
            className="photo-container"
            key={photo.id}
            onClick={() => handleShowModal(photo)}
          >
            <img src={photo.image} alt={photo.title} className="photo" />
            <div className="photo-name">{photo.title}</div>
          </div>
        ))}
      </div>
      <div className="photo-grid-2">
        {photos.slice(3).map((photo) => (
          <div
            className="photo-container"
            key={photo.id}
            onClick={() => handleShowModal(photo)}
          >
            <img src={photo.image} alt={photo.title} className="photo" />
            <div className="photo-name">{photo.title}</div>
          </div>
        ))}
      </div>
      <ModalComponent
        show={showModal}
        handleClose={handleCloseModal}
        photoDetail={selectedPhoto}
      />
    </div>
  );
}

export default AboutUsPage;
