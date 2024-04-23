/** @format */

import React from "react";
import Products from "../pages/Products";

const Home = () => {
	return (
		
		<div className="flex flex-col items-center justify-center my-6">
			<div className="flex flex-col">
				<h1 className="text-white text-3xl font-semibold">
					Splendid Store & More
				</h1>
				<p className="text-white my-2">
					The best place to do your shopping
				</p>
			</div>
			<div className="flex">
				<Products/>
			</div>
		</div>
	);
};

export default Home;
