import DialogModal from "@/components/Dialog";
import AlertModal from "@/components/Alert";
import DrawerModal from "@/components/Drawer";
import useModalStore, { MODAL_TYPES } from "@/store/modalStore";


const MODAL_COMPONENTS: any  = {
    [MODAL_TYPES.DialogModal]: DialogModal,
    [MODAL_TYPES.AlertModal]: AlertModal,
    [MODAL_TYPES.DrawerModal]: DrawerModal
};

const GlobalModal = () => {
  const { modal_type } = useModalStore();

  const renderComponent = () => {
    if (modal_type === null) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modal_type.modal_type];

    return <ModalComponent {...modal_type.modal_props} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;