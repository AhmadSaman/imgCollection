import React from "react";
import ImgGrid from "./components/ImgGrid";
import LinkField from "./components/LinkField";
import useLocalStorage from "./useLocalStorage";

function App() {
	const [linkObj, setLinkObj] = useLocalStorage("imgs", []);

	// useEffect(() => {
	// 	if (link) {
	// 		setLinkObj((arr) => [...arr, link]);
	// 	}
	// }, [link]);
	function addLink(newLink) {
		setLinkObj((arr) => [...arr, newLink]);
	}
	return (
		<div className="App">
			<LinkField onAdd={addLink} />
			<ImgGrid imgs={linkObj} onDelete={setLinkObj} />
		</div>
	);
}

export default App;
