import React, { useState } from 'react';
import AnswerModal from '../AnswerModal/AnswerModal';
import './FillInTheBlanksQuestion.scss';

export interface FillInTheBlanksQuestionProps {
    label?: string;
    title: string;
    onClick: () => void;
}

const FillInTheBlanksQuestion = ({ label, title, onClick }: FillInTheBlanksQuestionProps) => {
    const [isAnswerChoosen, setIsAnswerChoosen] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [firstAnswer, setFirstAnswer] = useState<string | null>(null);
    const [secondAnswer, setSecondAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string>('are and are');
    const [clickCount, setClickCount] = useState(0);

    const checkAnswer = (): boolean => {
        if (firstAnswer?.toLowerCase() + ' and ' + secondAnswer?.toLowerCase() === correctAnswer) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="FillInTheBlanksQuestion" data-testid="FillInTheBlanksQuestion">
            <div className="container">
                <div className="FillInTheBlanksQuestion__question-container">
                    <span className="title">{title}</span>
                </div>
                <div className="FillInTheBlanksQuestion__question">
                    <div className="first-part">
                        <div>
                            <span>A: </span>
                            <input type="text" onChange={(e) => setFirstAnswer(e.target.value)} />
                        </div>
                        <span> the Taylors at the airport?</span>
                    </div>
                    <div className="second-part">
                        <span>B: Yes, they </span>
                        <input type="text" onChange={(e) => setSecondAnswer(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="modal-and-button">
                {isAnswerChoosen && (
                    <AnswerModal
                        isAnswerCorrect={isAnswerChoosen && isAnswerCorrect ? true : false}
                        correctAnswer={correctAnswer}
                    ></AnswerModal>
                )}
                <div
                    className="continue-button"
                    onClick={() => {
                        setIsAnswerChoosen(true);
                        if (clickCount === 2) {
                            onClick();
                        }
                        setClickCount(clickCount + 1);
                        if (checkAnswer()) {
                            setIsAnswerCorrect(true);
                        } else {
                            setIsAnswerCorrect(false);
                        }
                    }}
                >
                    Continue
                </div>
            </div>
        </div>
    );
};

export default FillInTheBlanksQuestion;
