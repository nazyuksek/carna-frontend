import React from 'react';
import './CourseNameAndProgress.scss';

export interface CourseNameAndProgressProps {
    label?: string;
}

const CourseNameAndProgress = ({ label }: CourseNameAndProgressProps) => {
    return (
        <div className="CourseNameAndProgress" data-testid="CourseNameAndProgress">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>{label}</h1>
                </div>
            </div>
        </div>
    );
};

export default CourseNameAndProgress;
