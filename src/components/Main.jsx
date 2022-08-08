import TimerContext from "./TimerContext";
import { useContext } from "react";

import Starter from "./Starter";
import Timer from "./Timer";

function Main() {
    const { isTimerSet, showTimer } = useContext(TimerContext);

    return (
        <div className="center-align">
            <h1 className="title">TIMER PROGRAM</h1>
            {isTimerSet && <Starter />}
            {showTimer && <Timer />}
        </div>
    );
}

export default Main;
