
import './App.css';
// import Login from './Components/Login';
import SideContent from './Components/SideContent';
import Signup from './Components/Signup';
import logo from './images/logo.png'


function Handler() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/* <Login brandName="Bridal Fabrics" logo={logo}/> */}
          <Signup brandName="Bridal Fabrics" logo={logo}/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <SideContent/>
        </div>
      </div>
      
      
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Handler/>
    </div>
  );
}

export default App;
