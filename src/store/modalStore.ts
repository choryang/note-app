import alert from "@/interfaces/alert";
import dialog from "@/interfaces/dialog";
import drawer from "@/interfaces/drawer";
import { create } from "zustand";

export const MODAL_TYPES = {
    DialogModal: "DialogModal",
    AlertModal: "AlertModal",
    DrawerModal: "DrawerModal"
} as const;

interface DialogModalType {
    modal_type: typeof MODAL_TYPES.DialogModal
    modal_props: dialog
}

interface AlertModalType {
    modal_type: typeof MODAL_TYPES.AlertModal
    modal_props: alert
}

interface DrawerModalType {
    modal_type: typeof MODAL_TYPES.DrawerModal
    modal_props: drawer
}

export type ModalType = DialogModalType | AlertModalType | DrawerModalType;

interface modalStore {
    modal_type: ModalType | null
    setModal: (modalState: ModalType) => void
    hideModal: () => void
}

const useModalStore = create<modalStore>((set) => ({
    modal_type: null,
    setModal: (modalState: ModalType) => set({modal_type: modalState}),
    hideModal: () => set({modal_type: null})
}))

export default useModalStore