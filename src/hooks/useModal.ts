import useModalStore, { ModalType } from "@/store/modalStore";

function useModal() {
  const { modal_type, setModal, hideModal } = useModalStore();

  const showModal = (modalState: ModalType) => {
    setModal(modalState);
  };


  return {
    modal_type,
    showModal,
    hideModal
  };
}

export default useModal