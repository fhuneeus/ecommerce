import '../App.css';
import logo from "../images/logo.svg"
import briefcase from "../images/briefcase.svg"
import search from "../images/search.svg"
import more from "../images/more.svg"

function App() {
  return (
    <div className="navbar-mobile">
      <img src={logo} alt="Logo" id="logo"></img>
      <img src={briefcase} alt="Briefcase" id="briefcase"></img>
      <img src={search} alt="Search" id="search"></img>
      <img src={more} alt="More" id="more"></img>
    </div>
  );
}

export default App;
