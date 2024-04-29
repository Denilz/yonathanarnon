import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/navbar"; 
import { Link } from "react-router-dom"; 

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      <Navbar />
      {userDetails ? (
        <>
          <h3 className="main-heading" style={{ color: "white", textAlign: "right" }}>
            !{userDetails.firstName} טוב לראות אותך
          </h3>
          <div style={{ color: "white", textAlign: "right" }}>
            <p style={{ color: "#D52941" }}>{userDetails.firstName} {userDetails.lastName} :שם מלא</p>
            <p style={{ color: "#D52941" }}>{userDetails.email} :אימייל</p>
            <p style={{ color: "#FCFCFC" }}>זה עמוד הפרופיל שלך, כאן ניתן להיכנס לקורסים שרכשת ולרכוש קורסים נוספים</p>
          </div>
          <h3 className="main-heading" style={{ color: "white", textAlign: "right" }}>:קורסים זמינים</h3>
          <div className="boxes-container">
            <div className="box">
              <h1>בסיס</h1>
              <p className="course-description1">בקורס זה נלמד את יסודות הבסיס של האיגרוף הקלאסי, נשלב טכניקת תזוזה נכונה יחד עם הוצאת מכות והגנה בצורה נכונה</p>
              {userDetails && userDetails.enabledbasic ? (
                <Link to="/basic01">
                  <button className="btn btn-secondary" style={{ backgroundColor: "#070707" }}>
                    כניסה
                  </button>
                </Link>
              ) : (
                <button className="btn btn-secondary" style={{ backgroundColor: "black" }} disabled>
                  כניסה
                </button>
              )}
            </div>
            <div className="box">
              <h1 className="main-heading" style={{ color: "#070707", textAlign: "right" }}>מתחילים</h1>
              <p className="course-description2">בקרוב</p>
              <button className="btn btn-secondary" disabled>
                רכישה
              </button>
            </div>
            <div className="box">
              <h1 className="main-heading" style={{ color: "#070707", textAlign: "right" }}>מתקדמים</h1>
              <p className="course-description3">בקרוב</p>
              <button className="btn btn-secondary" disabled>
                רכישה
              </button>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleLogout} style={{ marginTop: "20px" }}>
            יציאה
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
