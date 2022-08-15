import { useState, useEffect } from "react";

function getWDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWDimensions() {
	const [wDimensions, setWDimensions] = useState(getWDimensions());

	useEffect(() => {
		function handleResize() {
			setWDimensions(getWDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return wDimensions;
}

export default useWDimensions;
