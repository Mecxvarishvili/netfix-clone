import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ProfileContainer from './ProfileContainer';

const ProfileSelectPage = () => {
    const profiles = [1, 2, 3, 4, 5]
    return (
        <div className="profile-select-page d-flex align-items-center text-secondary flex-column" >
            <div>Who's watching?</div>
            <div className='profiles-cont d-flex flex-wrap justify-content-center' >
                {profiles.map((data, i) => (
                    <ProfileContainer key={i} />
                ))}
            </div>
            <div>
                <Button className="border border-1 border-secondary rounded-0" >Manage Profiles</Button>
            </div>
        </div>
    );
};

export default ProfileSelectPage;