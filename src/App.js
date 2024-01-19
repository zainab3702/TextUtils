import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');// Whether DarkMode is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enable !", "success");
    showAlert("Dark Mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode'; 
   }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white ';
    showAlert("Light mode has been enabled ! ", "success");
    showAlert("Dark Mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
  }
}

  return(
    <>
    {/* <Router> */}
    <NavBar title="Text Format" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}>
            <About />
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Routes> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>

  );
}

export default App;
