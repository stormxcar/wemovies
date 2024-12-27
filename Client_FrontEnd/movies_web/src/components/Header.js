import React from "react";

function Header() {
    return (
        <header className="flex items-center justify-between bg-gray-800 p-4 text-white w-full">
            {/* Logo */}
            <div className="text-2xl font-bold">
                <a href="/">Movies</a>
            </div>

            {/* Thanh tìm kiếm */}
            <div className="flex items-center w-1/2">
                <input
                    type="text"
                    placeholder="Tìm kiếm phim..."
                    className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
                />
                <button className="bg-blue-500 rounded-r-lg hover:bg-blue-600 w-[100px] py-2 text-center">
                    Tìm kiếm
                </button>
            </div>

            {/* Ảnh đại diện */}
            <div className="flex items-center">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="rounded-full w-10 h-10"
                />
            </div>
        </header>
    );
}

export default Header;
