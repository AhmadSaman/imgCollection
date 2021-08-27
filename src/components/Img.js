import React from "react";

import { useTransition, useSpring, animated } from "react-spring";
const Img = ({ img, deleteItem }) => {
	const [{ y }, start] = useSpring(() => ({ y: 100 }));
	const transition = useTransition(img, {
		from: { x: 0, y: 10, opacity: 0 },
		enter: { x: 0, y: 0, opacity: 1 },
		leave: {},
	});
	function handleDelete() {
		deleteItem(img.id);
	}

	return (
		<div>
			{transition((style, img) => (
				<animated.div
					onMouseEnter={() => start({ y: 0 })}
					onMouseLeave={() => start({ y: 100 })}
					className="overflow-hidden relative hover:shadow-md rounded"
					style={style}
				>
					<animated.img
						src={img.link}
						alt="img"
						onError={() => {
							handleDelete(img.id);
						}}
					/>
					<animated.div
						style={{
							transform: y.to((v) => `translateY(${v}%`),
						}}
						className="glance flex flex-row justify-center items-center border-2 rounded"
					>
						<button onClick={handleDelete}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-28 h-32 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
								fill="none"
								viewBox="0 0 24 24"
								stroke="grey"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
						</button>
					</animated.div>
				</animated.div>
			))}
		</div>
	);
};
export default Img;
