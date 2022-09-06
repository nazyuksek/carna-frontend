import React, { useEffect, useState } from 'react';
import './QuestionPage.scss';
import { useLocation } from 'react-router-dom';
import CourseNameAndProgress from '../../components/CourseNameAndProgress/CourseNameAndProgress';
import ChooseCorrectOptionQuestion from '../../components/ChooseCorrectOptionQuestion/ChooseCorrectOptionQuestion';
import FillInTheBlanksQuestion from '../../components/FillInTheBlanksQuestion/FillInTheBlanksQuestion';
import TrueFalseQuestion from '../../components/TrueFalseQuestion/TrueFalseQuestion';

const QuestionPage = () => {
    const [step, setStep] = useState(1);
    return (
        <div className="QuestionPage" data-testid="QuestionPage">
            <CourseNameAndProgress
                courseName="Summer Holiday"
                progressPercentage={50}
                onClick={() => (window.location.href = '/courses')}
            ></CourseNameAndProgress>
            {step === 1 && (
                <ChooseCorrectOptionQuestion
                    title="Choose the correct option."
                    question="I # my friends at 7 pm on Friday."
                    options="[[\u0022meet\u0022, \u0022am meeting\u0022]]"
                    answers="['\u0022am meeting\u0022']"
                    onClick={() => setStep(2)}
                ></ChooseCorrectOptionQuestion>
            )}
            {step === 2 && (
                <TrueFalseQuestion
                    title="Choose the correct option."
                    trueAnswer="true"
                    onClick={() => setStep(3)}
                ></TrueFalseQuestion>
            )}
            {step === 3 && (
                <FillInTheBlanksQuestion
                    onClick={() => (window.location.href = '/courses')}
                    title="Fill in the gaps."
                ></FillInTheBlanksQuestion>
            )}
        </div>
    );
};

export default QuestionPage;
