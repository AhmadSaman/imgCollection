import { useEffect, useState } from "react";

function useLocalStorage(key, initialState) {
	const [linkObj, setLinkObj] = useState(() => {
		if (typeof window !== "undefined") {
			const saved = window.localStorage.getItem(key);
			if (saved !== null) {
				return JSON.parse(saved);
			}
		}
		return initialState;
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(linkObj));
	});
	return [linkObj, setLinkObj];
}

export default useLocalStorage;
