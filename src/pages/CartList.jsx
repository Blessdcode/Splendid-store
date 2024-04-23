/** @format */

import React from "react";
import { wool, wool2, khaki } from "../assets";

const CartList = (props) => {
	// const [id, img, price, title] = props.data;
	return (
		<div className="w-[300px]  bg-slate-900 absolute z-30 top-8 -left-5 text-slate-200 shadow-2xl rounded-xl p-3">
			<h1>Your cart is empty! </h1>
			<div className="flex items-center justify-between mt-3 gap-6 p-2">
				<div className=" w-20">
					<img
						src={khaki}
						alt="khaki"
						className=" w-full h-20 object-cover object-center rounded-full"
					/>
				</div>
				<div className="flex items-center justify-between flex-1">
					<div className="flex-1">
						<h2 className="text-lg capitalize">khaki Bag</h2>
						<p className="text-base">$40</p>
					</div>
					<div className="flex flex-col items-center">
						<span className=" text-[22px]">+</span>
						<span className=" text-[22px]">0</span>
						<span className=" text-[22px]">-</span>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center border-t-2 mt-4">
				<p className="text-base font-semibold mt-3">Total: $40</p>
			</div>
		</div>
	);
};

export default CartList;
