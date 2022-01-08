import '../App.css';
import image1 from "../images/image-1-mobile.png"

function App() {
  return (
    <div className="card1">
      <h3>Nueva colección</h3>
      {/* <h3 className="image1-first-line">Descubre nuestra</h3>
      <h3 className="image1-second-line">Nueva colección</h3> */}
      <img src={image1} className="body-img-1" alt="Image 1"/>
    </div>
  );
}

export default App;
