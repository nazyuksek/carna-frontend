import React from 'react';
import './App.scss';
import SideMenu from './components/SideMenu/SideMenu';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import SignInScreen from './pages/SignInScreen/SignInScreen';

function App() {
    return (
        <div className="App">
            {/* <SignInScreen></SignInScreen> */}
            {/* <QuestionPage></QuestionPage> */}
            <SideMenu></SideMenu>
        </div>
    );
}

export default App;
