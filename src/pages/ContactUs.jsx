
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

function ContactUs() {
  return (
    <div className="container">
      {/* Judul */}
      <h1 className="font-bold text-left mb-4">Contact Us</h1>

      {/* Konten Utama */}
      <div className="d-flex mb-5 gap-5">
        {/* Kolom Kiri */}
        <div className="w-50" style={{ 
          textAlign:"justify"
         }}>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur iste? Nobis quasi repellat in illo pariatur voluptas odio amet veniam quia, veritatis libero necessitatibus eos ipsum ut animi. Dolores in iure recusandae velit qui consequuntur voluptates at atque quia ipsa. Ipsa est repellendus ab obcaecati, labore minus necessitatibus sit a alias distinctio consectetur deserunt, voluptates molestias maiores consequatur vel beatae reiciendis blanditiis. Voluptatem autem iste, perspiciatis numquam, similique esse natus assumenda quos sit sapiente asperiores neque? Iusto mollitia beatae facilis dolor, aliquam tenetur officia molestias temporibus rem culpa voluptas expedita quae ad. Esse, harum accusantium omnis nesciunt neque possimus.
          </p>
          <div className="d-flex gap-5 justify-content-around">
            {/* Ikon Sosial Media */}
            <a href="mailto:example@example.com" className="text-gray-500 hover:text-blue-500">
              <Mail size={80} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
              <Instagram size={80} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
              <Twitter size={80} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
              <Linkedin size={80} />
            </a>
          </div>
        </div>

        {/* Kolom Kanan */}
        
        <div className="w-50 text-center">
          <img
            src="http://www.pngmart.com/files/5/World-PNG-Photos.png"
            alt="Contact Illustration"
            style={{ 
              width:"auto",
              height:"300px",
             }}
          />
        </div>
      </div>

      {/* Map dan Alamat */}
      <div className="d-flex gap-5">
        {/* Map */}
        <div className="w-50 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093745!2d-122.41941518468198!3d37.77492957975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df93d5f1%3A0xc68f6b2c92f5b428!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1680543059259!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>

        {/* Alamat */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Our Address</h2>
          <p>123 Main Street</p>
          <p>San Francisco, CA 94105</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
