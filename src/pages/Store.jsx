/** @format */

import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cart-store";

const Store = (props) => {
	const addToCart = useCartStore((state) => state.addToCart);
	const navigate = useNavigate();
	const { id, title, img, desc, price } = props.data;
	const [message, setMessage] = useState("");

	const handleAddToCart = () => {
		addToCart({ id, title, img, desc, price, quantity: 1 });
		setMessage(`${title} has been added to cart!!`);
		setTimeout(() => {
			setMessage("");
		}, 3000);
	};

	return (
		<>
			<div className="text-white border p-5 rounded w-[250px]">
				<div className="relative flex flex-col items-center justify-between">
					<div className="w-full">
						<img
							src={img}
							alt={id}
							className="h-[280px] hover:scale-110 transition hover:opacity-65"
						/>
						<div className="flex items-center justify-between">
							<h2 className="text-lg capitalize">
								{title}
							</h2>
							<p>${price}</p>
						</div>
						{/* <div>{desc}</div> */}
					</div>
					<div className="bg-slate-800 w-full h-[280px] absolute opacity-0 hover:opacity-80 transition">
						<div className="flex gap-2 transform">
							<AiOutlineShoppingCart
								size={34}
								className="cursor-pointer"
								onClick={handleAddToCart}
							/>
							<BiEdit
								size={34}
								className="cursor-pointer"
								onClick={() =>
									navigate(`/product/${id}`)
								}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* {addToCart && (
				<div className="absolute bottom-10 right-0 bg-white w-[fit-content]  flex items-center gap-4 shadow-lg rounded-xl ">
					<div className=" ">{message}</div>
				</div>
			)} */}

			{addToCart && 
				<div className="absolute bottom-10 right-0 bg-white w-[fit-content] h-[40px] mr-3  flex items-center justify-center gap-4 shadow-lg rounded-xl z-10">
				
					<span className="text-gray-800">{message}</span>
					
				</div>
			}
		</>
	);
};

export default Store;
