import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const ProfileSelect = () => {
    const profiles = [1, 2, 3, 4]
    return (
        <div className="d-flex align-items-center text-secondary flex-column" >
            <div>Who's watching?</div>
            <div>
                {profiles.map((data, i) => (
                    <div className='profile d-flex flex-column align-items-center' key={i}>
                        <Image src={"http://occ-0-769-768.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTqCB8uh6vUUpjPnmHk3iGyky27lLiL16NEFLBfZ4Kdaf9n0lOJFHM72muckX62W7XgI7MGhWwu9ki-vHV_hUJ2odJOr1CN1A_JI.png?r=962"} />
                        <div>saxeli</div>
                    </div>
                ))}

            </div>
            <div>
                <Button className="border border-1 border-secondary rounded-0" >Manage Profiles</Button>
            </div>
            
        </div>
    );
};

export default ProfileSelect;