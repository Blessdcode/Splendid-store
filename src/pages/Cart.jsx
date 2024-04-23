/** @format */

import React from "react";
import CartList from "./CartList";
import { PRODUCT } from "../../data";

const Cart = () => {
	return (
		<div className="">
			{PRODUCT.map((data) => (
				<CartList
					key={data.id}
					data={data}
				/>
			))}
		</div>
	);
};

export default Cart;
