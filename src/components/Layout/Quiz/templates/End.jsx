import {useNavigate } from 'react-router-dom'
import { useQuiz } from './../../../../context/QuizContext';

const End = () => {

    const {score , setStart} = useQuiz();
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/");
        setStart("first");
    }

    return (
        <div className={"quiz-box__end"}>
            <p className={"quiz-box__end-text"}>بازی به پایان رسید</p>
            <div className={"quiz-box__end-score"}>شما به {score} سوال درست جواب دادی</div>
            <button className={"quiz-box__end-btn"} onClick={handleStart}>صفحه اصلی</button>
        </div>
    );
};

export default End;
