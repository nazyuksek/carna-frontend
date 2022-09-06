import React, { useEffect, useState } from 'react';
import './SignInScreen.scss';
import Email from '../../assets/svg/mail.svg';
import Password from '../../assets/svg/password.svg';
import Logo from '../../assets/svg/Logo.svg';
import Facebook from '../../assets/svg/Facebook.svg';
import Google from '../../assets/svg/Google.svg';
import Yellow from '../../assets/png/Yellow.png';
import Blue from '../../assets/png/Blue.png';
import YellowMobile from '../../assets/png/YellowMobile.png';
import BlueMobile from '../../assets/png/BlueMobile.png';
import { login } from '../../providers/providers';
import { useAuthStore } from '../../store/store';

const SignInScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setAccessToken, accessToken } = useAuthStore();

    const handleLogin = async () => {
        let res = await login({ email, password })
            .then((res) => {
                setAccessToken(res.accessToken);
                console.log(accessToken);
                if (accessToken !== '') {
                    alert();
                    window.location.href = '/home';
                }
            })
            .catch((e) => console.log('e:' + e));
    };

    return (
        <div className="SignInScreen" data-testid="SignInScreen">
            <div className="yellow-img">
                <img src={Yellow} />
            </div>
            <div className="blue-img">
                <img src={Blue} />
            </div>
            <div className="yellow-img-mobile">
                <img src={YellowMobile} />
            </div>
            <div className="blue-img-mobile">
                <img src={BlueMobile} />
            </div>
            <div className="SignInScreen__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="SignInScreen__title-container">
                <div className="title-controller">
                    <span className="title">Sign in to</span>
                    <br></br>
                    <span className="title">your account</span>
                </div>
            </div>
            <div className="SignInScreen__inputs">
                <form>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <div className="input-and-image">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="Email"
                            />
                            <img className="input-image" src={Email} alt="email" />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <div className="input-and-image">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                name="Password"
                            />
                            <img className="input-image" src={Password} alt="password" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="forgot-password">
                <span>Forgot password</span>
            </div>
            <div className="sign-up-options">
                <span>Or by using</span>
                <div className="options">
                    <div>
                        <img src={Google} />
                    </div>
                    <div>
                        <img src={Facebook} />
                    </div>
                </div>
            </div>
            <div onClick={async () => await handleLogin()} className="button">
                Sign In
            </div>
            <div className="not-user">
                <span>Not a Carna user?</span>
                <span className="sign-up">Sign-up</span>
            </div>
        </div>
    );
};

export default SignInScreen;
