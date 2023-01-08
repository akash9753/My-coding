import React from 'react';
import "./popupUserAccountMenu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PopupUserAccountMenu = () => {

    return (
        
        <div className='main_div'>
            <div className='img'>
                <img src="" alt="" />
            </div>
            <div className='menu'>
                <h2>Your Name<br/><span>Web Developer</span></h2>
                <ul>
                    <li><a href="/">My Profile</a></li>
                    <li><a href="/">Edit Profile</a></li>
                    <li><a href="/">Inbox</a></li>
                    <li><a href="/">Setting</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/">Log out</a></li>
                </ul>
            </div>
        </div>
    
    );
};

export default PopupUserAccountMenu;