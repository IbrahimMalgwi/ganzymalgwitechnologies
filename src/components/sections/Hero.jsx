import React, { useState, useEffect, useCallback } from "react";
import { FaLongArrowAltRight, FaPlay, FaPause, FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";
import { heroSlides } from "../../data/hero";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = heroSlides.map(
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
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 8000);
    }, []);

    const togglePlayPause = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    // Auto-play effect
    useEffect(() => {
        if (isLoading) return;

        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isPlaying, isLoading]);

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
            {/* 🔹 Updated Welcome Banner */}
            <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#0F009A] to-[#6A00FF] text-white py-3 overflow-hidden z-30 shadow-lg">
                <div className="whitespace-nowrap animate-marquee text-center text-sm md:text-base font-semibold tracking-wider">
                    <span className="inline-flex items-center space-x-4">
                        <span>🚀</span>
                        <span>WELCOME TO GANZY-MALGWI TECHNOLOGIES — ICT • RENEWABLE ENERGY • SECURITY SOLUTIONS</span>
                        <span>🚀</span>
                    </span>
                </div>
            </div>

            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {heroSlides.map((slide, index) => (
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
                            {/* Light overlay for better text readability */}
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered Text Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 lg:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white space-y-6 lg:space-y-8 max-w-6xl mx-auto">
                        {/* Service Area Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 animate-fade-in">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-semibold text-white uppercase tracking-wide">
                                {heroSlides[currentSlide].area}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-shadow-lg animate-slide-up">
                            {heroSlides[currentSlide].title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto animate-slide-up animation-delay-300">
                            {heroSlides[currentSlide].subtitle}
                        </p>

                        {/* Service Features */}
                        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto animate-fade-in animation-delay-500">
                            {heroSlides[currentSlide].features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-white text-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

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
                                Explore Services
                            </Button>

                            <Button
                                href="#contact"
                                variant="outline"
                                size="large"
                                className="whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-[#0F009A]"
                            >
                                Start a Project
                            </Button>

                            <Button
                                href="#training"
                                variant="ghost"
                                size="large"
                                className="whitespace-nowrap text-white hover:bg-white hover:bg-opacity-10"
                            >
                                Training Programs
                            </Button>
                        </div>

                        {/* Stats Section - Updated for your business */}
                        <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 mt-8 border-t border-white border-opacity-30 animate-fade-in animation-delay-1000">
                            {[
                                { number: "3", label: "Core Services" },
                                { number: "180+", label: "Happy Clients" },
                                { number: "35+", label: "Projects Completed" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-gray-200 text-sm lg:text-base font-medium">{stat.label}</div>
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

                    {/* Slide Indicators with Service Names */}
                    <div className="flex space-x-3 items-center">
                        {heroSlides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`flex flex-col items-center transition-all duration-300 ${
                                    index === currentSlide
                                        ? "scale-110"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                aria-label={`Go to ${slide.area} slide`}
                                aria-current={index === currentSlide ? "true" : "false"}
                            >
                                <div className={`w-3 h-3 rounded-full transition-all duration-300 mb-1 ${
                                    index === currentSlide
                                        ? "bg-white scale-125"
                                        : "bg-white bg-opacity-50"
                                }`} />
                                <span className="text-xs text-white font-medium hidden sm:block">
                                    {slide.area.split(' ')[0]}
                                </span>
                            </button>
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
                    Explore Services
                </span>
                <FaChevronDown className="w-4 h-4 animate-bounce-slow" />
            </button>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 -translate-y-40"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 translate-y-48"></div>
        </section>
    );
};

export default Hero;