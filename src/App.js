import React, { useState } from "react";
import Img from "./components/Img";
import ImgGrid from "./components/ImgGrid";
import LinkField from "./components/LinkField";
function App() {
	const [link, setLink] = useState("");
	return (
		<div className="App">
			<LinkField setLink={setLink} />
		</div>
	);
}

export default App;
