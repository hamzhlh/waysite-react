
import '../dist/css/about.css'
import {useState} from 'react';
import ModalComponent from '../components/ModalComponent';
function AboutUsPage() {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const photos = [
    {
      id: 1,
      image: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "John Doe",
      description: "John Doe is a software engineer with 5 years of experience in web development.",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Jane Smith",
      description: "Jane Smith is a graphic designer specializing in UI/UX design.",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Alice Brown",
      description: "Alice Brown is a project manager who ensures everything runs smoothly.",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Charlie Green",
      description: "Charlie Green is a marketing specialist focused on brand growth.",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
      title: "Emily White",
      description: "Emily White is a data analyst with a passion for uncovering insights.",
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
  )
}

export default AboutUsPage
