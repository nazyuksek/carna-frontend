import React, { useState } from 'react';
import './TrueFalseQuestion.scss';
import Correct from '../../assets/svg/BlueTick.svg';
import Incorrect from '../../assets/svg/RedTick.svg';
import AnswerModal from '../AnswerModal/AnswerModal';

export interface TrueFalseQuestionProps {
    label?: string;
    title: string;
    trueAnswer: string;
    onClick: () => void;
}

const TrueFalseQuestion = ({ label, title, trueAnswer, onClick }: TrueFalseQuestionProps) => {
    const [isTrueSelected, setTrueSelected] = useState<boolean>(false);
    const [isFalseSelected, setFalseSelected] = useState<boolean>(false);
    const [isAnswerChoosen, setIsAnswerChoosen] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [count, setCount] = useState(0);

    const checkAnswer = (): boolean => {
        if (isTrueSelected && trueAnswer === 'true') {
            return true;
        } else if (isFalseSelected && trueAnswer === 'false') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="TrueFalseQuestion" data-testid="TrueFalseQuestion">
            <div className="container">
                <div className="TrueFalseQuestion__question-container">
                    <span className="title">{title}</span>
                </div>
                <div className="TrueFalseQuestion__question">
                    <span className="question">Is Angela ready?</span>
                    <span className="answer">No, she isn't ready.</span>
                    <div
                        className={
                            isAnswerChoosen
                                ? 'true-false-buttons--selected true-false-buttons'
                                : 'true-false-buttons'
                        }
                    >
                        <div
                            onClick={() => {
                                setTrueSelected(true);
                                setFalseSelected(false);
                            }}
                            className={isTrueSelected ? 'single-button--selected' : 'single-button'}
                        >
                            {isTrueSelected && isAnswerCorrect !== null && (
                                <div className="tick-container">
                                    <img src={isAnswerCorrect ? Correct : Incorrect} />
                                </div>
                            )}
                            <span>True</span>
                        </div>
                        <div
                            onClick={() => {
                                setFalseSelected(true);
                                setTrueSelected(false);
                            }}
                            className={
                                isFalseSelected ? 'single-button--selected' : 'single-button'
                            }
                        >
                            {isFalseSelected && isAnswerCorrect !== null && (
                                <div className="tick-container">
                                    <img src={isAnswerCorrect ? Correct : Incorrect} />
                                </div>
                            )}
                            <span>False</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-and-button">
                {isAnswerChoosen && (
                    <AnswerModal
                        isAnswerCorrect={isAnswerChoosen && isAnswerCorrect ? true : false}
                        correctAnswer={trueAnswer}
                    ></AnswerModal>
                )}
                <div
                    className="continue-button"
                    onClick={() => {
                        setIsAnswerChoosen(true);
                        setCount(count + 1);
                        if (checkAnswer()) {
                            setIsAnswerCorrect(true);
                        } else {
                            setIsAnswerCorrect(false);
                        }
                        if (count === 1) {
                            onClick();
                        }
                    }}
                >
                    Continue
                </div>
            </div>
        </div>
    );
};

export default TrueFalseQuestion;
