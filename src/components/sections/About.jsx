import React from 'react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
    return (
        <section className="section-padding bg-blue-50">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <SectionTitle
                            tag="WE ARE"
                            title="Best Software Solution Providers"
                        />
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Javaplus Innovations Limited is a software development and technology consulting firm with a mission to empower digital enterprises and help them operate more effectively by leveraging software engineering excellence. We design and develop fit-for-purpose solutions tailored to the customers' satisfaction.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Our client base operates in various industries, including Banks, Financial Services, Insurance Institutions, FinTechs, Healthcare, Start-ups, Telecoms, Education, Retail and E-commerce. We offer flexible subscriptions at competitive rates that are geared towards building scalable and sustainable products.
                        </p>
                        <div className="flex gap-4">
                            <button className="btn-primary">Learn More</button>
                            <button className="btn-secondary flex items-center gap-2">
                                <span>Intro Video</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/img/tile-gallery/a2.jpg"
                            alt="About 1"
                            className="rounded-lg shadow-lg"
                        />
                        <img
                            src="/assets/img/tile-gallery/470pic.jpg"
                            alt="About 2"
                            className="rounded-lg shadow-lg mt-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;