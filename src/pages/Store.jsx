/** @format */

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Store = (props) => {
	const navigate = useNavigate()
	const { title, img, desc, id, price } = props.data;
	// console.log(title);
	return (
		<div className=" text-white border p-5 rounded  w-[250px] ">
			<div className="relative flex flex-col items-center justify-between ">
				<div className="w-full">
					<img
						src={img}
						alt={id}
						className="h-[280px] hover:scale-110 transition hover:opacity-65"
					/>
					<div className="flex items-center justify-between">
						<h2 className=" text-lg capitalize">{title}</h2>
						<p> ${price}</p>
					</div>
					<div>{desc}</div>
				</div>
				<div className="bg-slate-800 w-full h-[280px] absolute opacity-0 hover:opacity-80 transition ">
					<div className="flex gap-2 transform">
						<AiOutlineShoppingCart
							size={34}
							className="cursor-pointer "
						/>
						<BiEdit
							size={34}
							className="cursor-pointer "
							onClick={() => navigate(`/product/${id}`)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Store;
