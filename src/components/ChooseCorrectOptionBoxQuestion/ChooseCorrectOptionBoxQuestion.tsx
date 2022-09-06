import React from 'react';
import './ChooseCorrectOptionBoxQuestion.scss';

export interface ChooseCorrectOptionBoxQuestionProps {
    label?: string;
}

const ChooseCorrectOptionBoxQuestion = ({ label }: ChooseCorrectOptionBoxQuestionProps) => {
    return (
        <div className="ChooseCorrectOptionBoxQuestion" data-testid="ChooseCorrectOptionBoxQuestion">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8">
                    <h1>{label}</h1>
                </div>
            </div>
        </div>
    );
};

export default ChooseCorrectOptionBoxQuestion;
