import React from 'react';
import ShowMovies from './components/ShowMovies';
import DetailMovie from './components/DetailMovie';
import CategoryMovies from './components/CategoryMovies';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <div className="flex items-center justify-center flex-col w-100%">


            <Router>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<ShowMovies />} />
                    <Route path="/category/:categoryName" element={<CategoryMovies/>} />
                    <Route path="/movie/:id" element={<DetailMovie />} /> {/* Chi tiết phim */}
                    <Route path="/movies/:categoryName" element={<CategoryMovies />} />
                    <Route path="/search" element={<Search />} />
                    {/*auth*/}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
