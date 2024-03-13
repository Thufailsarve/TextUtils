import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode( 'light' );
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    
    {/* <BrowserRouter>
      <Navbar mode={mode} toggleMode= {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text Below" mode={mode}/>}>
          
            </Route>
          </Routes>
        </div>
    </BrowserRouter> */}
    


    <Navbar mode={mode} toggleMode= {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForms showAlert={showAlert} heading="Enter the text Below" mode={mode}/>
    </div>


    </>
  );
}

export default App;
