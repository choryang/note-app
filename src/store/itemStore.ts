import item from "@/interfaces/item";
import {create} from "zustand";

interface itemStore {
    items: item[],
    setItems: (newItems: item[]) => void
    getItem: (id: string) => item
    deleteItem: (id: string) => item[]
}

const useItemStore = create<itemStore>((set, get) => ({

    items: [
    {
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        title: "First memo",
        content: "First memo content",
        created_at: "2025-03-03 17:00:00",
        last_modified: "2025-03-03 17:00:00"
    },
    {
        id: "36b8f84d-df4e-4d49-b662-bcde71a8765e",
        title: "Second memo",
        content: "Second memo content",
        created_at: "2025-03-03 17:00:00",
        last_modified: "2025-03-03 18:00:00"
    }
    ],
    setItems: (newItems: item[]) => set({items: newItems}),
    getItem: (id: string) => {return get().items.filter(item => item.id === id)[0];},
    deleteItem: (id: string) => {return get().items.filter(item => item.id !== id)}
}))

export default useItemStore