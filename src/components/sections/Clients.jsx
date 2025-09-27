// src/components/sections/Clients.jsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import { clients } from '../../data/clients';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Clients = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "GTI Microfinance",
            role: "Financial Services",
            content: "JavaPlus delivered an exceptional banking platform that transformed our digital operations. Their expertise in fintech solutions is unmatched.",
            rating: 5
        },
        {
            name: "Arravo Ltd",
            role: "Technology Partner",
            content: "Working with JavaPlus has been one of the best IT decisions we made. Their team brings creativity and innovation to every project.",
            rating: 5
        },
        {
            name: "Union Bank",
            role: "Banking Institution",
            content: "The custom software solutions provided by JavaPlus have significantly improved our operational efficiency and customer experience.",
            rating: 5
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevTestimonial = () => {
        setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section id="clients" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#0F009A] opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="TRUSTED PARTNERS"
                        title="Clients We've Worked With"
                        description="We're proud to collaborate with industry leaders and innovative startups alike, delivering exceptional software solutions that drive success."
                        centered
                    />
                </div>

                {/* Client Logos Grid */}
                <div className="relative">
                    {/* Animated Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F009A]/5 to-transparent animate-pulse-slow"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 items-center relative z-10">
                        {clients.map((client, index) => (
                            <div
                                key={client.id}
                                className="group relative flex justify-center"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Hover Effect Container */}
                                <div className="relative p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                                    {/* Client Logo */}
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F009A] to-[#6A00FF] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                                    {/* Client Name Tooltip */}
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                        <div className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                                            {client.name}
                                        </div>
                                        <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-20 lg:mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                            What Our Clients Say
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what some of our valued clients have to say about working with us.
                        </p>
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
                            {/* Quote Icon */}
                            <div className="text-[#0F009A] text-4xl mb-6">
                                <FaQuoteLeft />
                            </div>

                            {/* Testimonial Content */}
                            <div className="relative overflow-hidden">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-500 ease-in-out ${
                                            index === activeTestimonial
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 absolute inset-0 translate-x-8'
                                        }`}
                                    >
                                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                                            {testimonial.content}
                                        </p>

                                        {/* Rating Stars */}
                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                                            ))}
                                        </div>

                                        {/* Client Info */}
                                        <div>
                                            <div className="font-bold text-gray-800 text-lg">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-[#0F009A] font-medium">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                                {/* Dots Indicator */}
                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setActiveTestimonial(index);
                                                setIsAutoPlaying(false);
                                                setTimeout(() => setIsAutoPlaying(true), 10000);
                                            }}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeTestimonial
                                                    ? 'bg-[#0F009A] scale-125'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex space-x-4">
                                    <button
                                        onClick={prevTestimonial}
                                        className="p-2 text-gray-400 hover:text-[#0F009A] transition-colors duration-300"
                                        aria-label="Previous testimonial"
                                    >
                                        <FaArrowLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="p-2 text-gray-400 hover:text-[#0F009A] transition-colors duration-300"
                                        aria-label="Next testimonial"
                                    >
                                        <FaArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 lg:mt-20">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Ready to Join Our Growing List of Happy Clients?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let's discuss how we can help transform your business with our innovative software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#0F009A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                                Start Your Project
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F009A] transition-all duration-300">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;