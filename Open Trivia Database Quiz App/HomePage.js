import React, { useState } from "react";

const HomePage = ({ onStartQuiz }) => {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !category || !difficulty) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      onStartQuiz({ firstName, category, difficulty });
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Quiz App!</h1>
      <p>Enter your details to get started:</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Select a Category--</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="18">Science: Computers</option>
          </select>
        </div>

        <div>
          <label>Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">--Select Difficulty--</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button type="submit">Start Quiz</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default HomePage;
