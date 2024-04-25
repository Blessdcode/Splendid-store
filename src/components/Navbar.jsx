/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { Button } from "./ui/button";
import CartList from "../pages/CartList";
import { useCartStore } from "../store/cart-store";

export function Navbar() {
	const cart = useCartStore((state) => state.cart);
	const getTotalCart = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	const [showCart, setShowCart] = useState(false);
	return (
		<header className="w-full bg-slate-900 shadow rounded">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
				<form className="hidden items-center lg:inline-flex">
					<input
						id="search"
						name="search"
						type="search"
						autoComplete="off"
						placeholder="Search products..."
						className="h-9 lg:w-[300px] bg-transparent p-2 rounded-md text-white"
					/>
				</form>
				<div className="flex items-center space-x-1 relative">
					<div onClick={() => setShowCart(!showCart)}>
						<Button
							size="default"
							variant="ghost">
							<AiFillShopping className="h-5 w-5" />

							<span className="ml-2 text-sm font-bold">
								{getTotalCart()}
							</span>
							<span className=" ml-1">Cart</span>
						</Button>
					</div>
					{/* <ThemeToggle /> */}
					<div className="absolute text-white ">
						{showCart && <CartList />}
					</div>
				</div>
			</div>
		</header>
	);
}
