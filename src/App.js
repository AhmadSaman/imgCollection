import React, { useState, useEffect } from "react";
import ImgGrid from "./components/ImgGrid";
import LinkField from "./components/LinkField";

function App() {
	const [link, setLink] = useState("");
	const [linkObj, setLinkObj] = useState([]);
	useEffect(() => {
		if (link) {
			setLinkObj((arr) => [...arr, link]);
		}
	}, [link]);

	return (
		<div className="App">
			<LinkField setLink={setLink} />
			<ImgGrid imgs={linkObj} />
		</div>
	);
}

export default App;
