import React, { useEffect } from 'react';
import './QuestionPage.scss';
import { useLocation } from 'react-router-dom';
import CourseNameAndProgress from '../../components/CourseNameAndProgress/CourseNameAndProgress';
import ChooseCorrectOptionQuestion from '../../components/ChooseCorrectOptionQuestion/ChooseCorrectOptionQuestion';

const QuestionPage = () => {
    return (
        <div className="QuestionPage" data-testid="QuestionPage">
            <CourseNameAndProgress
                courseName="Summer Holiday"
                progressPercentage={50}
                onClick={() => console.log()}
            ></CourseNameAndProgress>
            <ChooseCorrectOptionQuestion
                title="Choose the correct option."
                question="I # my friends at 7 pm on Friday."
                options="[[\u0022meet\u0022, \u0022am meeting\u0022]]"
                answers="['\u0022am meeting\u0022']"
            ></ChooseCorrectOptionQuestion>
        </div>
    );
};

export default QuestionPage;
