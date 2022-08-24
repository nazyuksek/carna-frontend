import React, { useEffect } from 'react';
import './CoursesPage.scss';
import { useLocation } from 'react-router-dom';

const CoursesPage = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('CoursesPage is loaded');
        return () => {
            console.log('CoursesPage is unloaded');
        };
    }, [location]);

    return (
        <div className="CoursesPage" data-testid="CoursesPage">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>CoursesPage Page</h1>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
