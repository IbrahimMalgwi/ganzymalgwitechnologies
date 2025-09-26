import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const Modal = ({
                   isOpen,
                   onClose,
                   title,
                   children,
                   size = 'medium',
                   showCloseButton = true
               }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizes = {
        small: 'max-w-md',
        medium: 'max-w-2xl',
        large: 'max-w-4xl',
        full: 'max-w-full mx-4'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative bg-white rounded-lg w-full ${sizes[size]} max-h-[90vh] overflow-y-auto`}>
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        {title && (
                            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                        )}
                        {showCloseButton && (
                            <Button
                                variant="ghost"
                                size="small"
                                icon={FaTimes}
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            />
                        )}
                    </div>
                )}

                {/* Body */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;