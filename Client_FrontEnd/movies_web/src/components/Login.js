import React from "react";

function Login() {
    return (
        <div className="bg-gray-800 text-white py-4 mt-8 w-full">
            <div className="container mx-auto text-center">
                <input type="text" placeholder="Username" className="p-2 m-2" />
                <input type="password" placeholder="Password" className="p-2 m-2" />
                <button className="bg-blue-500 p-2 m-2">Login</button>
            </div>
        </div>
    );
}

export default Login;
