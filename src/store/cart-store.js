/** @format */

import { create } from "zustand";

export const useCartStore = create((set) => ({
	cart: JSON.parse(localStorage.getItem("cart")) || [],
	addToCart: (item) => {
		set((state) => {
			const existingItemIndex = state.cart.findIndex(
				(cartItem) => cartItem.id === item.id
			);
			if (existingItemIndex !== -1) {
				const updatedCart = [...state.cart];
				updatedCart[existingItemIndex].quantity += 1;
				localStorage.setItem("cart", JSON.stringify(updatedCart));
				return { cart: updatedCart };
			} else {
				const updatedCart = [
					...state.cart,
					{ ...item, quantity: 1 },
				];
				localStorage.setItem("cart", JSON.stringify(updatedCart));
				return { cart: updatedCart };
			}
		});
	},
	removeFromCart: (itemId) => {
		set((state) => {
			const updatedCart = state.cart.filter(
				(item) => item.id !== itemId
			);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return { cart: updatedCart };
		});
	},
	clearCart: () => {
		set({ cart: [] });
		localStorage.removeItem("cart");
	},
	increaseQuantity: (itemId) => {
		set((state) => {
			const updatedCart = state.cart.map((item) =>
				item.id === itemId
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return { cart: updatedCart };
		});
	},
	decreaseQuantity: (itemId) => {
		set((state) => {
			const updatedCart = state.cart.map((item) =>
				item.id === itemId
					? { ...item, quantity: Math.max(1, item.quantity - 1) }
					: item
			);
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			return { cart: updatedCart };
		});
	},
}));
