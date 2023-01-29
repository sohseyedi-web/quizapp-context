import {useEffect, useState} from "react";
import Questions from './Questions';

const Loading = () => {
    const [timer, setTimer] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="quiz-box__loading ">
            {timer >= 0 ? (
                <div>{timer}</div>
            ) : (
                <Questions/>
            )}
        </div>
    );
};

export default Loading;
