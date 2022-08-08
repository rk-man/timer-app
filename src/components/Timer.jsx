import { useState, useContext } from "react";

import TimerInfoContainer from "./TimerInfoContainer";

import TimerContext from "./TimerContext";

function Timer() {
    const [isRunning, setIsRunning] = useState(true);
    const { isTimerExpired } = useContext(TimerContext);


    const handleClick = (e) => {
        e.preventDefault();
        setIsRunning(!isRunning);
    };

    return (
        <>
            {!isTimerExpired ? (
                <>
                    <TimerInfoContainer isRunning={isRunning} />
                    <button onClick={handleClick} className="btn btn-primary">
                        {isRunning ? "Pause" : "Resume"}
                    </button>
                </>
            ) : (
                <h3>Completed</h3>
            )}
        </>
    );
}

export default Timer;
