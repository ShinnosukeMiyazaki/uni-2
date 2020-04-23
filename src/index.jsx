import React from "react";
import {render} from "react-dom";
import App from "./components/page/App.jsx";

const Index = () => {
    return (
        <React.Fragment>
            Hello!
            <App />
        </React.Fragment>
    )
}

render(<Index />, document.getElementById("root"));