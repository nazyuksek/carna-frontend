import React, { useEffect } from 'react';
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
    const { accessToken, refreshToken } = useAuthStore();

    // const ProtectedRoute = ({ children }: any) => {
    //     console.log(accessToken);
    //     alert();
    //     if (accessToken === '') {
    //         return <Navigate to="/login" />;
    //     }
    //     console.log(children);
    //     return children;
    // };

    return (
        <div className="App">
            {/* {accessToken !== '' && (
                <>
                    <SideMenu></SideMenu>
                    <NavBar></NavBar>
                </>
            )}
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<SignInScreen />}></Route>
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
            </BrowserRouter> */}
            <BrowserRouter>
                {window.location.pathname !== '/course' && (
                    <>
                        <SideMenu></SideMenu>
                        <NavBar></NavBar>
                    </>
                )}
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/courses" element={<CoursesPage />}></Route>
                    <Route path="/reports" element={<ReportsPage />}></Route>
                    <Route path="/library" element={<LibraryPage />}></Route>
                    <Route path="/course" element={<QuestionPage />}></Route>
                </Routes>
            </BrowserRouter>

            {/* <QuestionPage></QuestionPage> */}

            {/* <ProfileImageComponent></ProfileImageComponent> */}
            {/* <SignInScreen></SignInScreen> */}
        </div>
    );
}

export default App;
