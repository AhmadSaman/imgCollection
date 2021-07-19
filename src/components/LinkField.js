import React, { useState, useRef } from "react";

const LinkField = () => {
	const inputRef = useRef();
	const [link, setLink] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const input = inputRef.current.value;
		setLink(input);
		inputRef.current.value = "";
	};
	return (
		<div className="text-field">
			<form className="m-4 text-center" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Paste Here"
					className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-2/4"
					ref={inputRef}
				/>
				<input
					type="submit"
					className="px-3 py-3 rounded ml-3 shadow text-gray-600"
					value="Add"
				/>
			</form>
		</div>
	);
};

export default LinkField;
