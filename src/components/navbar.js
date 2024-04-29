import React, { useState } from "react";
import { Link } from "react-router-dom"; 

function Navbar({ toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCourseClick = (course) => {
    if (selectedCourse === course) {
      setSelectedCourse(null);
      setIsOpen(false);
      setShowComingSoon(false);
    } else {
      setSelectedCourse(course);
      setIsOpen(true);
      setShowComingSoon(true);
    }
  };

  return (
    <div>
      <div className="burger-icon" onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="options-menu megamenu">
          <ul>
            <li className="course-item" onClick={() => handleCourseClick("basic")} className={selectedCourse === "basic" ? "selected" : ""}>
              <div className="course-details">
                <h3 className="course-name">קורס בסיס</h3>
                {selectedCourse === "basic" && (
                  <div className="course-lessons">
                    <ul>
                      <li><Link to="/basic01">משקלים והוצאת מכה</Link></li>
                      <li><Link to="/basic02">עמידת איגרוף</Link></li>
                      <li><Link to="/basic03">תזוזה נכונה</Link></li>
                      <li><Link to="/basic04">תזוזה יחד עם מכות</Link></li>
                      <li><Link to="/basic05">הדגמות</Link></li>
                      <li><Link to="/basic06">דגש על מכה ישרה</Link></li>
                      <li><Link to="/basic07">הגנה בהליכה אחורה</Link></li>
                      <li><Link to="/basic08">הגנה ממכות גוף</Link></li>
                      <li><Link to="/basic09">מכות ישרות לגוף</Link></li>
                      <li><Link to="/basic10">הגנה ממכות ישרות לגוף</Link></li>
                      <li><Link to="/basic11">אפרקאט לגוף</Link></li>
                      <li><Link to="/basic12">צ׳רנוק טיים</Link></li>
                      <li><Link to="/basic13">התחמקות עם צלילה</Link></li>
                      <li><Link to="/basic14">הגנות יד</Link></li>
                      <li><Link to="/basic15">מכת הוק</Link></li>
                      <li><Link to="/basic16">הגנה מהוק</Link></li>
                      <li><Link to="/basic17">סייד סטפ</Link></li>
                      <li><Link to="/basic18">אפרקאט</Link></li>
                      <li><Link to="/basic19">סיגרת טווח מכה</Link></li>
                      <li><Link to="/basic20">חימום</Link></li>
                      <li><Link to="/basic21">סיכום</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="course-item" onClick={() => handleCourseClick("beginners")} className={selectedCourse === "beginners" ? "selected" : ""}>
              <h3 className="course-name">קורס מתחילים</h3>
              {showComingSoon && selectedCourse === "beginners" && (
                <p>בקרוב</p>
              )}
            </li>
            <li className="course-item" onClick={() => handleCourseClick("advanced")} className={selectedCourse === "advanced" ? "selected" : ""}>
              <h3 className="course-name">קורס מתקדמים</h3>
              {showComingSoon && selectedCourse === "advanced" && (
                <p>בקרוב</p>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
