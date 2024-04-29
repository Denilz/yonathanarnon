import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link // Import Link from react-router-dom
} from "react-router-dom";
import Navbar from "./components/navbar"; // Import Navbar component
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";
import Test from "./components/Test"; // Import Test component
import Basic01 from "./components/basiccourse/Basic01";
import Basic02 from "./components/basiccourse/basic02";
import Basic03 from "./components/basiccourse/basic03";
import Basic04 from "./components/basiccourse/basic04";
import Basic05 from "./components/basiccourse/basic05";
import Basic06 from "./components/basiccourse/basic06";
import Basic07 from "./components/basiccourse/basic07";
import Basic08 from "./components/basiccourse/basic08";
import Basic09 from "./components/basiccourse/basic09";
import Basic10 from "./components/basiccourse/basic10";
import Basic11 from "./components/basiccourse/basic11";
import Basic12 from "./components/basiccourse/basic12";
import Basic13 from "./components/basiccourse/basic13";
import Basic14 from "./components/basiccourse/basic14";
import Basic15 from "./components/basiccourse/basic15";
import Basic16 from "./components/basiccourse/basic16";
import Basic17 from "./components/basiccourse/basic17";
import Basic18 from "./components/basiccourse/basic18";
import Basic19 from "./components/basiccourse/basic19";
import Basic20 from "./components/basiccourse/basic20";
import Basic21 from "./components/basiccourse/basic21";


// Import your background image
import yonathanbg from "./images/yonathanbg.jpg";
import greenImage from "./images/green.png"; // Import logo

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${yonathanbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter: "contrast(120%)",
          // minHeight: "100vh",
        }}
      >

        <Navbar /> 
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/basic01" element={<Basic01 />} />
              <Route path="/basic02" element={<Basic02 />} />
              <Route path="/basic03" element={<Basic03 />} />
              <Route path="/basic04" element={<Basic04 />} />
              <Route path="/basic05" element={<Basic05 />} />
              <Route path="/basic06" element={<Basic06 />} />
              <Route path="/basic07" element={<Basic07 />} />
              <Route path="/basic08" element={<Basic08 />} />
              <Route path="/basic09" element={<Basic09 />} />
              <Route path="/basic10" element={<Basic10 />} />
              <Route path="/basic11" element={<Basic11 />} />
              <Route path="/basic12" element={<Basic12 />} />
              <Route path="/basic13" element={<Basic13 />} />
              <Route path="/basic14" element={<Basic14 />} />
              <Route path="/basic15" element={<Basic15 />} />
              <Route path="/basic16" element={<Basic16 />} />
              <Route path="/basic17" element={<Basic17 />} />
              <Route path="/basic18" element={<Basic18 />} />
              <Route path="/basic19" element={<Basic19 />} />
              <Route path="/basic20" element={<Basic20 />} />
              <Route path="/basic21" element={<Basic21 />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
