import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="py-[1rem] pl-[1rem]">
			<h3 className="font-medium italic">StoriesGram</h3>
		</div>
	);
}

export default App;
