import * as React from "react";
import ReactDOM from "react-dom";
import Button from 'antd/es/button';
import 'antd/dist/antd.css';
const appContainer = document.getElementById("app");
ReactDOM.render(
	<div>
		<Button type="default" shape="round" size="default" >test</Button>
	</div>,
	appContainer
);
