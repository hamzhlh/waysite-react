import "../dist/css/detail.css"; // Pastikan Anda membuat file CSS untuk styling
function CyberSolutionPage() {
  return (
    <div className="details-container">
      <h1 className="details-title">CYBERSECURITY SOLUTION</h1>
      <img
        src="http://thestatetimes.com/wp-content/uploads/2018/02/infotech.jpg" // Ganti dengan URL gambar yang sesuai
        alt="Telecommunication Solution"
        className="details-image"
      />
      <p className="details-description">
        Telecommunication Solution Consulting focuses on helping businesses optimize 
        their communication infrastructure and integrate cutting-edge technologies 
        to enhance connectivity and efficiency. Our team provides tailored solutions 
        for network design, implementation, and management, ensuring seamless and 
        secure operations for your business needs.
      </p>
    </div>
  );
}

export default CyberSolutionPage;
