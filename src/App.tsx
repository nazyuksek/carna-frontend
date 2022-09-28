import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import SignInScreen from './pages/SignInScreen/SignInScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import ProfileImageComponent from './components/ProfileImageComponent/ProfileImageComponent';
import { useAuthStore } from './store/store';

function App() {
    const { accessToken, refreshToken, isLoggedIn } = useAuthStore();

    const ProtectedRoute = ({ children }: any) => {
        if (!isLoggedIn) {
            return <Navigate to="/login" />;
        }
        console.log(children);
        return children;
    };

    return (
        <div className="App">
            {isLoggedIn && window.location.pathname !== '/course' && (
                <>
                    <SideMenu></SideMenu>
                    <NavBar></NavBar>
                </>
            )}
            <BrowserRouter>
                <Routes>
                    {!isLoggedIn && <Route path="/" element={<SignInScreen />}></Route>}
                    {!isLoggedIn && <Route path="/login" element={<SignInScreen />}></Route>}
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoute>
                                <CoursesPage />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/course"
                        element={
                            <ProtectedRoute>
                                <QuestionPage />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/reports"
                        element={
                            <ProtectedRoute>
                                <ReportsPage />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/library"
                        element={
                            <ProtectedRoute>
                                <LibraryPage />
                            </ProtectedRoute>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
