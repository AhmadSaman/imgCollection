import React from "react";
import Masonry from "react-masonry-css";
import Img from "./Img";

const ImgGrid = ({ imgs }) => {
	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1,
	};
	return (
		<div className="m-auto lg:w-10/12 md:w-full animate-fade-in-down">
			<Masonry
				breakpointCols={breakpoints}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{imgs.map((img) => (
					<Img img={img} />
				))}
			</Masonry>
		</div>
	);
};

export default ImgGrid;
