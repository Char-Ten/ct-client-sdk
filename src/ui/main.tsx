import * as React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
const appContainer = document.getElementById("app");
console.log(Button)
ReactDOM.render(
	<div>
		<Button type="default" shape="round" size="default" >test</Button>
	</div>,
	appContainer
);
