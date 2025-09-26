import React from 'react';
import Modal from './Modal';
import Button from './Button';

const IndustryModal = ({ isOpen, industry, onClose }) => {
    if (!industry) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={industry.title}
            size="medium"
        >
            <div className="prose prose-lg text-gray-700 mb-6">
                <p>{industry.description}</p>
            </div>

            <div className="flex gap-4">
                <Button
                    variant="secondary"
                    onClick={onClose}
                    className="flex-1"
                >
                    Close
                </Button>
                <Button
                    href="#contact"
                    variant="primary"
                    onClick={onClose}
                    className="flex-1"
                >
                    Message Us
                </Button>
            </div>
        </Modal>
    );
};

export default IndustryModal;