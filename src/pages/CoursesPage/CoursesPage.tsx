import React, { useEffect } from 'react';
import './CoursesPage.scss';
import { useLocation } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';
import ArrowIcon from '../../assets/svg/BlackArrow.svg';
import BlueBook from '../../assets/png/BlueBook.png';
import DarkGrayBook from '../../assets/png/DarkGrayBook.png';
import LightGrayBook from '../../assets/png/LightGrayBook.png';
import YellowBook from '../../assets/png/YellowBook.png';

interface CourseCardProps {
    image: string;
    courseName: string;
    description: string;
    progress: number;
    deadline: string;
}

const CoursesPage = () => {
    const CourseCard = ({
        image,
        courseName,
        description,
        progress,
        deadline
    }: CourseCardProps) => {
        return (
            <div className="CourseCard">
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
                    <div className="arrow-container-mobile">
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
                        <img className="arrow" src={ArrowIcon} alt="arrow" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="CoursesPage" data-testid="CoursesPage">
            <div className="CoursesPage__courses">
                <span className="CoursesPage__title">Assigned Courses</span>
                <div className="course-cards-container">
                    <div className="course-cards-row">
                        <CourseCard
                            image={BlueBook}
                            courseName="FAMILY AT THE AIRPORT"
                            description="A1 Beginner Lesson 1"
                            progress={5}
                            deadline="1 Nov 22"
                        ></CourseCard>
                        <CourseCard
                            image={YellowBook}
                            courseName="NATIONALITIES AND CONTINENTS"
                            description="B2 Upper Intermediate Lesson 1"
                            progress={22}
                            deadline="2 Nov 22"
                        ></CourseCard>
                        <CourseCard
                            image={DarkGrayBook}
                            courseName="PLACES AROUND THE WORLD"
                            description="A2 Elementary Lesson 26"
                            progress={48}
                            deadline="8 Nov 22"
                        ></CourseCard>
                    </div>
                    <div className="course-cards-row">
                        <CourseCard
                            image={LightGrayBook}
                            courseName="TRAVEL ABROAD"
                            description="B1 Intermediate Lesson 1"
                            progress={13}
                            deadline="10 Nov 22"
                        ></CourseCard>
                        <CourseCard
                            image={BlueBook}
                            courseName="ANGER CONTROL"
                            description="C1 Advanced Lesson 1"
                            progress={78}
                            deadline="7 Nov 22"
                        ></CourseCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
