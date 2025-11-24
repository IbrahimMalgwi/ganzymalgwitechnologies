// src/components/sections/About.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { FaPlay, FaCode, FaSolarPanel, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const coreServices = [
        {
            icon: FaCode,
            title: "ICT & Media",
            description: "Comprehensive digital solutions including web development, mobile apps, multimedia production, and IT networking.",
            features: ["Web Development", "Mobile Apps", "Multimedia", "IT Networking"],
            color: "from-blue-600 to-purple-600"
        },
        {
            icon: FaSolarPanel,
            title: "Renewable Energy",
            description: "Sustainable energy solutions with solar power systems, wind energy, and complete installation services.",
            features: ["Solar Systems", "Wind Energy", "Installation", "Consulting"],
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: FaShieldAlt,
            title: "Security Systems",
            description: "Advanced security solutions including CCTV, vehicle tracking, cybersecurity, and access control systems.",
            features: ["CCTV Systems", "Tracking", "Cybersecurity", "Access Control"],
            color: "from-orange-500 to-red-600"
        }
    ];

    const industries = [
        'Financial Services', 'Engineering', 'Healthcare', 'Start-ups',
        'Telecoms', 'Education', 'Retail & E-commerce', 'Insurance'
    ];

    return (
        <section id="about" className="section-padding bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#0F009A] opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full translate-x-40 translate-y-40"></div>

            <div className="container-custom relative z-10">
                {/* Centered Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="ABOUT GANZY-MALGWI TECHNOLOGIES"
                        title="Your Comprehensive Technology Partner"
                        description="Specializing in ICT Solutions, Renewable Energy, and Security Systems to drive your business forward"
                        centered
                    />
                </div>

                {/* Core Services Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Three pillars of excellence driving innovation across multiple industries
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {coreServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                        {/* Service Icon */}
                                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Service Title */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                            {service.title}
                                        </h3>

                                        {/* Service Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                            {service.description}
                                        </p>

                                        {/* Service Features */}
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <span
                                                    key={featureIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content - Text on Left, Images on Right */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Text Content - Left Side */}
                    <div className="space-y-8">
                        {/* Main Description */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <span className="font-semibold text-[#0F009A]">Ganzy-Malgwi Technologies</span> is a premier technology solutions provider with expertise across three core domains: ICT & Media, Renewable Energy, and Security Systems.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                We deliver integrated solutions that combine cutting-edge technology with deep industry expertise, helping businesses operate more effectively and sustainably in today's digital landscape.
                            </p>

                            {/* Additional Services */}
                            <div className="bg-gradient-to-br from-[#0F009A] to-[#6A00FF] p-6 rounded-2xl text-white shadow-lg">
                                <h4 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="w-2 h-6 bg-white rounded-full mr-3"></span>
                                    Training & Consultancy
                                </h4>
                                <p className="text-blue-100 leading-relaxed">
                                    We offer comprehensive training programs and consultancy services across all our service areas, empowering your team with the skills and knowledge needed for success.
                                </p>
                            </div>

                            {/* Industries We Serve */}
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="w-2 h-6 bg-[#0F009A] rounded-full mr-3"></span>
                                    Industries We Serve
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {industries.map((industry, index) => (
                                        <div key={index} className="flex items-center text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-[#0F009A] rounded-full mr-2"></span>
                                            {industry}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - Right Side */}
                    <div className="relative">
                        {/* Main Image Grid */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="space-y-4 lg:space-y-6">
                                <div className="relative group">
                                    <img
                                        src="/assets/img/tile-gallery/a2.jpg"
                                        alt="ICT Solutions Development"
                                        className="w-full h-56 lg:h-64 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#0F009A] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                                </div>
                                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xl">
                                    <h4 className="font-bold text-lg mb-2">Sustainable Energy</h4>
                                    <p className="text-sm opacity-90">Clean, renewable power solutions for a better future</p>
                                </div>
                            </div>

                            <div className="space-y-4 lg:space-y-6">
                                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-xl">
                                    <h4 className="font-bold text-lg mb-2">Total Security</h4>
                                    <p className="text-sm opacity-90">Comprehensive protection for your assets and data</p>
                                </div>
                                <div className="relative group">
                                    <img
                                        src="/assets/img/tile-gallery/470pic.jpg"
                                        alt="Technology Integration"
                                        className="w-full h-56 lg:h-64 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#0F009A] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float hidden lg:block"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-float animation-delay-1000 hidden lg:block"></div>

                        {/* Decorative Badge */}
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-2xl rounded-2xl p-4 rotate-12 border-2 border-[#0F009A] hidden lg:block">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#0F009A]">2018</div>
                                <div className="text-xs text-gray-600">Founded</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="text-center pt-16 border-t border-gray-200">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Our Commitment
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Driving innovation across multiple technology domains with a unified approach to excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Integrated Solutions",
                                description: "Seamlessly combining ICT, Energy, and Security solutions for comprehensive business transformation.",
                                color: "from-[#0F009A] to-[#6A00FF]"
                            },
                            {
                                title: "Expert Training",
                                description: "Empowering clients with knowledge and skills through specialized training programs in all service areas.",
                                color: "from-[#8B5CF6] to-[#C4B5FD]"
                            },
                            {
                                title: "End-to-End Support",
                                description: "From consultation to implementation and maintenance, we provide complete lifecycle support.",
                                color: "from-[#06B6D4] to-[#22D3EE]"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl mb-6 inline-block`}>
                                    <div className="bg-white rounded-xl p-3">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto`}>
                                            <span className="text-white text-lg font-bold">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoPlaying && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full p-6 relative">
                        <button
                            onClick={() => setIsVideoPlaying(false)}
                            className="absolute -top-4 -right-4 bg-[#0F009A] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0D0085] transition-colors duration-300"
                        >
                            ×
                        </button>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <FaPlay className="w-16 h-16 text-[#0F009A] opacity-50 mx-auto mb-4" />
                                <p className="text-gray-600">Company Introduction Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;