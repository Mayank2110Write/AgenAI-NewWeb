import React from 'react';
import { curve } from "../assets";

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-br from-purple-900/30 to-black text-white min-h-screen">
            {/* Hero Section with Gradient Overlay */}
            <section className="relative h-auto py-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10"></div>
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-50"></div>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <h1 className="h1 mb-6">
                        Empowering Your AI Journey with{" "}
                        <span className="inline-block relative">
                            AgenAi{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Your Partner in AI Innovation
                    </p>
                </div>
            </section>

            {/* Mission Statement Card */}
            <section className="px-6">
                <div className="container mx-auto">
                    <div className="rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
                            To provide innovative AI tools and services that are accessible, reliable, and impactful,
                            enabling businesses of all sizes to thrive in the digital age.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">What Sets Us Apart</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
                            <p className="text-gray-300 text-center">
                                We prioritize forward-thinking and creativity in everything we do, constantly pushing the boundaries of what's possible with AI.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-center">Integrity</h3>
                            <p className="text-gray-300 text-center">
                                We build trust through transparency and ethical practices, ensuring responsible development and implementation of AI technologies.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-center">Customer Focus</h3>
                            <p className="text-gray-300 text-center">
                                Our clients are at the heart of our solutions and strategies, with tailor-made approaches designed to meet specific needs and challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
                    <div className='flex'>
                        {/* Team member cards... */}
                        {/* (Keep the team section unchanged) */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <footer className="text-white py-12">
                <div className="container mx-28 px-6 md:px-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-gray-400">AgenAI Offices, Dighi, Pune</p>
                                        <p className="text-gray-400">Maharashtra, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-gray-400">+91 8605482768</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-gray-400">contactus@agenai.cloud</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} AgenAI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
