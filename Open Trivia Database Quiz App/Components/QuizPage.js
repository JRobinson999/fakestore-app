import React, { useEffect, useState } from "react";

const QuizPage = ({ userInfo }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const { category, difficulty } = userInfo;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        if (data.response_code === 0) {
          const formattedQuestions = data.results.map((q) => {
            const answers = [...q.incorrect_answers];
            const randomIndex = Math.floor(Math.random() * 4);
            answers.splice(randomIndex, 0, q.correct_answer);
            return {
              question: q.question,
              correctAnswer: q.correct_answer,
              answers,
            };
          });
          setQuestions(formattedQuestions);
        } else {
          setError("No questions found. Try different options.");
        }
      } catch (err) {
        setError("Failed to fetch questions.");
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [category, difficulty]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedAnswer("");
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  if (currentIndex >= questions.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz Complete!</h2>
        <p className="score">
          Score: {score} / {questions.length}
        </p>
        <p>Great job, {userInfo.firstName}!</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h2>Question {currentIndex + 1}</h2>
      <p dangerouslySetInnerHTML={{ __html: currentQ.question }} />
      {currentQ.answers.map((answer, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(answer)}
          disabled={selectedAnswer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
};

export default QuizPage;
