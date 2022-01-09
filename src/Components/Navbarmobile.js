import '../App.css';
import logo from "../images/logo.svg"
import briefcase from "../images/briefcase.svg"
import search from "../images/search.svg"
import more from "../images/more.svg"

function App() {
  return (
    
    <>
    
    <div className="navbar-desktop">
      <div className="first-row">
        <a className="padding-10-right">Ayuda |</a>
        <a className="padding-10-right">Unete |</a>
        <a>Login</a>
      </div>

      <div className="second-row">
        <img src={logo} alt="Logo" id="logo-desktop"></img>
        <a className="first-desktop-navbar-a">Nuevos lanzamientos</a>
        <a className="padding-right-25">Poleras</a>
        <a className="padding-right-25">Camisas</a>
        <a className="padding-right-25">Zapatillas</a>
        <a className="padding-right-25">Zapatos</a>

      </div>

    </div>
    
    <div className="navbar-mobile">
        <img src={logo} alt="Logo" id="logo"></img>
        <div className="right-navbar-items">
          <img src={briefcase} alt="Briefcase" id="briefcase"></img>
          <img src={search} alt="Search" id="search"></img>
          <img src={more} alt="More" id="more"></img>
        </div>
      </div></>
  );
}

export default App;
