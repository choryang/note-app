import item from "@/interfaces/item";
import {create} from "zustand";

interface itemStore {
    items: item[],
    setItems: (newItems: item[]) => void
    getItem: (id: string) => item
    deleteItem: (id: string) => item[]
}

const useItemStore = create<itemStore>((set, get) => ({

    items: [],
    setItems: (newItems: item[]) => {
        set({items: newItems});
        localStorage.setItem("items", JSON.stringify(get().items));
    },
    getItem: (id: string) => {return get().items.filter(item => item.id === id)[0];},
    deleteItem: (id: string) => {return get().items.filter(item => item.id !== id)}
}))

export default useItemStore