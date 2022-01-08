import '../App.css';
import instagramicon from "../images/social-media-icons/Instagram.png"
import facebookicon from "../images/social-media-icons/Facebook.png"
import twittericon from "../images/social-media-icons/Twitter.png"
import youtubeicon from "../images/social-media-icons/Youtube.png"
import image1 from "../images/image-1-mobile.png"

function App() {
  return (
    <div className="footer">
      <div className="links">
        <div class="first-footer-link">
      <a href="index.html">Encuentra una tienda</a>
      </div>
      <div className="footer-link">
      <a href="index.html">Subscribete</a>
      </div>
      <div className="footer-link">
      <a href="index.html">Feedback</a>
      </div>
      <div className="footer-link">
      <a href="index.html">Obtén ayuda</a>
      </div>
      <div className="footer-link">
      <a href="index.html">Acerca de</a>
      </div>
    </div>

    <div className="social-media-icons">
      <a href="instagram.html" className="first-social-media">
        <img src={instagramicon} alt="Instagram"/>
      </a>
      <a href="facebook.html">
        <img src={facebookicon} alt="Facebook"/>
      </a>
      <a href="youtube.html">
        <img src={youtubeicon} alt="Youtube"/>
      </a>
      <a href="twitter.html">
        <img src={twittericon} alt="Twitter"/>
      </a>
    </div>

    </div>
  );
}

export default App;
