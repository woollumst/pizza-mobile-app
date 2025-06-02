import { create } from "zustand";
import { persist } from "zustand/middleware";

type MenuItem = { 
    id: string;
    name: string;
    description?: string;
    price: number;
    category?: string;
    imageUrl?: string;
}

interface MenuState {
    menuItems: MenuItem[];
    loading: boolean;
    error: string | null;
    fetchMenu: () => Promise<void>;
}

export const useMenuStore = create(
    persist<MenuState>(
        (set) => ({
            menuItems: [],
            loading: false,
            error: null,

            fetchMenu: async () => {
                try{
                    set({ loading: true, error: null });

                    //API call
                    const response = await fetch('https://sampleapi.com'); // fix
                    if (!response.ok) throw new Error('Failed to fetch menu');
                    const data = await response.json();

                    set({ menuItems: data, loading: false });
                } catch (err: any) {
                    set({ error: err.message || 'Something went wrong', loading: false });
                }
            },
        }),
        {
            name: 'menu-storage',
        }
    )
)