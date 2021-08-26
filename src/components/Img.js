import React from "react";

const Img = ({ img }) => {
	console.log(img);
	return (
		<div className="">
			<img src={img.link} alt="img" className="rounded" />
		</div>
	);
};

export default Img;
