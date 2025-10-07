import React from 'react';
import { Link } from 'react-router';

const ViewAllBtn = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <Link>
                    <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white py-3 px-6 rounded-md my-7 font-bold cursor-pointer'>Show all</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewAllBtn;