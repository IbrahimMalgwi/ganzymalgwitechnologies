 // src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import PortfolioCard from '../ui/PortfolioCard';
import { portfolioItems } from '../../data/portfolio';
import { FaSearch, FaExternalLinkAlt, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeProject, setActiveProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const portfolioCategories = [
        { id: 'all', name: 'All Projects', count: portfolioItems.length },
        { id: 'web', name: 'Web Applications', count: portfolioItems.filter(p => p.category === 'web').length },
        { id: 'mobile', name: 'Mobile Apps', count: portfolioItems.filter(p => p.category === 'mobile').length },
        { id: 'fintech', name: 'FinTech', count: portfolioItems.filter(p => p.category === 'fintech').length },
        { id: 'ecommerce', name: 'E-Commerce', count: portfolioItems.filter(p => p.category === 'ecommerce').length }
    ];

    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    // Pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredItems.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredItems.length / projectsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const stats = [
        { value: '35+', label: 'Projects Completed' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '12+', label: 'Industries Served' },
        { value: '5+', label: 'Years Experience' }
    ];

    return (
        <section id="portfolio" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 -translate-y-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="OUR PORTFOLIO"
                        title="Showcasing Our Excellence"
                        description="Explore our diverse portfolio of successful projects that demonstrate our expertise in delivering innovative software solutions across various industries."
                        centered
                    />
                </div>

                {/* Portfolio Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="text-3xl lg:text-4xl font-bold text-[#0F009A] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {portfolioCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveFilter(category.id);
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === category.id
                                    ? 'bg-[#0F009A] text-white shadow-lg shadow-[#0F009A]/25'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200'
                            }`}
                        >
                            {category.name}
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                activeFilter === category.id
                                    ? 'bg-white/20'
                                    : 'bg-gray-100'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                    {currentProjects.map((item, index) => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            index={index}
                            onViewDetails={() => setActiveProject(item)}
                        />
                    ))}
                </div>

                {/* No Projects Message */}
                {currentProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaSearch className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
                        <p className="text-gray-600">Try selecting a different category</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-4 mt-12">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 border border-gray-200 shadow-lg"
                            aria-label="Previous page"
                        >
                            <FaArrowLeft className="w-5 h-5" />
                        </button>

                        <div className="flex space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => {
                                        setCurrentPage(index + 1);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                                        currentPage === index + 1
                                            ? 'bg-[#0F009A] text-white shadow-lg'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="p-3 rounded-full bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 border border-gray-200 shadow-lg"
                            aria-label="Next page"
                        >
                            <FaArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let's create something amazing together. Contact us to discuss your project ideas and get a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                                Start a Project
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F009A] transition-all duration-300">
                                View All Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Detail Modal */}
            {activeProject && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 bg-[#0F009A] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0D0085] transition-colors duration-300 z-10"
                            >
                                ×
                            </button>

                            <img
                                src={activeProject.image}
                                alt={activeProject.title}
                                className="w-full h-64 object-cover rounded-t-2xl"
                            />

                            <div className="p-6 lg:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-[#0F009A] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {activeProject.category}
                                    </span>
                                    <div className="flex space-x-3">
                                        {activeProject.liveUrl && (
                                            <a
                                                href={activeProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-[#0F009A] hover:text-[#0D0085] transition-colors duration-300"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4 mr-1" />
                                                Live Demo
                                            </a>
                                        )}
                                        {activeProject.githubUrl && (
                                            <a
                                                href={activeProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
                                            >
                                                <FaGithub className="w-4 h-4 mr-1" />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                                    {activeProject.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {activeProject.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.technologies?.map((tech, index) => (
                                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-2">Key Features</h4>
                                        <ul className="space-y-1">
                                            {activeProject.features?.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <span className="w-2 h-2 bg-[#0F009A] rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Project Results */}
                                {activeProject.results && (
                                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                        <h4 className="font-bold text-gray-800 mb-3">Project Results</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {activeProject.results.map((result, index) => (
                                                <div key={index} className="text-center">
                                                    <div className="text-2xl font-bold text-[#0F009A]">{result.value}</div>
                                                    <div className="text-sm text-gray-600">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;