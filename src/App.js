
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");   //idhar primary ko kyu remove nahi kiya vo nahi samaj raha 
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    
    console.log(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#780303";
      showAlert("Dark mode has been enabled", "success");


    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const toggleMode2 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#024510";
  //     showAlert("Dark mode has been enabled", "success");

  //   }
  //   else {
  //     setMode("light")
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  // const toggleMode3 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "blue";
  //     showAlert("Dark mode has been enabled", "success");

  //   }
  //   else {
  //     setMode("light")
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  // const toggleMode4 = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled", "success");
  //     document.title = "TextUtils -Dark Mode"

  //   }
  //   else {
  //     setMode("light")
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     // document.title = "TextUtils - Home"
  //   }
  // }
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  // setInterval(() => {
  // document.title = "TextUtils is Amazing";

  // }, 2000);
  // setInterval(() => {
  //   document.title = "Download Now";

  //   }, 1500);
  <Alert />


  return (
    <>
      <Router>
        <Navbar about="About Us" title="TextUtils2" mode={mode} theme={toggleMode} /*theme2={toggleMode2} theme3={toggleMode3}theme4={toggleMode4}**/ />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode = {mode}/>}>
              {/* Route ke aandar hamesha exact use karo jisse ki react exact spelling match kar sage agr exact nahi likhenge tho react partially match karenga */}
            </Route>
            <Route exact path="/" element = {<TextForm title=" Try TextUtils -Word Counter, Character counter, remove extra spaces" showAlert={showAlert} mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>

      {/* Git hub pe host karne ke time router chalta nahi hai so router ko hata ke hi host karna honga hume */}
      {/* github pages routing ko support nahi karti thi */}

    </>
  );
}

export default App;


