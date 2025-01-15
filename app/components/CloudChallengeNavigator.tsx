'use client'

import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type Option = {
  text: string;
  cost: number;
  risk: number;
  strategy: number;
};

type Scenario = {
  title: string;
  description: string;
  options: Option[];
};

type ScoreType = {
  cost: number;
  risk: number;
  strategy: number;
};

const scenarios: Scenario[] = [
  {
    title: "Managing Routine Storage Costs",
    description: "Choose the best option to manage storage costs efficiently.",
    options: [
      { text: "Use infrequent access storage", cost: 8, risk: 5, strategy: 6 },
      { text: "Use high-performance storage", cost: 3, risk: 7, strategy: 8 },
      { text: "Utilize cold storage", cost: 10, risk: 3, strategy: 4 },
      {
        text: "Enable auto-delete for old files",
        cost: 7,
        risk: 6,
        strategy: 5,
      },
    ],
  },
  {
    title: "Scaling Infrastructure",
    description:
      "Your application is experiencing increased traffic. How do you scale?",
    options: [
      { text: "Manually add more servers", cost: 5, risk: 7, strategy: 4 },
      { text: "Implement auto-scaling", cost: 7, risk: 4, strategy: 9 },
      {
        text: "Upgrade to more powerful servers",
        cost: 3,
        risk: 6,
        strategy: 5,
      },
      {
        text: "Optimize current infrastructure",
        cost: 8,
        risk: 3,
        strategy: 7,
      },
    ],
  },
  {
    title: "Data Backup Strategy",
    description: "How do you want to approach your data backup strategy?",
    options: [
      { text: "Daily full backups", cost: 3, risk: 8, strategy: 6 },
      {
        text: "Incremental backups with weekly full backups",
        cost: 7,
        risk: 5,
        strategy: 8,
      },
      { text: "Continuous data protection", cost: 4, risk: 9, strategy: 7 },
      { text: "Offsite tape backups", cost: 8, risk: 4, strategy: 5 },
    ],
  },
];

export default function CloudChallengeNavigator() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [scores, setScores] = useState<ScoreType[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [currentScores, setCurrentScores] = useState<ScoreType>({
    cost: 0,
    risk: 0,
    strategy: 0,
  });
  const [optionLocked, setOptionLocked] = useState(false);

  useEffect(() => {
    if (selectedOption && !optionLocked) {
      setCurrentScores({
        cost:
          scores.reduce((sum, score) => sum + score.cost, 0) +
          selectedOption.cost,
        risk:
          scores.reduce((sum, score) => sum + score.risk, 0) +
          selectedOption.risk,
        strategy:
          scores.reduce((sum, score) => sum + score.strategy, 0) +
          selectedOption.strategy,
      });
    }
  }, [selectedOption, scores, optionLocked]);

  const handleOptionSelect = (option: Option) => {
    if (!optionLocked) {
      setSelectedOption(option);
    }
  };

  const nextScenario = () => {
    if (selectedOption) {
      setScores([...scores, selectedOption]);
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
        setOptionLocked(false);
      } else {
        setGameOver(true);
      }
    }
  };

  const confirmSelection = () => {
    setOptionLocked(true);
  };

  const restartGame = () => {
    setCurrentScenario(0);
    setScores([]);
    setSelectedOption(null);
    setGameOver(false);
    setCurrentScores({ cost: 0, risk: 0, strategy: 0 });
    setOptionLocked(false);
  };

  const scenario = scenarios[currentScenario];

  const getChartData = (scores: ScoreType) => [
    {
      subject: "Cost Efficiency",
      A: scores.cost,
      fullMark: scenarios.length * 10,
    },
    {
      subject: "Risk Management",
      A: scores.risk,
      fullMark: scenarios.length * 10,
    },
    {
      subject: "Strategic Depth",
      A: scores.strategy,
      fullMark: scenarios.length * 10,
    },
  ];

  const renderChart = (data: any[], height: number = 300) => (
    <div style={{ width: "100%", height: `${height}px` }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, scenarios.length * 10]} />
          <Radar
            name="Score"
            dataKey="A"
            stroke="#4A4A4A"
            fill="#4A4A4A"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

  if (gameOver) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Game Over</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Final Scores</h2>
        <div className="mb-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Cost Efficiency:</span>
            <span className="font-medium">{currentScores.cost}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Risk Management:</span>
            <span className="font-medium">{currentScores.risk}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Strategic Depth:</span>
            <span className="font-medium">{currentScores.strategy}</span>
          </div>
        </div>
        {renderChart(getChartData(currentScores))}
        <button
          onClick={restartGame}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">The Cloud Challenge Navigator</h1>
      <div className="h-2 bg-gray-300 rounded-full mb-6">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
        />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">{scenario.title}</h2>
        <p className="mb-6 text-gray-600">{scenario.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {scenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`p-4 rounded-md text-left transition duration-300 ${
                selectedOption === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } ${optionLocked && selectedOption !== option ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={optionLocked && selectedOption !== option}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={confirmSelection}
            disabled={!selectedOption || optionLocked}
            className={`py-2 px-4 rounded-md transition duration-300 ${
              !selectedOption || optionLocked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Confirm Selection
          </button>
          <button
            onClick={nextScenario}
            disabled={!optionLocked}
            className={`py-2 px-4 rounded-md transition duration-300 ${
              !optionLocked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {currentScenario < scenarios.length - 1 ? "Next Scenario" : "Finish Game"}
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Current Scores</h2>
        <div className="mb-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Cost Efficiency:</span>
            <span className="font-medium">{currentScores.cost}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Risk Management:</span>
            <span className="font-medium">{currentScores.risk}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Strategic Depth:</span>
            <span className="font-medium">{currentScores.strategy}</span>
          </div>
        </div>
        {renderChart(getChartData(currentScores), 250)}
      </div>
    </div>
  );
}

