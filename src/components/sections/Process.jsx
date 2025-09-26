import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProcessCard from '../ui/ProcessCard';
import { processSteps } from '../../data/process';

const Process = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <SectionTitle
                    tag="Process"
                    title="We Follow"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <ProcessCard key={step.id} step={step} number={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;