import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is React.js?",
      answers: [
        {
          text: "Open-source JavaScript back-end library",
          correct: false,
        },
        {
          text: "JavaScript front-end library to create a database",
          correct: false,
        },
        {
          text: "Free and open-source JavaScript front-end library",
          correct: true,
        },
        {
          text: "None of the mentioned",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Which of the following acts as the input of a class-based component?",
      answers: [
        {
          text: "Class",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "None of the mentioned",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "Who created React.js?",
      answers: [
        {
          text: "Jordan Mike",
          correct: false,
        },
        {
          text: "Jordan Walke",
          correct: true,
        },
        {
          text: "Tim Lee",
          correct: false,
        },
        {
          text: "Jordan Lee",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "In which language is React.js written?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Javascript",
          correct: true,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "PHP",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Which of the following port is the default where webpack-dev-server runs?",
      answers: [
        {
          text: "3000",
          correct: true,
        },
        {
          text: "3306",
          correct: false,
        },
        {
          text: "3030",
          correct: false,
        },
        {
          text: "8080",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "How many elements can a valid react component return?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "A state in React.js is also known as?",
      answers: [
        {
          text: "The internal storage of the component",
          correct: true,
        },
        {
          text: "External storage of the component",
          correct: false,
        },
        {
          text: "Permanent storage",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "What is ReactJS mainly used for building?",
      answers: [
        {
          text: "Database",
          correct: false,
        },
        {
          text: "Connectivity",
          correct: false,
        },
        {
          text: "Userinterface",
          correct: true,
        },
        {
          text: "Design platform",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Among the following which acts as the input of class-based component?",
      answers: [
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "Render",
          correct: false,
        },
        {
          text: "Class",
          correct: false,
        },
        {
          text: "props",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question:
        "Among the following which is used to create a class inheritance?",
      answers: [
        {
          text: "Inherits",
          correct: false,
        },
        {
          text: "Extends",
          correct: true,
        },
        {
          text: "Create",
          correct: false,
        },
        {
          text: "this",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Total ways of defining variables in ES6 is?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Choose the method with refers to the parent class in ReactJS?",
      answers: [
        {
          text: "this()",
          correct: false,
        },
        {
          text: "super()",
          correct: true,
        },
        {
          text: "iniherits()",
          correct: false,
        },
        {
          text: "self()",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "JSX stands for __________",
      answers: [
        {
          text: "Javascript XML",
          correct: true,
        },
        {
          text: "JSON XML",
          correct: false,
        },
        {
          text: "JSON",
          correct: false,
        },
        {
          text: "Javascript and Angular",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Choose the correct statement in the context of uncontrolled components in ReactJS?",
      answers: [
        {
          text: "source of truth can be anything",
          correct: false,
        },
        {
          text: "source of truth is a component state",
          correct: false,
        },
        {
          text: "source of truth is DOM",
          correct: true,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Which company developed ReactJS?",
      answers: [
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Google",
          correct: false,
        },
        {
          text: "Facebook",
          correct: true,
        },
        {
          text: "Twitter",
          correct: false,
        },
      ],
    },
  ];

  const mPyramid = useMemo(
    () =>
      [
        { id: 1, level: "Level 1" },
        { id: 2, level: "Level 2" },
        { id: 3, level: "Level 3" },
        { id: 4, level: "Level 4" },
        { id: 5, level: "Level 5" },
        { id: 6, level: "Level 6" },
        { id: 7, level: "Level 7" },
        { id: 8, level: "Level 8" },
        { id: 9, level: "Level 9" },
        { id: 10, level: "Level 10" },
        { id: 11, level: "Level 11" },
        { id: 12, level: "Level 12" },
        { id: 13, level: "Level 13" },
        { id: 14, level: "Level 14" },
        { id: 15, level: "Level 15" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(mPyramid.find((m) => m.id === questionNumber - 1).level);
  }, [mPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You Are Completed: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="mList">
              {mPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "mListItem active"
                      : "mListItem"
                  }
                >
                  <span className="mListItemNumber">{m.id}</span>
                  <span className="mListItemlevel">{m.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
