import React, { useState } from 'react';
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
    return (
        <div className="SideMenu" data-testid="SideMenu">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                <span>Carna</span>
            </div>
            <SideMenuItem
                image={selectedItem === 'home' ? HomeIconSelected : HomeIcon}
                text="Home"
                isSelected={selectedItem === 'home'}
                onClick={() => setSelectedItem('home')}
            ></SideMenuItem>
            <SideMenuItem
                image={selectedItem === 'courses' ? CoursesIconSelected : CoursesIcon}
                text="Courses"
                isSelected={selectedItem === 'courses'}
                onClick={() => setSelectedItem('courses')}
            ></SideMenuItem>
            <SideMenuItem
                image={selectedItem === 'reports' ? ReviewIconSelected : ReviewIcon}
                text="Reports"
                isSelected={selectedItem === 'reports'}
                onClick={() => setSelectedItem('reports')}
            ></SideMenuItem>
            <SideMenuItem
                image={selectedItem === 'library' ? LibraryIconSelected : LibraryIcon}
                text="Library"
                isSelected={selectedItem === 'library'}
                onClick={() => setSelectedItem('library')}
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
