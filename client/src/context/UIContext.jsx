"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Modal from "@components/action/modal";
import { Alert } from "@components/action/alert";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({});
  const [alertTimeoutId, setAlertTimeoutId] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);

  const showModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const showAlert = (type, message, description, rightElement, duration = 3000) => {
    if (alertTimeoutId) {
      clearTimeout(alertTimeoutId);
    }

    setAlertContent({ type, message, description, rightElement });
    setAlert(true);
    setRemainingTime(duration);

    if (duration > 0) {
      const timeoutId = setTimeout(() => {
        setAlert(false);
        setAlertTimeoutId(null);
        setRemainingTime(0);
      }, duration);

      setAlertTimeoutId(timeoutId);
    }
  };

  const showPersistentAlert = (type, message, description, rightElement) => {
    if (alertTimeoutId) {
      clearTimeout(alertTimeoutId);
    }
    setAlertContent({ type, message, description, rightElement });
    setAlert(true);
    setRemainingTime(0);
  };

  useEffect(() => {
    if (alert && alertTimeoutId) {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 100) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 100;
        });
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [alert, alertTimeoutId]);

  const hideModal = () => setModalOpen(false);

  const hideAlert = () => {
    setAlert(false);
    if (alertTimeoutId) {
      clearTimeout(alertTimeoutId);
      setAlertTimeoutId(null);
      setRemainingTime(0);
    }
  };

  return (
    <UIContext.Provider value={{ showModal, hideModal, showAlert, hideAlert, showPersistentAlert }}>
      {children}
      <Modal isOpen={isModalOpen} onClose={hideModal} title={modalContent.title}>
        {modalContent.content}
      </Modal>
      {alert && <Alert {...alertContent} remainingTime={Math.floor(remainingTime / 1000)} />}
    </UIContext.Provider>
  );
};

export function useUI() {
  return useContext(UIContext);
}
