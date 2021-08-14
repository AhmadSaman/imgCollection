import React from "react";

const Img = ({ img }) => {
	console.log(img);
	return (
		<div className="lg:w-1/3 md:w-full animate-fade-in-down">
			<img src={img.link} alt="img" />
		</div>
	);
};

export default Img;
