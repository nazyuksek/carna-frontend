import React from 'react';
import './FillInTheBlanksQuestion.scss';

export interface FillInTheBlanksQuestionProps {
    label?: string;
    title: string;
    onClick: () => void;
}

const FillInTheBlanksQuestion = ({ label, title, onClick }: FillInTheBlanksQuestionProps) => {
    return (
        <div className="FillInTheBlanksQuestion" data-testid="FillInTheBlanksQuestion">
            <div className="container">
                <div className="FillInTheBlanksQuestion__question-container">
                    <span className="title">{title}</span>
                </div>
                <div className="FillInTheBlanksQuestion__question">
                    <div>
                        <span>A: </span>
                        <input type="text" />
                        <span> the Taylors at the airport?</span>
                    </div>
                    <div>
                        <span>B: Yes, they </span>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="continue-button" onClick={onClick}>
                Continue
            </div>
        </div>
    );
};

export default FillInTheBlanksQuestion;
