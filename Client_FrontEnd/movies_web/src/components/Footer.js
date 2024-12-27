import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8 w-full">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 MovieApp. All Rights Reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="/about" className="hover:text-blue-400">
                        Về chúng tôi
                    </a>
                    <a href="/contact" className="hover:text-blue-400">
                        Liên hệ
                    </a>
                    <a href="/terms" className="hover:text-blue-400">
                        Điều khoản
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
