import '../App.css';
import category1img from "../images/category-1-img.png"
import category2img from "../images/category-2-img.png"


function App() {
  return (
    <div>
    <div className="card2">
      <h3>Lo último</h3>
      <a className="firstCategoryClickable" href="index.html">
      {/* <p className="firstCategoryText">Mirar</p> */}
      <img src={category1img} className="category-img" alt="Category image 1"/>
      </a>
    </div>

  <div className="card3">
    <a className="firstCategoryClickable" href="index.html">
      {/* <p className="secondCategoryText">Chequear</p> */}
      <img src={category2img} className="category-img-2" alt="Category image 2"/>
    </a>
  </div>
</div>
    
  );
}

export default App;
