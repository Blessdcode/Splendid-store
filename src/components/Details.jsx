/** @format */

import React from "react";
import { ProductDetails } from "./ProductDetails";
import { PRODUCT } from "../../data";

const Details = () => {
	return (
		<div>
			{PRODUCT.map((data) => (
                <div>
                     <ProductDetails key={data.id} data={data} />
               </div>
			))}
		</div>
	);
};

export default Details;
