import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";
function App() {
  const [theme] = useTheme();
  // const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#5c842d";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <NoteState>
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
              </Routes>
              <Routes>
                <Route exact path="/login" element={<Login />}></Route>
              </Routes>
              <Routes>
                <Route exact path="/signup" element={<Signup />}></Route>
              </Routes>
            </div>
          </Router>
        </NoteState>
      </div>
    </>
  );
}

export default App;
