import {createContext, useContext, useState} from "react";

export const QuizApp = createContext("");

const QuizProvider = ({children}) => {

    const [start, setStart] = useState("first");
    const [score, setScore] = useState(0);
    const [current, setCurrent] = useState(0);

    return (
        <QuizApp.Provider
            value={{start, score, current, setStart, setScore, setCurrent}}
        >
            {children}
        </QuizApp.Provider>
    );
};

export default QuizProvider;


export const useQuiz = () => useContext(QuizApp)

