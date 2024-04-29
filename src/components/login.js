import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate from react-router-dom
import { auth } from "./firebase"; // Importing auth from firebase

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initializing useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password); // Using auth.signInWithEmailAndPassword instead of signInWithEmailAndPassword
      console.log("User logged in Successfully");
      // Use navigate to navigate to the profile page
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
      // Handling error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <h4 className="h1-login">ברוכים הבאים למערכת הקורסים של המתאגרף - יהונתן ארנון</h4>

      <div className="mb-3">
        <label>כתובת אימייל</label>
        <input
          type="email"
          className="form-control"
          placeholder="הכנס אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>סיסמא</label>
        <input
          type="password"
          className="form-control"
          placeholder="הכנס סיסמא"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          היכנס לקורס
        </button>
      </div>
      <p className="forgot-password text-right">
        עוד לא נרשמת? <Link to="/register">הרשם כאן</Link>
      </p>
    </form>
  );
}

export default Login;
