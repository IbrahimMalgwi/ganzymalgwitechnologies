// src/components/sections/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [activeVideo, setActiveVideo] = useState(null);

    // Auto-play testimonials
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

    const videoTestimonials = [
        {
            id: 1,
            title: "GTI Microfinance CEO",
            duration: "2:45",
            thumbnail: "/assets/img/testimonials/video-thumb-1.jpg"
        },
        {
            id: 2,
            title: "Arravo Ltd Project Review",
            duration: "3:20",
            thumbnail: "/assets/img/testimonials/video-thumb-2.jpg"
        }
    ];

    const stats = [
        { value: '98%', label: 'Client Satisfaction' },
        { value: '4.9/5', label: 'Average Rating' },
        { value: '35+', label: 'Projects Delivered' },
        { value: '100%', label: 'Would Recommend' }
    ];

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 -translate-y-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="CLIENT SUCCESS STORIES"
                        title="What Our Clients Say"
                        description="Don't just take our word for it. Here's what our valued clients have to say about their experience working with JavaPlus Innovations."
                        centered
                    />
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

                {/* Main Testimonial Carousel */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Carousel Header */}
                        <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <FaQuoteLeft className="w-6 h-6" />
                                    <h3 className="text-xl font-bold">Client Testimonials</h3>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={prevTestimonial}
                                        className="p-2 text-white hover:text-blue-200 transition-colors duration-300"
                                        aria-label="Previous testimonial"
                                    >
                                        <FaArrowLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={togglePlayPause}
                                        className="p-2 text-white hover:text-blue-200 transition-colors duration-300"
                                        aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
                                    >
                                        {isAutoPlaying ? '❚❚' : '▶'}
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="p-2 text-white hover:text-blue-200 transition-colors duration-300"
                                        aria-label="Next testimonial"
                                    >
                                        <FaArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="p-8 lg:p-12">
                            <div className="relative overflow-hidden">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={testimonial.id}
                                        className={`transition-all duration-500 ease-in-out ${
                                            index === activeTestimonial
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 absolute inset-0 translate-x-8'
                                        }`}
                                    >
                                        {/* Rating Stars */}
                                        <div className="flex items-center mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i < testimonial.rating
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                            <span className="ml-2 text-gray-600 font-medium">
                                                {testimonial.rating}/5 Rating
                                            </span>
                                        </div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                                            "{testimonial.content}"
                                        </blockquote>

                                        {/* Client Info */}
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-[#0F009A] border-opacity-10"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-800 text-lg">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-[#0F009A] font-medium">
                                                    {testimonial.position}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                    {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex justify-center space-x-2 mt-8 pt-8 border-t border-gray-200">
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
                        </div>
                    </div>
                </div>

                {/* Video Testimonials Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            Video Testimonials
                        </h3>
                        <p className="text-gray-600">
                            Watch our clients share their experiences in their own words
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {videoTestimonials.map((video) => (
                            <div key={video.id} className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <button
                                            onClick={() => setActiveVideo(video)}
                                            className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        >
                                            <FaPlayCircle className="w-16 h-16 text-white opacity-90 hover:opacity-100 transition-opacity duration-300" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-800 mb-2">{video.title}</h4>
                                    <p className="text-gray-600 text-sm">Client success story</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Testimonials Grid */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                            More Client Feedback
                        </h3>
                        <p className="text-gray-600">
                            Read what other clients have to say about working with us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Ready to Become Our Next Success Story?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join our growing list of satisfied clients and experience the JavaPlus difference for yourself.
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

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full relative">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-4 -right-4 bg-[#0F009A] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0D0085] transition-colors duration-300 z-10"
                        >
                            ×
                        </button>
                        <div className="aspect-video bg-gray-200 rounded-t-2xl flex items-center justify-center">
                            <div className="text-center">
                                <FaPlayCircle className="w-16 h-16 text-[#0F009A] opacity-50 mx-auto mb-4" />
                                <p className="text-gray-600">Video Testimonial: {activeVideo.title}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{activeVideo.title}</h3>
                            <p className="text-gray-600">Client testimonial video playback</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );

    function togglePlayPause() {
        setIsAutoPlaying(prev => !prev);
    }
};

export default Testimonials;