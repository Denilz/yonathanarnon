import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import "../App.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
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
        עוד לא נרשמת? <a href="/register">הרשם כאן</a>
      </p>
    </form>
  );
}

export default Login;