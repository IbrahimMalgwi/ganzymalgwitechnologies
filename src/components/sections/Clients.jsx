import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { clients } from '../../data/clients';

const Clients = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <SectionTitle
                        title="Clients We've Worked With"
                        description="Here are some of the clients we have worked with, delivering some of our finest services."
                        centered
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
                    {clients.map((client) => (
                        <div key={client.id} className="flex justify-center">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;