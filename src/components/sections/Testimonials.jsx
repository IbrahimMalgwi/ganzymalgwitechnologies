// src/components/sections/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';
import { FaStar, FaArrowLeft, FaArrowRight, FaPlayCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [activeVideo, setActiveVideo] = useState(null);
    const [muted, setMuted] = useState(true);

    // Auto-play testimonials with continuous loop
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 4000); // Slightly faster for better flow

        return () => clearInterval(timer);
    }, [isAutoPlaying]); // Removed testimonials.length dependency

    const nextTestimonial = () => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const prevTestimonial = () => {
        setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const togglePlayPause = () => {
        setIsAutoPlaying(prev => !prev);
    };

    const goToSlide = (index) => {
        setActiveTestimonial(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const stats = [
        { value: '98%', label: 'Client Satisfaction', icon: '😊' },
        { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
        { value: '35+', label: 'Projects Delivered', icon: '🚀' },
        { value: '100%', label: 'Would Recommend', icon: '💯' }
    ];

    const videoTestimonials = [
        {
            id: 1,
            title: "Prime Microfinance CEO",
            subtitle: "Funke Adekoya shares her experience",
            duration: "2:45",
            thumbnail: "/assets/img/testimonials/video-thumb-1.jpg"
        },
        {
            id: 2,
            title: "TechSolutions Ltd Review",
            subtitle: "David Adebayo on our partnership",
            duration: "3:20",
            thumbnail: "/assets/img/testimonials/video-thumb-2.jpg"
        }
    ];

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#0F009A] opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full translate-x-40 translate-y-40"></div>
            {/*<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#0F009A] opacity-3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>*/}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="CLIENT TESTIMONIALS"
                        title="Trusted by Industry Leaders"
                        description="Discover why businesses across various industries choose Ganzy-Malgwi Technologies as their technology partner"
                        centered
                    />
                </div>

                {/* Stats Overview - Modern Design */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F009A] to-[#6A00FF]"></div>
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-2xl lg:text-3xl font-bold text-[#0F009A] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Featured Testimonials Carousel - Continuous Loop */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                Client Reviews
                            </h3>
                            <p className="text-gray-600">
                                Hear what our clients have to say about working with us
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="relative h-64"> {/* Fixed height for smooth transitions */}
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out ${
                                            index === activeTestimonial
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 translate-x-8'
                                        }`}
                                    >
                                        <div className="flex items-start space-x-4 h-full">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-[#0F009A] border-opacity-10"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={`w-4 h-4 ${
                                                                i < testimonial.rating
                                                                    ? 'text-yellow-400'
                                                                    : 'text-gray-300'
                                                            }`}
                                                        />
                                                    ))}
                                                    <span className="ml-2 text-sm text-gray-500">
                                                        {testimonial.rating}/5
                                                    </span>
                                                </div>
                                                <blockquote className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                                                    "{testimonial.content}"
                                                </blockquote>
                                                <div>
                                                    <div className="font-bold text-gray-800">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-[#0F009A] font-medium text-sm">
                                                        {testimonial.position}, {testimonial.company}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Controls */}
                            <div className="border-t border-gray-100 p-4 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-1">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                    index === activeTestimonial
                                                        ? 'bg-[#0F009A] scale-125'
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={prevTestimonial}
                                            className="p-2 text-gray-600 hover:text-[#0F009A] transition-colors duration-300 rounded-lg hover:bg-gray-200"
                                            aria-label="Previous testimonial"
                                        >
                                            <FaArrowLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={togglePlayPause}
                                            className="p-2 text-gray-600 hover:text-[#0F009A] transition-colors duration-300 rounded-lg hover:bg-gray-200"
                                            aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
                                        >
                                            {isAutoPlaying ? '❚❚' : '▶'}
                                        </button>
                                        <button
                                            onClick={nextTestimonial}
                                            className="p-2 text-gray-600 hover:text-[#0F009A] transition-colors duration-300 rounded-lg hover:bg-gray-200"
                                            aria-label="Next testimonial"
                                        >
                                            <FaArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Testimonials */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                Video Stories
                            </h3>
                            <p className="text-gray-600">
                                Watch our clients share their success stories
                            </p>
                        </div>

                        <div className="space-y-6">
                            {videoTestimonials.map((video) => (
                                <div key={video.id} className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="relative">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <button
                                            onClick={() => setActiveVideo(video)}
                                            className="absolute inset-0 w-full h-full flex items-center justify-center group"
                                        >
                                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                    <FaPlayCircle className="w-12 h-12 text-white" />
                                                </div>
                                            </div>
                                        </button>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-black/75 text-white p-3 rounded-lg transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <h4 className="font-bold text-sm">{video.title}</h4>
                                                <p className="text-xs text-gray-300">{video.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-xs">
                                            {video.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                                Ready to Write Your Success Story?
                            </h3>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-[#0F009A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Start Your Project Today
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0F009A] transition-all duration-300">
                                    Schedule a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl max-w-4xl w-full relative overflow-hidden">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 bg-[#0F009A] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#0D0085] transition-colors duration-300 z-10 shadow-lg"
                        >
                            ×
                        </button>

                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <FaPlayCircle className="w-20 h-20 text-white/50 mx-auto mb-4" />
                                    <p className="text-lg font-semibold">{activeVideo.title}</p>
                                    <p className="text-white/70">{activeVideo.subtitle}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{activeVideo.title}</h3>
                                    <p className="text-gray-600">{activeVideo.subtitle}</p>
                                </div>
                                <button
                                    onClick={() => setMuted(!muted)}
                                    className="p-3 text-gray-600 hover:text-[#0F009A] transition-colors duration-300"
                                >
                                    {muted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;