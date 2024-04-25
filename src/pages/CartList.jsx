/** @format */

import React from "react";
import { useCartStore } from "../store/cart-store";

const CartList = () => {
	const cart = useCartStore((state) => state.cart);
	const increaseQuantity = useCartStore((state) => state.increaseQuantity);
	const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const clearCart = useCartStore((state) => state.clearCart);

	const getTotalPrice = () => {
		return cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	return (
		<div className="w-[350px] h-[400px] bg-slate-900 absolute z-30 top-8 -left-8 text-slate-200 shadow-2xl rounded-xl p-3 scroll">
			{cart.length === 0 ? (
				<h1>Your cart is empty!</h1>
			) : (
				<>
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex items-center justify-between mt-3 gap-6 p-2">
							<div className="w-20">
								<img
									src={item.img}
									alt={item.title}
									className="w-full h-20 object-cover object-center rounded-full"
								/>
							</div>
							<div className="flex items-center justify-between flex-1">
								<div className="flex-1">
									<h2 className="text-lg capitalize">
										{item.title}
									</h2>
									<p className="text-base">
										${item.price * item.quantity}
									</p>
								</div>
								<div className="flex flex-col items-center">
									<button
										onClick={() =>
											increaseQuantity(item.id)
										}>
										+
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() =>
											decreaseQuantity(item.id)
										}>
										-
									</button>
									<button
										onClick={() =>
											removeFromCart(item.id)
										}>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
					<div className="flex items-center justify-between border-t-2 mt-4 py-5">
						<button onClick={clearCart}>Clear Cart</button>
						<p className="text-base font-semibold ">
							Total: ${getTotalPrice()}
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default CartList;
