/** @format */

import { create } from "zustand";

export const useCartStore = create((set) => ({
	cart: [],
	addToCart: (item) =>
		set((state) => {
			const existingItemIndex = state.cart.findIndex(
				(cartItem) => cartItem.id === item.id
			);
			if (existingItemIndex !== -1) {
                const updatedCart = [...state.cart];
                // localStorage.setItem("cart", JSON.stringify(updatedCart));
				updatedCart[existingItemIndex].quantity += 1;
				return { cart: updatedCart };
			} else {
                return { cart: [...state.cart, { ...item, quantity: 1 }] };
			}
		}),
	removeFromCart: (itemId) =>
		set((state) => {
			const updatedCart = state.cart.filter(
				(item) => item.id !== itemId
			);

			return { cart: updatedCart };
		}),
	clearCart: () =>
		set(() => {
			// localStorage.removeItem("cart");
			return { cart: [] };
		}),
	increaseQuantity: (itemId) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item.id === itemId
					? { ...item, quantity: item.quantity + 1 }
					: item
			),
		})),
	decreaseQuantity: (itemId) =>
		set((state) => ({
			cart: state.cart.map((item) =>
				item.id === itemId
					? { ...item, quantity: Math.max(1, item.quantity - 1) }
					: item
			),
		})),
}));
