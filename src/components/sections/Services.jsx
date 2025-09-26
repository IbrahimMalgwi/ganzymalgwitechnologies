import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="service" className="section-padding bg-gray-50">
            <div className="container-custom">
                <SectionTitle
                    tag="SERVICES"
                    title="What We Do"
                    centered
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;