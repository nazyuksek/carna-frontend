import React, { useEffect, useState } from 'react';
import './CoursesPage.scss';
import ArrowIcon from '../../assets/svg/BlackArrow.svg';
import BlueBook from '../../assets/png/BlueBook.png';
import DarkGrayBook from '../../assets/png/DarkGrayBook.png';
import LightGrayBook from '../../assets/png/LightGrayBook.png';
import YellowBook from '../../assets/png/YellowBook.png';
import TeachingImage from '../../assets/png/image.png';
import BackArrow from '../../assets/svg/BackArrow.svg';
import CourseImage from '../../assets/png/CourseImage.png';
import QuestionPage from '../QuestionPage/QuestionPage';
import { useAuthStore } from '../../store/store';

interface CourseCardProps {
    image: string;
    courseName: string;
    description: string;
    progress: number;
    deadline: string;
    onClick: () => void;
}
interface CourseModalProps {
    name: string;
    moduleOutcomes: string[];
}

const CoursesPage = () => {
    const { accessToken, refreshToken, logoutUser } = useAuthStore();

    useEffect(() => {
        console.log(accessToken);
    }, []);
    const [isCoursesModalOpen, setCoursesModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({
        courseName: '',
        outcomes: ['']
    });
    const [courseStarted, setCourseStarted] = useState<boolean>(false);

    useEffect(() => {
        if (courseStarted) {
            window.location.href = '/course';
        }
    }, [courseStarted]);

    const CourseModal = ({ name, moduleOutcomes }: CourseModalProps) => {
        return (
            <div className="CourseModal">
                <div className="arrow-top">
                    <div className="arrow-container" onClick={() => setCoursesModalOpen(false)}>
                        <img src={BackArrow} alt="back" />
                    </div>
                </div>

                <div className="CourseModal__card-container">
                    <img src={CourseImage} alt="img" />
                    <span className="course-name">{name}</span>
                    <div className="CourseModal__card">
                        <span>In this module, you will learn: </span>
                        <ul>
                            {moduleOutcomes.map((el) => (
                                <li>{el}</li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="continue-button"
                        onClick={() => {
                            setCourseStarted(true);
                            setCoursesModalOpen(false);
                        }}
                    >
                        Continue
                    </div>
                </div>
            </div>
        );
    };

    const CourseCard = ({
        image,
        courseName,
        description,
        progress,
        deadline,
        onClick
    }: CourseCardProps) => {
        return (
            <div className="CourseCard">
                {isCoursesModalOpen && (
                    <CourseModal
                        name={selectedCourse.courseName}
                        moduleOutcomes={selectedCourse.outcomes}
                    ></CourseModal>
                )}
                <div className="course-and-title">
                    <div className="img-and-name">
                        <img src={image} alt="book" />
                        <div>
                            <div>
                                <span className="name">{courseName}</span>
                                <span className="description">{description}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="arrow-container-mobile"
                        onClick={() => {
                            setCoursesModalOpen(true);
                            onClick();
                        }}
                    >
                        <img className="arrow" src={ArrowIcon} alt="arrow" />
                    </div>
                </div>
                <div className="progress-and-bar">
                    <span>{progress}%</span>
                    <div className="progress-bar">
                        <div style={{ width: `${progress}%` }} className="progress"></div>
                    </div>
                </div>
                <div className="course-description-and-arrow">
                    <div>
                        <span className="deadline-title">Deadline: </span>
                        <span className="deadline">{deadline}</span>
                    </div>
                    <div className="arrow-container">
                        <div
                            onClick={() => {
                                setCoursesModalOpen(true);
                                onClick();
                            }}
                        >
                            <img className="arrow" src={ArrowIcon} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            className={isCoursesModalOpen ? 'CoursesPage-modal CoursesPage' : 'CoursesPage'}
            data-testid="CoursesPage"
        >
            <div className="CoursesPage__courses">
                <div className="title-and-button">
                    <span className="CoursesPage__title">Assigned Courses</span>
                    <div
                        onClick={() => {
                            logoutUser();
                            window.location.href = '/login';
                        }}
                    >
                        Log Out
                    </div>
                </div>
                <div className="course-cards-container">
                    <div className="course-cards-row">
                        <CourseCard
                            image={BlueBook}
                            courseName="FAMILY AT THE AIRPORT"
                            description="A1 Beginner Lesson 1"
                            progress={5}
                            deadline="1 Nov 22"
                            onClick={() => {
                                setSelectedCourse({
                                    courseName: 'FAMILY AT THE AIRPORT',
                                    outcomes: [
                                        'to talk about members of your family',
                                        'to ask for and give personal information',
                                        'to say where you are from',
                                        'to talk about nationalities',
                                        'to talk about countries',
                                        'to describe people'
                                    ]
                                });
                            }}
                        ></CourseCard>
                        <CourseCard
                            image={YellowBook}
                            courseName="NATIONALITIES AND CONTINENTS"
                            description="B2 Upper Intermediate Lesson 1"
                            progress={22}
                            deadline="2 Nov 22"
                            onClick={() => {
                                setSelectedCourse({
                                    courseName: 'NATIONALITIES AND CONTINENTS',
                                    outcomes: [
                                        'countries and continents',
                                        'adjctives describing origin',
                                        'to ask for and give personal information',
                                        'to talk about nationalities',
                                        'to say where you are from',
                                        'to describe people'
                                    ]
                                });
                            }}
                        ></CourseCard>
                        <CourseCard
                            image={DarkGrayBook}
                            courseName="PLACES AROUND THE WORLD"
                            description="A2 Elementary Lesson 26"
                            progress={48}
                            deadline="8 Nov 22"
                            onClick={() => {
                                setSelectedCourse({
                                    courseName: 'PLACES AROUND THE WORLD',
                                    outcomes: [
                                        'describing a (strange) place',
                                        'places around the world',
                                        'greetings and introductions',
                                        'asking for and giving personal information',
                                        'describing a place',
                                        'giving personal viewpoints'
                                    ]
                                });
                            }}
                        ></CourseCard>
                    </div>
                    <div className="course-cards-row">
                        <CourseCard
                            image={LightGrayBook}
                            courseName="TRAVEL ABROAD"
                            description="B1 Intermediate Lesson 1"
                            progress={13}
                            deadline="10 Nov 22"
                            onClick={() => {
                                setSelectedCourse({
                                    courseName: 'TRAVEL ABROAD',
                                    outcomes: [
                                        'travel',
                                        'describing and asking about habits and routines or current actions',
                                        'expressing prohibition, obligation, suggestion',
                                        'discussing future plans',
                                        'describing a place'
                                    ]
                                });
                            }}
                        ></CourseCard>
                        <CourseCard
                            image={BlueBook}
                            courseName="ANGER CONTROL"
                            description="C1 Advanced Lesson 1"
                            progress={78}
                            deadline="7 Nov 22"
                            onClick={() => {
                                setSelectedCourse({
                                    courseName: 'ANGER CONTROL',
                                    outcomes: [
                                        'arguing and apologizing',
                                        'accepting and declining offers',
                                        'What makes you angry?',
                                        'Do you often lose your temper?',
                                        'How do you control your feelings?'
                                    ]
                                });
                            }}
                        ></CourseCard>
                    </div>
                </div>
                <div className="teach-img">
                    <img src={TeachingImage} />
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
