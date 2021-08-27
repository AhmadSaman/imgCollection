import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const LinkField = ({ onAdd }) => {
	const inputRef = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputRef.current.value) {
			const input = { id: uuidv4(), link: inputRef.current.value };
			onAdd(input);
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
		<div className="text-field lg:w-10/12 m-auto">
			<form className="flex justify-center m-4" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Paste Image URL Here ..."
					className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-2/4 border focus:ring-gray-300"
					ref={inputRef}
				/>
				<button
					className="py-3 px-4 text-gray-600 transition duration-200 ease-in-out hover:bg-green-300  shadow rounded ml-3 border"
					onClick={handlePaste}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						/>
					</svg>
				</button>
				<button
					type="submit"
					className="px-3 py-3 rounded ml-3 shadow text-gray-600 cursor-pointer transition duration-200 ease-in-out hover:bg-red-300 border"
					value="Add"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default LinkField;
