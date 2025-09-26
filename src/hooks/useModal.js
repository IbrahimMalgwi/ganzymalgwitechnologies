import { useState, useCallback } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = useCallback((data = null) => {
        setModalData(data);
        setIsOpen(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setModalData(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    }, []);

    return {
        isOpen,
        modalData,
        openModal,
        closeModal
    };
};

export default useModal;