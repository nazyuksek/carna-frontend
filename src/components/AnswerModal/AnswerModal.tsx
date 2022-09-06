import React from 'react';
import './AnswerModal.scss';

export interface AnswerModalProps {
    label?: string;
    isAnswerCorrect: boolean | null;
    correctAnswer: string;
}

const AnswerModal = ({ label, isAnswerCorrect, correctAnswer }: AnswerModalProps) => {
    return (
        <div className="AnswerModal" data-testid="AnswerModal">
            <div className="container">
                <div className="answer">
                    {isAnswerCorrect && <span className="correct">Correct!</span>}
                    {!isAnswerCorrect && <span className="wrong">Wrong!</span>}
                    {!isAnswerCorrect && <span>Correct answer is "{correctAnswer}". </span>}
                </div>
            </div>
        </div>
    );
};

export default AnswerModal;
