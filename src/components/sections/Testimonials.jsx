import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
    return (
        <section className="section-padding bg-blue-50">
            <div className="container-custom">
                <SectionTitle
                    tag="Testimonials"
                    title="What our clients say"
                    centered
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;