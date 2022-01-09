import logo from './logo.svg';
import './App.css';
import Navbarmobile from './Components/Navbarmobile';
import Informativemobile from "./Components/Informativemobile";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Footer from "./Components/Footer";
import Section1desktop from "./Components/Section1desktop";
import Section2desktop from "./Components/Section2desktop";

function App() {
  return (
    <div>
      <Navbarmobile/>
      <Informativemobile/>
      <Section1desktop/>
      <Section2desktop/>
      <Card1/>
      <Card2/>
      <Footer/>
    </div>
  );
}

export default App;
