import React from "react";
import "./BasicLesson.css"; // Import CSS for styling
import Navbar from "../navbar"; // Adjust the path based on the actual location of the Navbar component

function Basic01() {
  return (
    <div>
      <Navbar />
      <div className="basic-lesson-container">
        <header className="lesson-header">
          <h1>!שיעור ראשון</h1>
        </header>
        <div className="lesson-content">
          <div className="video-container">
            {/* Video Player */}
            <iframe
              width="560"
              height="315"
              src="https://storage.googleapis.com/yonathanarnon/coursevideos/bodystraightdef.mp4"
              title="Lesson Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controlsList="nodownload"
            ></iframe>
          </div>
          {/* Text */}
          <p className="text-content"><b> {/* Added className */}
            ברוכים הבאים לקורס איגרוף בסיס
            </b><br />
            הפרק הזה הוא הראשון מסדרת פרקים המסבירים טכניקת בסיס של איגרוף קלאסי, בפרק הזה התמקדתי בעיקר בנושאים הבאים
            <p className="text-content" style={{ color: '#D52941' }}>
            <br />

              העברת משקלים נכונה -
              <br />
              הוצאת מכה בצורה נכונה -
            </p>
            אני מקווה שאתם נהנים ואם יש לכם הערות חשובות על הפרק אתם מוזמנים ליצור קשר
            <br />
            כל הזכויות שמורות יהונתן ארנון
          </p>
          {/* Button */}
          <button className="lesson-button">!הבנתי, בוא נמשיך</button>
        </div>
      </div>
    </div>
  );
}

export default Basic01;