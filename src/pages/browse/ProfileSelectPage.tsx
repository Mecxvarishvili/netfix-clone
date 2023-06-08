import Button from 'react-bootstrap/Button';
import { IoMdAddCircle } from 'react-icons/io';
import ProfileContainer from './ProfileContainer';

const ProfileSelectPage = () => {
    const profiles = [1, 2, 3, 4, ]
    return (
        <div className="profile-select-page min-vh-100 d-flex flex-wrap flex-column align-items-center justify-content-center text-secondary" >
            <div className="my-3 fs-2 text-white" >Who's watching?</div>
            <div className='profiles-cont d-flex flex-wrap justify-content-center my-3 mx-5' >
                {profiles.map((data, i) => (
                    <ProfileContainer key={i} />
                ))}
                {profiles.length < 5 && <div className="profile-cont" >
                    <div className="add-icon" > 
                        <IoMdAddCircle style={{fontSize: "100px"}} />
                    </div>
                    add profile
                </div>}
            </div>
            <div>
                <Button className="border border-1 border-secondary rounded-0 my-4" >Manage Profiles</Button>
            </div>
        </div>
    );
};

export default ProfileSelectPage;