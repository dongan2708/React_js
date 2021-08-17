import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CountDownTime from "./CountDownTime";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
      <CountDownTime/>
    </StrictMode>,
    rootElement
);
