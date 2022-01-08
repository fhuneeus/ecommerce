import logo from './logo.svg';
import './App.css';
import Navbarmobile from './Components/Navbarmobile';
import Informativemobile from "./Components/Informativemobile";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App navbar-mobile">
      <Navbarmobile/>
      <Informativemobile/>
      <Card1/>
      <Card2/>
      <Footer/>
    </div>
  );
}

export default App;
