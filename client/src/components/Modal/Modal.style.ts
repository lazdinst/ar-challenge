// src/components/Modal/Modal.style.ts
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  text-align: right;
`;
