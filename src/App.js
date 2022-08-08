import "./index.css";

//importing context
import { TimerContextProvider } from "./components/TimerContext";

import Main from "./components/Main";

function App() {
    return (
        <TimerContextProvider>
            <Main />
        </TimerContextProvider>
    );
}

export default App;
