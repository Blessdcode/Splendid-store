/** @format */

import React from "react";
import { PRODUCT } from "../../data";
import Store from "../pages/Store";

const Products = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
		 my-[46px]">
			{PRODUCT.map((data) => (
				<Store
					key={data.id}
					data={data}
				/>
			))}
		</div>
	);
};

export default Products;
