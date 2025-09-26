import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div>
                        <SectionTitle
                            tag="START A PROJECT"
                            title="Book your free consultation now"
                        />

                        <p className="text-lg text-gray-700 mb-6">
                            Schedule a 30-min with Javaplus Explained and let's discuss:
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">•</span>
                                <span className="text-gray-700"><strong>Your business:</strong> We want to hear all about you, your business, and your brilliant ideas.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">•</span>
                                <span className="text-gray-700"><strong>Javaplus:</strong> How we work, our processes, custom solutions and subscriptions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 font-bold mr-3">•</span>
                                <span className="text-gray-700"><strong>The next steps:</strong> Let's chat about custom solutions and how we will solve your business problems.</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {['facebook', 'twitter', 'google', 'linkedin', 'youtube', 'instagram'].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className={`w-10 h-10 rounded flex items-center justify-center text-white ${
                                        platform === 'facebook' ? 'bg-blue-600' :
                                            platform === 'twitter' ? 'bg-blue-400' :
                                                platform === 'google' ? 'bg-red-500' :
                                                    platform === 'linkedin' ? 'bg-blue-700' :
                                                        platform === 'youtube' ? 'bg-red-600' :
                                                            'bg-pink-600'
                                    } hover:opacity-80 transition duration-300`}
                                >
                                    {platform.charAt(0).toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Full name: <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name Surname"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Your Email: <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Your Phone: <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+234-808888888888"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Services <span className="text-red-500">*</span></label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                >
                                    <option value="">Please Select</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="Web App">Web App</option>
                                    <option value="Support">Support</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Let's get started <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project"
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary py-3 rounded-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;