import React, { useEffect, useState } from 'react';
import { updateTypePredicateNodeWithModifier } from 'typescript';
import QuestionPage from '../../pages/QuestionPage/QuestionPage';
import AnswerModal from '../AnswerModal/AnswerModal';
import './ChooseCorrectOptionQuestion.scss';

export interface ChooseCorrectOptionQuestionProps {
    label?: string;
    title: string;
    question: string;
    options: string;
    answers: string;
    onClick: () => void;
}

interface AnswerCardProps {
    sentence: string;
    onClick: () => void;
    isSelected: boolean;
}

const ChooseCorrectOptionQuestion = ({
    label,
    title,
    question,
    options,
    answers,
    onClick
}: ChooseCorrectOptionQuestionProps) => {
    const [splittedQuestion, setSplittedQuestion] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>('');
    const [isFirstCardSelected, setIsFirstCardSelected] = useState<boolean>(false);
    const [isSecondCardSelected, setIsSecondCardSelected] = useState<boolean>(false);
    const [isAnswerChoosen, setIsAnswerChoosen] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [count, setCount] = useState(0);

    const AnswerCard = ({ sentence, onClick, isSelected }: AnswerCardProps) => {
        const chooseClass = () => {
            if (!isSelected) {
                return 'AnswerCard';
            } else {
                if (isAnswerCorrect === null) {
                    return 'AnswerCard-blue';
                } else if (isAnswerCorrect === false) {
                    return 'AnswerCard-red';
                } else {
                    return 'AnswerCard-blue';
                }
            }
        };
        return (
            <div className={chooseClass()} onClick={onClick}>
                <span>{sentence}</span>
            </div>
        );
    };

    const splitQuestion = (): string[] => {
        return question.split('#');
    };

    const getAnswer = (): string => {
        return answers.split('\\u0022')[1];
    };

    const getOptions = (): string[] => {
        return [options.split('\\u0022')[1], options.split('\\u0022')[3]];
    };

    //split the second part of question
    const getFirstPart = (): string[] => {
        return splittedQuestion[1].split(' ');
    };

    const getSecondPart = (): string[] => {
        return splittedQuestion[1].split(' ');
    };

    const isCorrectAnswer = (index: number) => {
        if (getOptions()[index] === getAnswer()) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        setSplittedQuestion(splitQuestion());
        setAnswer(getAnswer());
    }, []);

    return (
        <div className="ChooseCorrectOptionQuestion" data-testid="ChooseCorrectOptionQuestion">
            <div className="container">
                <div className="ChooseCorrectOptionQuestion__question-container">
                    <span className="title">{title}</span>
                </div>
                <div
                    className={
                        isAnswerChoosen
                            ? 'ChooseCorrectOptionQuestion__question ChooseCorrectOptionQuestion__question--selected'
                            : 'ChooseCorrectOptionQuestion__question'
                    }
                >
                    <div className="question-sentence">{splittedQuestion[0]}</div>
                    <AnswerCard
                        isSelected={isFirstCardSelected}
                        sentence={getOptions()[0]}
                        onClick={() => {
                            setIsAnswerChoosen(true);
                            setIsFirstCardSelected(true);
                            setIsSecondCardSelected(false);
                        }}
                    ></AnswerCard>
                    <span>/</span>
                    <AnswerCard
                        isSelected={isSecondCardSelected}
                        sentence={getOptions()[1]}
                        onClick={() => {
                            setIsAnswerChoosen(true);
                            setIsFirstCardSelected(false);
                            setIsSecondCardSelected(true);
                        }}
                    ></AnswerCard>
                    <div className="question-sentence">{splittedQuestion[1]}</div>
                </div>
            </div>
            <div className="modal-and-button">
                {isAnswerCorrect !== null && (
                    <AnswerModal
                        isAnswerCorrect={isAnswerChoosen && isAnswerCorrect ? true : false}
                        correctAnswer={getAnswer()}
                    ></AnswerModal>
                )}
                <div
                    className="continue-button"
                    onClick={() => {
                        setCount(count + 1);
                        if (isFirstCardSelected) {
                            if (isCorrectAnswer(0)) {
                                setIsAnswerCorrect(true);
                            } else {
                                setIsAnswerCorrect(false);
                            }
                        } else {
                            if (isCorrectAnswer(1)) {
                                setIsAnswerCorrect(true);
                            } else {
                                setIsAnswerCorrect(false);
                            }
                        }
                        if (count == 1) {
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

export default ChooseCorrectOptionQuestion;
