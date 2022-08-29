import React, { useEffect, useState } from 'react';
import './SideMenu.scss';
import Logo from '../../assets/svg/Logo.svg';
import HomeIcon from '../../assets/svg/home.svg';
import LibraryIcon from '../../assets/svg/library.svg';
import CoursesIcon from '../../assets/svg/courses.svg';
import ReviewIcon from '../../assets/svg/review.svg';
import HomeIconSelected from '../../assets/svg/home-selected.svg';
import LibraryIconSelected from '../../assets/svg/library-selected.svg';
import CoursesIconSelected from '../../assets/svg/courses-selected.svg';
import ReviewIconSelected from '../../assets/svg/reports-selected.svg';
import ArrowIcon from '../../assets/svg/arrow.svg';
import BookImage from '../../assets/png/book.png';

export interface SideMenuProps {
    label?: string;
}

interface SideMenuItemProps {
    image: string;
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

const SideMenuItem = ({ image, text, isSelected, onClick }: SideMenuItemProps) => {
    return (
        <div className={isSelected ? 'SideMenuItem-selected' : 'SideMenuItem'} onClick={onClick}>
            <img className="SideMenuItem__image" src={image} alt="img" />
            <span>{text}</span>
        </div>
    );
};

const SideMenu = ({ label }: SideMenuProps) => {
    const [selectedItem, setSelectedItem] = useState('home');
    const [path, setPath] = useState<'/' | '/courses' | '/reports' | '/library'>('/');

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                return setPath('/');
            case '/courses':
                return setPath('/courses');
            case '/reports':
                return setPath('/reports');
            case '/library':
                return setPath('/library');
            default:
                break;
        }
    }, [location]);

    return (
        <div className="SideMenu" data-testid="SideMenu">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                <span>Carna</span>
            </div>
            <SideMenuItem
                image={path === '/' ? HomeIconSelected : HomeIcon}
                text="Home"
                isSelected={path === '/'}
                onClick={() => {
                    setSelectedItem('home');
                    window.location.href = '/';
                }}
            ></SideMenuItem>
            <SideMenuItem
                image={path === '/courses' ? CoursesIconSelected : CoursesIcon}
                text="Courses"
                isSelected={path === '/courses'}
                onClick={() => {
                    setSelectedItem('courses');
                    window.location.href = '/courses';
                }}
            ></SideMenuItem>
            <SideMenuItem
                image={path === '/reports' ? ReviewIconSelected : ReviewIcon}
                text="Reports"
                isSelected={path === '/reports'}
                onClick={() => {
                    setSelectedItem('reports');
                    window.location.href = '/reports';
                }}
            ></SideMenuItem>
            <SideMenuItem
                image={path === '/library' ? LibraryIconSelected : LibraryIcon}
                text="Library"
                isSelected={path === '/library'}
                onClick={() => {
                    setSelectedItem('library');
                    window.location.href = '/library';
                }}
            ></SideMenuItem>

            <div className="SideMenu__card">
                <div className="app-card">
                    <img className="book-img" src={BookImage} alt="book" />
                    <span>Download our mobile app</span>
                    <img className="arrow-img" src={ArrowIcon} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
