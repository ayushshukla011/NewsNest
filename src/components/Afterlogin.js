import React from 'react'
import {Link} from "react-router-dom";

const Afterlogin = () => {
    const handleprofile = () => {
        var profile = document.getElementById('profile');
        profile.classList.toggle("d-none");
        
    }
    return (
        <>
            <div className="position-relative ms-3">
                <div>
                    <button type="button" className="position-relative d-flex rounded-circle bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={handleprofile} >
                        <span className="position-absolute top-0 start-0 translate-middle p-1.5"></span>
                        <span className="visually-hidden">Open user menu</span>
                        <img style={{height:"32px",width:"32px"}} className="rounded-circle" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                </div>
                <div className=" position-absolute top-100 end-0 translate-middle mt-4  bg-white rounded-3 shadow-lg border ring-1 ring-black ring-opacity-5 focus-outline-none d-none" role="menu" id="profile" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <div className='d-flex flex-column'><Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" >Your Profile</Link>
                    <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700" >Sign out</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Afterlogin