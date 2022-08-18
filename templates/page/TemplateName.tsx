import React, { useEffect } from 'react';
import './TemplateName.scss';
import { useLocation } from 'react-router-dom';

const TemplateName = () => {
    const location = useLocation();

    useEffect(() => {
        console.log('TemplateName is loaded');
        return () => {
            console.log('TemplateName is unloaded');
        };
    }, [location]);

    return (
        <div className="TemplateName" data-testid="TemplateName">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>TemplateName Page</h1>
                </div>
            </div>
        </div>
    );
};

export default TemplateName;
