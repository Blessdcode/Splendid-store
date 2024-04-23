/** @format */

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PRODUCT } from "../../data";

export function ProductDetails() {
	const { id } = useParams();
	const data = PRODUCT.find((item) => item.id === parseInt(id));

	const [selectedImgIndex, setSelectedImgIndex] = useState(0);

	const toggleImage = () => {
		setSelectedImgIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
	};

	return (
		<div className="text-white my-20 p-4">
			<div className="flex flex-col md:flex-row items-start justify-center">
				<div className="flex md:flex-row flex-col">
					<img
						src={
							selectedImgIndex === 0 ? data.img : data.img2
						}
						alt="details"
						className="w-full md:w-1/2"
					/>
					<img
						src={
							selectedImgIndex === 0 ? data.img2 : data.img
						}
						alt="details"
						className="w-[120px] h-[120px] md:mx-4 my-4 md:my-0 object-cover object-center cursor-pointer"
						onClick={toggleImage}
					/>
				</div>
				<div className="flex-1 my-4">
					<h2 className=" text-4xl capitalize mt-4 md:mt-0">
						{data.title}
					</h2>
					<p className="my-6">{data.desc}</p>
					<p className=" text-2xl"> ${data.price}</p>
				</div>
			</div>
		</div>
	);
}
