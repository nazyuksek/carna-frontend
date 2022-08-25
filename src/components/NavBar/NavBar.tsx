import React, { useState } from 'react';
import './NavBar.scss';
import HamburgerIcon from '../../assets/svg/Top.svg';
import CrossIcon from '../../assets/svg/cross-menu.svg';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import HomeIcon from '../../assets/svg/home.svg';
import LibraryIcon from '../../assets/svg/library.svg';
import CoursesIcon from '../../assets/svg/courses.svg';
import ReviewIcon from '../../assets/svg/review.svg';
import HomeIconSelected from '../../assets/svg/home-selected.svg';
import LibraryIconSelected from '../../assets/svg/library-selected.svg';
import CoursesIconSelected from '../../assets/svg/courses-selected.svg';
import ReviewIconSelected from '../../assets/svg/reports-selected.svg';

export interface NavBarProps {
    label?: string;
}

const NavBar = ({ label }: NavBarProps) => {
    const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState('home');
    const variants = {
        open: { opacity: 1, transition: { duration: 0.5 } },
        closed: { opacity: 0, transition: { duration: 0.5 } }
    };
    return (
        <div className="NavBar" data-testid="NavBar">
            <div className="NavBar__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div onClick={() => setIsSlideOpen(!isSlideOpen)} className="NavBar__menu">
                <AnimatePresence key="menuopen">
                    <motion.img
                        animate={isSlideOpen ? 'open' : 'closed'}
                        variants={variants}
                        src={CrossIcon}
                        alt="close"
                        className="close-icon"
                    />
                    <motion.img
                        animate={isSlideOpen ? 'closed' : 'open'}
                        variants={variants}
                        src={HamburgerIcon}
                        alt="menu"
                        className="hamburger-icon"
                    />
                </AnimatePresence>
                <AnimatePresence key="bottommenu">
                    {isSlideOpen && (
                        <motion.div
                            animate={{ x: 0 }}
                            initial={{ x: '100%' }}
                            exit={{
                                x: '100%',
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            transition={{ duration: 0.5 }}
                            className="NavBar__side"
                        >
                            <div className="links">
                                <div
                                    className={selectedItem === 'home' ? 'link-selected' : 'link'}
                                    onClick={() => {
                                        setSelectedItem('home');
                                        setIsSlideOpen(false);
                                    }}
                                >
                                    {selectedItem === 'home' ? (
                                        <img src={HomeIconSelected} alt="home" />
                                    ) : (
                                        <img src={HomeIcon} alt="home" />
                                    )}
                                    Home
                                </div>
                                <div
                                    className={
                                        selectedItem === 'courses' ? 'link-selected' : 'link'
                                    }
                                    onClick={() => {
                                        setSelectedItem('courses');
                                        setIsSlideOpen(false);
                                    }}
                                >
                                    {selectedItem === 'courses' ? (
                                        <img src={CoursesIconSelected} alt="courses" />
                                    ) : (
                                        <img src={CoursesIcon} alt="courses" />
                                    )}
                                    Courses
                                </div>
                                <div
                                    className={
                                        selectedItem === 'library' ? 'link-selected' : 'link'
                                    }
                                    onClick={() => {
                                        setSelectedItem('library');
                                        setIsSlideOpen(false);
                                    }}
                                >
                                    {selectedItem === 'library' ? (
                                        <img src={LibraryIconSelected} alt="library" />
                                    ) : (
                                        <img src={LibraryIcon} alt="library" />
                                    )}
                                    Library
                                </div>

                                <div
                                    className={
                                        selectedItem === 'reports' ? 'link-selected' : 'link'
                                    }
                                    onClick={() => {
                                        setSelectedItem('reports');
                                        setIsSlideOpen(false);
                                    }}
                                >
                                    {selectedItem === 'reports' ? (
                                        <img src={ReviewIconSelected} alt="reports" />
                                    ) : (
                                        <img src={ReviewIcon} alt="reports" />
                                    )}
                                    Reports
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NavBar;
