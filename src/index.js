import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css" // в папке нод модулс живет папочка бутстрап. тк нет файла индекс - ищем пофайлово и куда бежать

import "./index.css";
import App from "./App";

ReactDOM.render(
	<App/>,
	document.querySelector("#root")
);
