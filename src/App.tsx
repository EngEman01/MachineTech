import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { questions } from './data/questions';
import { Question } from './components/Question';
import { ProgressBar } from './components/ProgressBar';
import { Results } from './components/Results';
import { QuizState } from './types/quiz';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
    answers: [],
  });

  const currentQuestion = questions[quizState.currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answerIndex;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setTimeout(() => {
      setQuizState((prev) => ({
        ...prev,
        answers: newAnswers,
        score: isCorrect ? prev.score + 1 : prev.score,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showResults: prev.currentQuestionIndex === questions.length - 1,
      }));
    }, 750);
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResults: false,
      answers: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Knowledge Quiz</h1>
          </div>

          {!quizState.showResults ? (
            <>
              <ProgressBar
                current={quizState.currentQuestionIndex + 1}
                total={questions.length}
              />
              <div className="mt-6">
                <Question
                  question={currentQuestion}
                  selectedAnswer={quizState.answers[quizState.currentQuestionIndex] ?? null}
                  onSelectAnswer={handleAnswer}
                />
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Question {quizState.currentQuestionIndex + 1} of {questions.length}
              </div>
            </>
          ) : (
            <Results
              score={quizState.score}
              totalQuestions={questions.length}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;