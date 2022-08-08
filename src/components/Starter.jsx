import { useContext } from "react";
import TimerContext from "./TimerContext";

function Starter() {
    const { setIsTimerSet, setShowTimer, timer, setTimer } =
        useContext(TimerContext);

    const handleTimeChange = (e) => {
        let inputEvent = e;
        e.preventDefault();

        document.addEventListener("click", (e) => {
            // console.log(inputEvent.target.value);
            // new Date(year, month, day, hours, minutes, seconds, milliseconds);

            let [targetDate, targetTime] = inputEvent.target.value.split("T");

            if (
                new Date(`${targetDate} ${targetTime}`).getTime() <
                new Date().getTime()
            ) {
                return;
            }
            setTimer({
                targetTime: new Date(`${targetDate} ${targetTime}`).getTime(),
                displayTime: new Date(
                    `${targetDate} ${targetTime}`
                ).toLocaleString("en-us", {
                    dateStyle: "full",
                    timeStyle: "short",
                }),
                isSet: true,
            });
        });
    };

    const handleStartTimer = (e) => {
        e.preventDefault();
        if (timer.displayTime) {
            setIsTimerSet(false);
            setShowTimer(true);
        }
    };

    return (
        <>
            <div className="timer-inputs">
                <label htmlFor="input-time">Set the time</label>
                <input
                    type="datetime-local"
                    id="input-time"
                    name="input-time"
                    onChange={handleTimeChange}
                />
            </div>

            {timer.isSet && (
                <>
                    <p>You have set the timer at {timer.displayTime}</p>
                    <button
                        className="btn btn-primary"
                        onClick={handleStartTimer}
                    >
                        Start Timer
                    </button>
                </>
            )}
        </>
    );
}

export default Starter;
