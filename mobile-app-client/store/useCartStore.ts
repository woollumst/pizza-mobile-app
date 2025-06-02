import { create } from 'zustand';

type CartItem = {
    id: string;
    name: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addItem: (item) => {
        set((state) => ({items: [...state.items, item] }))
    },
    clearCart: () => set({ items: [] }),
}));