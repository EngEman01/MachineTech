import React from 'react';
import { Trophy } from 'lucide-react';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="text-center space-y-6">
      <Trophy className="w-20 h-20 mx-auto text-yellow-400" />
      <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
      <p className="text-xl">
        Your score: {score} out of {totalQuestions} ({percentage.toFixed(1)}%)
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};