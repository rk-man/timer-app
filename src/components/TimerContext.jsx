import { createContext, useState } from "react";

const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
    const [isTimerSet, setIsTimerSet] = useState(true);
    const [showTimer, setShowTimer] = useState(false);
    const [timer, setTimer] = useState({
        targtTime: null,
        displayTime: null,
        isSet: false,
    });
    const [isTimerExpired, setIsTimerExpired] = useState(false);

    return (
        <TimerContext.Provider
            value={{
                isTimerSet,
                setIsTimerSet,
                showTimer,
                setShowTimer,
                timer,
                setTimer,
                setIsTimerExpired,
                isTimerExpired,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export default TimerContext;
