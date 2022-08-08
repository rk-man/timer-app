import { useEffect, useContext, useState } from "react";
import TimerContext from "./TimerContext";

function TimerInfoContainer({ isRunning }) {
    const { timer, setIsTimerExpired, isTimerExpired } =
        useContext(TimerContext);

    const [countDownValues, setCountDownValues] = useState({
        daysDifference: 0,
        hoursDifference: 0,
        minutesDifference: 0,
        secondsDifference: 0,
    });

    const getCountDownValues = () => {
        if(!isRunning){
            return;
        }
        let difference = timer.targetTime - new Date().getTime();

        if (difference >= 0) {
            let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
            difference -= daysDifference * 1000 * 60 * 60 * 24;

            let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
            difference -= hoursDifference * 1000 * 60 * 60;

            let minutesDifference = Math.floor(difference / 1000 / 60);
            difference -= minutesDifference * 1000 * 60;

            let secondsDifference = Math.floor(difference / 1000);

            setCountDownValues({
                daysDifference,
                hoursDifference,
                minutesDifference,
                secondsDifference,
            });
        } else {
            setIsTimerExpired(true);
        }
    };

    useEffect(() => {
        let interval;
        if (!isTimerExpired) {
            interval = setInterval(() => {
                getCountDownValues();
                // console.log("hello world");
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, [getCountDownValues]);

    return (
        <div className="timer-info-container">
            <>
                <p>{countDownValues.daysDifference} days</p>
                <p>{countDownValues.hoursDifference} hours</p>
                <p>{countDownValues.minutesDifference} minutes</p>
                <p>{countDownValues.secondsDifference} seconds</p>
            </>
        </div>
    );
}

export default TimerInfoContainer;
