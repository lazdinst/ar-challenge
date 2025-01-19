import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { RootState } from "../../redux/store";
import { closeModal } from "../../redux/slices/ui/ui";
import Modal from "../../components/Modal/Modal";

interface ModalContainerProps {
  modalId: string;
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  modalId,
  children,
}) => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.modals[modalId]);

  const handleClose = () => {
    dispatch(closeModal(modalId));
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {children}
    </Modal>
  );
};

export default ModalContainer;
