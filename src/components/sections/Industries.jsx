import React from 'react';
import SectionTitle from '../common/SectionTitle';
import IndustryCard from '../ui/IndustryCard';
import IndustryModal from '../ui/IndustryModal';
import useModal from '../../hooks/useModal';
import { industries } from '../../data/industries';

const Industries = () => {
    const { isOpen, modalData, openModal, closeModal } = useModal();

    return (
        <section id="industry" className="section-padding bg-white">
            <div className="container-custom">
                <SectionTitle
                    tag="INDUSTRIES WE SERVE"
                    title="We Offer Better Solution For Your Business"
                    centered
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                        <IndustryCard
                            key={industry.id}
                            industry={industry}
                            onClick={() => openModal(industry)}
                        />
                    ))}
                </div>

                <IndustryModal
                    isOpen={isOpen}
                    industry={modalData}
                    onClose={closeModal}
                />
            </div>
        </section>
    );
};

export default Industries;