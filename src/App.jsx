/** @format */

import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Routes
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Store from "./pages/Store"
import Products from "./pages/Products"
import { ProductDetails } from "./components/ProductDetails";


const Layout = () => {
	return (
		<div className="app">
			<Navbar />

			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/",
				element: <Products />,
			},
			{
				path: "/product/:id",
				element: <ProductDetails />,
			},
		],
	},
]);

const App = () => {
	return (
		<div className=" bg-slate-950">
			<div className=" w-full lg:w-[1240px] mx-auto pt-3">
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
