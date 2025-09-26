import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PortfolioCard from '../ui/PortfolioCard';
import { portfolioItems } from '../../data/portfolio';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section-padding bg-blue-600 text-white">
            <div className="container-custom">
                <div className="flex justify-between items-center mb-12">
                    <SectionTitle
                        tag="Latest Case Studies"
                        title="Our Recent Case Studies"
                        className="text-white"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;