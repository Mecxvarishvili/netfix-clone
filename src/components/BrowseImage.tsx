import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const BrowseImage = () => {
    return (
        <div className="d-none d-xl-block" >
            <Image className="mw-100"  src="http://occ-0-5515-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdJicBzWcOnu065IkV1BZA-6Ik3NEH-6lAqQXoilrVDfZPu7pWjI0sUZMUmc7XhLf_u5tHXkX71OArTK8PYgNighSa6d4P6_xO-d.webp?r=8ae" />
            <div>
                <div>
                    <Image className='w-100'  src='http://occ-0-5515-2774.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcFbmo-W6UL-dMivMLr_0-1Dp5H6asBzzadI8MtXoXCR_0ZgreqToEw-a7Dl8Kwak8nc9iNAUZ8Z59VnhP_b4BiD-vHXAUbwCCT9w6-xtrlsZmpRhND7N05B2eHr4HvzwWBX4lAavVjzMKi83-YkrbGz2e1JB3484El1bSpfBzDqGQx8f3c7WA.webp?r=3ca' />
                </div>
                <div>
                    describe
                </div>
                <div>
                    <Button>Play</Button>
                    <Button>More Info</Button>
                </div>
            </div>
        </div>
    );
};

export default BrowseImage;