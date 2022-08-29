import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SideMenu from './components/SideMenu/SideMenu';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import SignInScreen from './pages/SignInScreen/SignInScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SideMenu></SideMenu>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/courses" element={<CoursesPage />}></Route>
                    <Route path="/reports" element={<ReportsPage />}></Route>
                    <Route path="/library" element={<LibraryPage />}></Route>
                </Routes>
            </BrowserRouter>
            {/* <SignInScreen></SignInScreen> */}
            {/* <QuestionPage></QuestionPage> */}

            {/* 
            <CoursesPage></CoursesPage> */}
        </div>
    );
}

export default App;
