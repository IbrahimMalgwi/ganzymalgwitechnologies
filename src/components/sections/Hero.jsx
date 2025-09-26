import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
    const slides = [
        {
            title: "BESPOKE SOLUTIONS TAILORED FOR CUSTOMERS' NEEDS",
            description: "We add value to your business through innovative experiences without losing focus on the customer's need. We design, develop and support software solutions for all businesses.",
            image: "/assets/img/banner/pi.png"
        },
        // ... other slides
    ];

    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="pt-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="container-custom">
                <div className="min-h-screen flex items-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-xl text-blue-100">
                                {slides[currentSlide].description}
                            </p>
                            <Button
                                href="#service"
                                variant="primary"
                                icon={FaLongArrowAltRight}
                                iconPosition="right"
                            >
                                Our Services
                            </Button>
                        </div>
                        {/* ... rest of component */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;