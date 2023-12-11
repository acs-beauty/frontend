import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

import { useToggleScroll, useKeyPress } from "@/hooks";
import { Overlay } from "./ModalPortal.styled";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  children?: ReactNode;
  onCloseMenu: () => void;
}

const ModalPortal = ({ onCloseMenu, isOpen, children }: ModalProps) => {
  const { lockScroll, unlockScroll } = useToggleScroll();
  useKeyPress("Escape", onCloseMenu);

  useEffect(() => {
    lockScroll();
    console.log("lock")
    return () => unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  if (!isOpen) return null;

  const portalContainerId = "modal-root";
  const portalContainer = document.getElementById(portalContainerId);

  if (!portalContainer) return null;

  const modalContent = <Overlay onClick={onCloseMenu}>{children}</Overlay>;

  return ReactDOM.createPortal(modalContent, portalContainer);
};

export default ModalPortal;
