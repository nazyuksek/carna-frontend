import React from 'react';
import './ProfileImageComponent.scss';
import ProfileImage from '../../assets/png/ProfileImage.png';

export interface ProfileImageComponentProps {
    label?: string;
}

const ProfileImageComponent = ({ label }: ProfileImageComponentProps) => {
    return (
        <div className="ProfileImageComponent" data-testid="ProfileImageComponent">
            <div>
                <img src={ProfileImage} alt="profile-img" />
            </div>
        </div>
    );
};

export default ProfileImageComponent;
