import React, { useState, useEffect } from "react";
import ImgGrid from "./components/ImgGrid";
import LinkField from "./components/LinkField";
import useLocalStorage from "./useLocalStorage";

function App() {
	const [link, setLink] = useState();
	const [linkObj, setLinkObj] = useLocalStorage("imgs", []);

	useEffect(() => {
		if (link) {
			setLinkObj((arr) => [...arr, link]);
		}
	}, [link]);

	return (
		<div className="App">
			<LinkField setLink={setLink} />
			<ImgGrid imgs={linkObj} onDelete={setLinkObj} />
		</div>
	);
}

export default App;
