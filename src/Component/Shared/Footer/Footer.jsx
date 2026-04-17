import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#285943] text-white py-20 px-4 text-center">

            {/* Title */}
            <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-sm opacity-80 mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>

            {/* Social Links */}
            <div className="mb-12">
                <p className="mb-4 text-lg">Social Links</p>

                <div className="flex justify-center gap-4">
                    <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
                        <FaYoutube />
                    </button>

                    <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
                        <FaFacebookF />
                    </button>

                    <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
                        <FaXTwitter />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-70 max-w-5xl mx-auto">

                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;