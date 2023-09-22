import React, { useState } from "react";

const AgeVerification = ({ onVerificationComplete }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleYearInputChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthInputChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayInputChange = (e) => {
    setDay(e.target.value);
  };

  const handleVerification = () => {
    const currentDate = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);

    if (
      currentDate.getFullYear() - birthDate.getFullYear() > 21 ||
      (currentDate.getFullYear() - birthDate.getFullYear() === 21 &&
        currentDate.getMonth() > birthDate.getMonth()) ||
      (currentDate.getFullYear() - birthDate.getFullYear() === 21 &&
        currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() >= birthDate.getDate())
    ) {
      onVerificationComplete();
    } else {
      alert("You must be at least 21 years old to access this site.");
    }
  };

  return (
    <div className="verification-container">
      <div className="background-image"></div>
      <div className="verification-box">
        <h2>Age Verification</h2>
        <p>Please enter your date of birth to access this site:</p>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={handleYearInputChange}
        />
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={handleMonthInputChange}
        />
        <input
          type="number"
          placeholder="Day"
          value={day}
          onChange={handleDayInputChange}
        />
        <button onClick={handleVerification}>Verify</button>
      </div>
    </div>
  );
};

export default AgeVerification;
