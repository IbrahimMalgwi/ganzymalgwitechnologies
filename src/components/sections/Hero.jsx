// src/components/sections/Hero.jsx
import React, { useState, useEffect, useCallback } from "react";
import { FaLongArrowAltRight, FaPlay, FaPause, FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";

const slides = [
    {
        title: "TECH SOLUTIONS TAILORED FOR CUSTOMERS' NEEDS",
        subtitle: "Innovative software solutions designed specifically for your business requirements",
        description: "We add value to your business through cutting-edge technology without losing focus on the customer's need. We design, develop and support software solutions for all businesses.",
        bgImage: "/assets/img/banner/pi.png",
    },
    {
        title: "DEVELOPED INNOVATIVE SOLUTIONS FOR ALL BUSINESSES",
        subtitle: "Custom software development and IT outsourcing services",
        description: "We are at the forefront of technology, providing custom software development for companies, small and large businesses, banks, and others.",
        bgImage: "/assets/img/banner/1.png",
    },
    {
        title: "ACHIEVE BUSINESS GOALS AND TARGETS",
        subtitle: "Minimum Viable Products and agile development sprints",
        description: "We build MVPs and test concepts with users via agile development sprints, delivering core value efficiently.",
        bgImage: "/assets/img/banner/5.png",
    },
];

const Hero = () => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = slides.map(
                (slide) =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = slide.bgImage;
                        img.onload = resolve;
                        img.onerror = reject;
                    })
            );

            try {
                await Promise.all(imagePromises);
                setIsLoading(false);
            } catch (error) {
                console.warn("Error preloading images:", error);
                setIsLoading(false);
            }
        };

        preloadImages();
    }, [slides]);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, [slides.length]);

    const togglePlayPause = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    // Auto-play effect
    useEffect(() => {
        if (isLoading) return;

        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isPlaying, slides.length, isLoading]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    event.preventDefault();
                    prevSlide();
                    break;
                case "ArrowRight":
                    event.preventDefault();
                    nextSlide();
                    break;
                case " ":
                    event.preventDefault();
                    togglePlayPause();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [prevSlide, nextSlide, togglePlayPause]);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("service");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (isLoading) {
        return (
            <section id="home" className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#0F009A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Loading...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-50">
            {/* 🔹 Scrolling Welcome Banner on Top */}
            <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#0F009A] to-[#6A00FF] text-white py-3 overflow-hidden z-30 shadow-lg">
                <div className="whitespace-nowrap animate-marquee text-center text-sm md:text-base font-semibold tracking-wider">
                    <span className="inline-flex items-center space-x-4">
                        <span>🚀</span>
                        <span>WELCOME TO GANZY-MALGWI TECHNOLOGIES — INNOVATIVE SOFTWARE SOLUTIONS TAILORED FOR YOUR BUSINESS NEEDS</span>
                        <span>🚀</span>
                    </span>
                </div>
            </div>

            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        aria-hidden={index !== currentSlide}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${slide.bgImage})`,
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                            }}
                        >
                            {/* Enhanced gradient overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(135deg, rgba(15, 0, 154, 0.85) 0%, rgba(106, 0, 255, 0.85) 50%, rgba(15, 0, 154, 0.95) 100%)",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered Text Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 lg:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white space-y-6 lg:space-y-8 max-w-6xl mx-auto">
                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-shadow-lg animate-slide-up">
                            {slides[currentSlide].title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto animate-slide-up animation-delay-300">
                            {slides[currentSlide].subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-500">
                            {slides[currentSlide].description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-700">
                            <Button
                                href="#service"
                                variant="primary"
                                size="large"
                                icon={FaLongArrowAltRight}
                                iconPosition="right"
                                className="whitespace-nowrap bg-gradient-to-r from-[#0F009A] to-[#6A00FF] hover:from-[#0D0085] hover:to-[#5A00D5]"
                            >
                                Our Services
                            </Button>

                            <Button
                                href="#contact"
                                variant="outline"
                                size="large"
                                className="whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-[#0F009A]"
                            >
                                Start a Project
                            </Button>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 mt-8 border-t border-white border-opacity-30 animate-fade-in animation-delay-1000">
                            {[
                                { number: "180+", label: "Happy Clients" },
                                { number: "35+", label: "Projects Done" },
                                { number: "5+", label: "Years Experience" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-blue-100 text-sm lg:text-base font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-4 lg:space-x-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 lg:px-6 lg:py-3 border border-white border-opacity-20">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="text-white hover:text-blue-300 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-10 transform hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlayPause}
                        className="text-white hover:text-blue-300 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-10 transform hover:scale-110"
                        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                        {isPlaying ? (
                            <FaPause className="w-4 h-4 lg:w-5 lg:h-5" />
                        ) : (
                            <FaPlay className="w-4 h-4 lg:w-5 lg:h-5" />
                        )}
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                    index === currentSlide
                                        ? "bg-white scale-125"
                                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentSlide ? "true" : "false"}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="text-white hover:text-blue-300 transition-all duration-300 p-2 rounded-full hover:bg-white hover:bg-opacity-10 transform hover:scale-110"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToNextSection}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex flex-col items-center space-y-2 text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 group"
                aria-label="Scroll to next section"
            >
                <span className="text-sm font-medium group-hover:translate-y-1 transition-transform">
                    Scroll Down
                </span>
                <FaChevronDown className="w-4 h-4 animate-bounce-slow" />
            </button>

            {/* Background Elements matching your design */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 -translate-y-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>

            {/* Floating Elements for Visual Interest */}
            <div className="absolute top-1/4 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-float animation-delay-300 hidden lg:block"></div>
            <div className="absolute bottom-1/3 right-16 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-float animation-delay-700 hidden lg:block"></div>
            <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-blue-400 rounded-full opacity-15 animate-float animation-delay-1000 hidden lg:block"></div>
        </section>
    );
};

export default Hero;