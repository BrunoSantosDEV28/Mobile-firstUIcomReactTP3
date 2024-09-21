import React, { useState } from "react";
import "./styles.css";

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { question: "Pergunta 1", options: ["A", "B", "C", "D"], answer: "A" },
    // Adicione mais questões
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-app">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <h2>Sua pontuação: {score}</h2>
      )}
    </div>
  );
};

export default QuizApp;
