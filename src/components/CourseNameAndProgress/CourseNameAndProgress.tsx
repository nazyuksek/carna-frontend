import React from 'react';
import './CourseNameAndProgress.scss';
import Cross from '../../assets/svg/Cross.svg';

export interface CourseNameAndProgressProps {
    label?: string;
    courseName: string;
    progressPercentage: number;
    onClick: () => void;
}

const CourseNameAndProgress = ({
    label,
    courseName,
    progressPercentage,
    onClick
}: CourseNameAndProgressProps) => {
    return (
        <div className="CourseNameAndProgress" data-testid="CourseNameAndProgress">
            <div className="CourseNameAndProgress__name-container">
                <div className="cross-container-white"></div>
                <span className="course-name">{courseName}</span>
                <div className="cross-container" onClick={onClick}>
                    <img src={Cross} alt="cross" />
                </div>
            </div>
            <div className="progress-container">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
            <span className="completed-text">{progressPercentage}% completed</span>
        </div>
    );
};

export default CourseNameAndProgress;
