import React from 'react';
import './Test.scss';

export interface TestProps {
    label?: string;
}

const Test = ({ label }: TestProps) => {
    return (
        <div className="Test" data-testid="Test">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>{label}</h1>
                </div>
            </div>
        </div>
    );
};

export default Test;
