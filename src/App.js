import React, { useState, useEffect } from "react";
import Img from "./components/Img";
import ImgGrid from "./components/ImgGrid";
import LinkField from "./components/LinkField";
import { v4 as uuidv4 } from "uuid";
function App() {
	const [link, setLink] = useState("");
	const [linkObj, setLinkObj] = useState([]);
	useEffect(() => {
		if (link) {
			setLinkObj((arr) => [...arr, { id: uuidv4(), link: link }]);
		}
	}, [link]);

	return (
		<div className="App">
			<LinkField setLink={setLink} />
		</div>
	);
}

export default App;
