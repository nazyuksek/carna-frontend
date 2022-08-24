import React, { useEffect, useState } from 'react';
import { updateTypePredicateNodeWithModifier } from 'typescript';
import QuestionPage from '../../pages/QuestionPage/QuestionPage';
import './ChooseCorrectOptionQuestion.scss';

export interface ChooseCorrectOptionQuestionProps {
    label?: string;
    title: string;
    question: string;
    options: string;
    answers: string;
}

interface AnswerCardProps {
    sentence: string;
    isRightAnswer: boolean;
}

const AnswerCard = ({ sentence, isRightAnswer }: AnswerCardProps) => {
    const [isTrueCard, setTrueCard] = useState<boolean | null>(null);

    const [isClickable, setClickable] = useState<boolean>(true);

    const onClick = () => {
        if (isRightAnswer) {
            setTrueCard(true);
        } else {
            setTrueCard(false);
        }
        setClickable(false);
    };

    const chooseClassName = () => {
        if (isTrueCard === null) {
            return 'AnswerCard';
        } else if (isTrueCard) {
            return 'AnswerCard-blue AnswerCard-notclickable';
        } else {
            return 'AnswerCard-red AnswerCard-notclickable';
        }
    };

    return (
        <div className={chooseClassName()} onClick={onClick}>
            <span>{sentence}</span>
        </div>
    );
};

const ChooseCorrectOptionQuestion = ({
    label,
    title,
    question,
    options,
    answers
}: ChooseCorrectOptionQuestionProps) => {
    const [splittedQuestion, setSplittedQuestion] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>('');

    const splitQuestion = (): string[] => {
        return question.split('#');
    };

    const getAnswer = (): string => {
        return answers.split('\\u0022')[1];
    };

    const getOptions = (): string[] => {
        return [options.split('\\u0022')[1], options.split('\\u0022')[3]];
    };

    useEffect(() => {
        setSplittedQuestion(splitQuestion());
        setAnswer(getAnswer());
    }, []);

    return (
        <div className="ChooseCorrectOptionQuestion" data-testid="ChooseCorrectOptionQuestion">
            <div className="ChooseCorrectOptionQuestion__question-container">
                <span className="title">{title}</span>
            </div>
            <div className="ChooseCorrectOptionQuestion__question">
                <span className="question-sentence">{splittedQuestion[0]}</span>
                <AnswerCard
                    isRightAnswer={getOptions()[0] === getAnswer()}
                    sentence={getOptions()[0]}
                ></AnswerCard>
                <span>/</span>
                <AnswerCard
                    isRightAnswer={getOptions()[1] === getAnswer()}
                    sentence={getOptions()[1]}
                ></AnswerCard>
                <span className="question-sentence">{splittedQuestion[1]}</span>
            </div>
        </div>
    );
};

export default ChooseCorrectOptionQuestion;
