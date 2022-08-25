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
}

const CoursesPage = () => {
    const CourseCard = ({ image, courseName, description }: CourseCardProps) => {
        return (
            <div className="CourseCard">
                <div className="course-and-title">
                    <img src={image} alt="book" />
                    <div>
                        <span className="name">{courseName}</span>
                        <span className="description">{description}</span>
                    </div>
                </div>
                <div className="course-description-and-arrow">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a sollicitudin
                        amet, adipiscing purus. Enim purus in pharetra gravida tincidunt purus.
                    </span>
                </div>
                <div className="arrow-container">
                    <img src={ArrowIcon} alt="arrow" />
                </div>
            </div>
        );
    };

    return (
        <div className="CoursesPage" data-testid="CoursesPage">
            <SideMenu></SideMenu>
            <div className="CoursesPage__courses">
                <span className="CoursesPage__title">Courses</span>
                <div className="course-cards-container">
                    <div className="course-cards-row">
                        <CourseCard
                            image={BlueBook}
                            courseName="Course 01"
                            description="Description"
                        ></CourseCard>
                        <CourseCard
                            image={YellowBook}
                            courseName="Course 02"
                            description="Description"
                        ></CourseCard>
                        <CourseCard
                            image={DarkGrayBook}
                            courseName="Course 03"
                            description="Description"
                        ></CourseCard>
                    </div>
                    <div className="course-cards-row">
                        <CourseCard
                            image={LightGrayBook}
                            courseName="Course 04"
                            description="Description"
                        ></CourseCard>
                        <CourseCard
                            image={BlueBook}
                            courseName="Course 05"
                            description="Description"
                        ></CourseCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
