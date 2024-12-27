import React from 'react';
import ShowMovies from './components/ShowMovies';
import DetailMovie from './components/DetailMovie';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <div className="flex items-center justify-center flex-col w-100%">
            <Header />
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<ShowMovies />} />
                    <Route path="/movie/:id" element={<DetailMovie />} /> {/* Chi tiết phim */}
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
