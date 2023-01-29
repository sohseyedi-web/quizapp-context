import {useState} from "react";
import {useParams} from "react-router-dom";
import { useQuiz } from './../../../../context/QuizContext';
import { questions } from './../../../../data/Data';


const Questions = () => {
    const {id} = useParams();
    const {score, setScore, setCurrent, current, setStart} = useQuiz()
    const [result, setResult] = useState("");
    const chooseResult = (result) => setResult(result);
    const filterQuiz = questions.filter((i) => i.path === id);
    const quizItem = filterQuiz[0].items;

    const nextQuiz = () => {
        if (quizItem[current].answer === result) {
            setScore(score + 1);
        }
        setCurrent((prevState) => prevState + 1);
    }

    const finishQuiz = () => {
        if (quizItem[current].answer === result) {
            setScore(score + 1);
        }
        setStart("finish")
    }


    return (
        <>
            <div className={"quiz-box__questions"}>
                <h3>{quizItem[current].prompt}</h3>
                <div className="quiz-box__questions-menu">
                    <button onClick={() => chooseResult("optionA")}>{quizItem[current].optionA}</button>
                    <button onClick={() => chooseResult("optionB")}>{quizItem[current].optionB}</button>
                    <button onClick={() => chooseResult("optionC")}>{quizItem[current].optionC}</button>
                    <button onClick={() => chooseResult("optionD")}>{quizItem[current].optionD}</button>
                </div>
                {
                    current === quizItem.length - 1 ? (
                        <button onClick={finishQuiz} className="quiz-box__questions-finall">
                            سوال اخر
                        </button>
                    ) : (
                        <button onClick={nextQuiz} className="quiz-box__questions-finall">
                            سوال بعدی
                        </button>
                    )
                }
            </div>
        </>
    );
};

export default Questions;
