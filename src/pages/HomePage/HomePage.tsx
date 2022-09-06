import React, { useEffect } from 'react';
import { useAuthStore } from '../../store/store';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="HomePage" data-testid="HomePage">
            <div>Home Page</div>
        </div>
    );
};

export default HomePage;
