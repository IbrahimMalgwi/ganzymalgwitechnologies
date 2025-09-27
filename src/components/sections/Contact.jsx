// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 5000);
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Call Us',
            details: ['+234 815 254 6005', '+234 815 254 6005'],
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            details: ['info@ganzymalgwitechnologies.com', 'ganzymalgwitechnologies@gmail.com'],
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Us',
            details: ['Commercial, Avenue', 'Sabo, Lagos, Nigeria'],
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: ['Mon - Fri: 7:00 - 17:00', 'Sat: 7:00 - 12:00'],
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const socialLinks = [
        { icon: FaFacebookF, url: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
        { icon: FaTwitter, url: '#', color: 'hover:bg-blue-400', label: 'Twitter' },
        { icon: FaLinkedinIn, url: '#', color: 'hover:bg-blue-700', label: 'LinkedIn' },
        { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600', label: 'Instagram' },
        { icon: FaYoutube, url: '#', color: 'hover:bg-red-600', label: 'YouTube' },
        { icon: FaWhatsapp, url: '#', color: 'hover:bg-green-500', label: 'WhatsApp' }
    ];

    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F009A] opacity-5 rounded-full translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F009A] opacity-5 rounded-full -translate-x-40 translate-y-40"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <SectionTitle
                        tag="GET IN TOUCH"
                        title="Let's Start Your Project"
                        description="Ready to transform your ideas into reality? Schedule a free consultation and let's discuss how we can help your business grow."
                        centered
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Consultation Info */}
                        <div className="bg-gradient-to-br from-[#0F009A] to-[#6A00FF] rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Free 30-Min Consultation</h3>
                            <p className="text-blue-100 mb-6">
                                Let's discuss your project goals and how we can help you achieve them with our expert solutions.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="flex-1"><strong>Your Business:</strong> We'll learn about your unique challenges and opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="flex-1"><strong>Our Solutions:</strong> Discover how our expertise can drive your success</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="flex-1"><strong>Next Steps:</strong> Get a clear roadmap for your project implementation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Methods Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                                            <IconComponent className="text-white text-lg" />
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                                            aria-label={social.label}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        {/* Success Message */}
                        {isSubmitted && (
                            <div className="absolute inset-0 bg-white bg-opacity-95 rounded-2xl flex items-center justify-center z-10 p-8">
                                <div className="text-center">
                                    <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-4">
                                        Thank you for contacting us. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#0F009A] font-semibold hover:text-[#0D0085] transition-colors duration-300"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-gradient-to-r from-[#0F009A] to-[#6A00FF] p-6 text-white">
                                <h3 className="text-xl font-bold flex items-center">
                                    <FaPaperPlane className="w-5 h-5 mr-2" />
                                    Send us a Message
                                </h3>
                                <p className="text-blue-100 text-sm mt-1">
                                    Fill out the form below and we'll contact you shortly
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+234 800 000 0000"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Service Needed <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200"
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Software Development">Software Development</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="IT Consulting">IT Consulting</option>
                                            <option value="Support & Maintenance">Support & Maintenance</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Project Details <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project requirements, goals, and timeline..."
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0F009A] focus:ring-2 focus:ring-[#0F009A] focus:ring-opacity-20 transition duration-200 resize-none"
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#0F009A] to-[#6A00FF] text-white py-4 rounded-lg font-semibold hover:from-[#0D0085] hover:to-[#5A00D9] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0F009A]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;