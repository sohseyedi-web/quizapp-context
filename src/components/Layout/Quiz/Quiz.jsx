import "./Quiz.scss";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import Loading from './templates/Loading';
import Questions from './templates/Questions';
import End from './templates/End';
import { useQuiz } from './../../../context/QuizContext';

const Quiz = () => {
  
    const {start} = useQuiz();
    const {id} = useParams()
    

    return (
        <>
            <Helmet>
                <title>QuizApp / {id}</title>
            </Helmet>
            <section className={"quiz container"}>
                <div className={"quiz-box animate__animated animate__fadeInDown"}>
                    {start === "first" && <Loading />}
                    {start === "second" && <Questions />}
                    {start === "finish" && <End />}
                </div>
            </section>
        </>
  );
};

export default Quiz;
