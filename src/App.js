// in app.js we call all those components or realated codes which are required for calling all those components we use Import:


import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './compnents/Navbar';
import TextNote from './compnents/TextNote';
import About from './compnents/About';
import Alert from './compnents/Alert';


// For importhing the Browser router the name for the seitch is chang in to (Routes) and also we can not define the switch we have to define the (routes)
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";



function App() {

const [mode,setMode] = useState('light');
const [alert,setalert] = useState(null);
const hometxt = "Home";


  // We made the funtion and object for the alert:

  const showAlert =(message,type) =>{
    setalert({
      msg: message,
      typ : type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }

  // This is the function that will be called when the user clicks dark mode buttons it will change the white color to black:
// when using the setMode in function it we have will not to use the  '=' and also we have to use () too:

  const toggleModes = () =>{

if (mode === 'light') {
  setMode( 'dark');
  document.body.style.backgroundColor = "#2b2f32";
  document.body.style.color='#ffffff';
  showAlert("Dark Mode is enabled","success");
  document.title = 'Text generator - Dark Mode';
  setTimeout(() => {
    document.title = 'Install Text Generator';
  }, 1500);
  setTimeout(() => {
    document.title = 'Text generator - Dark Mode';
  }, 1500);
} else{
  setMode('light');
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color = 'black';
  showAlert("!Light Mode is enabled it may harm Eyes","danger");
  document.title = 'Text generator - Light Mode';
  setTimeout(() => {
    document.title = 'Text generator - Light Mode';
  }, 3000);
}

}

  return (
    <>

  <Router>

   <Navbar hometxt={hometxt} title="DevJumkers" mode={mode} toggleModes={toggleModes}/>
   <Alert Alert={alert}/>
   {/* hometxt="Home" */}
   {/* <Navbar /> */}

    <div className="container">

      {/* The main use of (exact) that it has to mach the exact commponent we click than it has to load  */}
          <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextNote showAlert={showAlert} heading="Enter the text for analysis" mode={mode} />} />
        </Routes>
          
 
    </div>


    </Router>
    </>


  );
}

export default App;
