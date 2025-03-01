// import { useNavigate } from "react-router-dom";
import '../dist/css/blog.css'
function BlogPage() {
  // const navigate = useNavigate();

  return (
    <div className="blog-container">
      <h1 className="blog-title">OUR BLOG</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo quos nihil explicabo ad cupiditate, temporibus consequatur dicta sunt pariatur iure repellendus ut velit unde quam fuga eligendi tempore neque consectetur eum fugit accusantium. Quaerat doloribus pariatur laborum dicta sint tempore odit, praesentium cumque vel! Sed tempore eos facere laboriosam?
      </p>
      <div className="blog-grid">
        <div className="blog-box">
        <div className="blog-detail">
          <h4>IT SOLUTION CONSULTING</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <button
            className="learn-more-btn"
            // onClick={() => navigate("/waysite-react.github.io/service/itsolution")}
          >
            Read more
          </button>
        </div>

        <div className="blog-box">
        <div className="blog-detail">
          <h4>TELECOMMUNICATION SOLUTION CONSULTING</h4>
          <p>Nulla facilisi. Integer convallis dolor sed sapien scelerisque facilisis.</p>
        </div>
          <button
            className="learn-more-btn"
            // onClick={() =>
            //   navigate("/waysite-react.github.io/service/telecomsolution")
            // }
          >
            Read more
          </button>
        </div>

        <div className="blog-box">
          <div className="blog-detail">
          <h4>CYBERSECURITY SOLUTION</h4>
          <p>Suspendisse vel nisi nec purus dictum tincidunt a a nisl.</p>
          </div>
          <button
            className="learn-more-btn"
            // onClick={() =>
            //   navigate("/waysite-react.github.io/service/cybersecurity")
            // }
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPage
