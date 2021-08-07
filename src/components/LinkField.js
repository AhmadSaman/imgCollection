import React, { useRef } from "react";

const LinkField = ({ setLink }) => {
	const inputRef = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputRef.current.value) {
			const input = inputRef.current.value;
			setLink(input);
			inputRef.current.value = "";
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();
		navigator.clipboard
			.readText()
			.then((clipText) => (inputRef.current.value = clipText));
	};

	return (
		<div className="text-field">
			<form className="m-4 text-center" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Paste Here ..."
					className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-2/4"
					ref={inputRef}
				/>
				<button
					className="px-3 py-2.5 text-gray-600 shadow rounded ml-1"
					onClick={handlePaste}
				>
					Paste
				</button>
				<input
					type="submit"
					className="px-3 py-3 rounded ml-3 shadow text-gray-600 cursor-pointer"
					value="Add"
				/>
			</form>
		</div>
	);
};

export default LinkField;
