import React from "react";
import Img from "./Img";

const ImgGrid = ({ imgs }) => {
	return (
		<div className="flex w-10/12 m-auto flex-wrap">
			{imgs.map((img) => (
				<Img key={img.id} img={img} />
			))}
		</div>
	);
};

export default ImgGrid;
