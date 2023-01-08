import React from 'react';
import "./popupUserAccountMenu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const PopupUserAccountMenu = () => {

    return (
        
        <div className='main_div'>
            <div className='img'>
                <img src="/media/Profile-Male-PNG.png" alt="" />
            </div>
            <div className='menu'>
                <h2>Your Name<br/><span>Web Developer</span></h2>
                <ul>
                    <li><i class="fa-solid fa-user"></i><a href="/">My Profile</a></li>
                    <li><i class="fa-solid fa-pen-to-square"></i><a href="/">Edit Profile</a></li>
                    <li><i class="fa-solid fa-inbox"></i><a href="/">Inbox</a></li>
                    <li><i class="fa-solid fa-gear"></i><a href="/">Setting</a></li>
                    <li><i class="fa-solid fa-circle-question"></i><a href="/">Help</a></li>
                    <li><i class="fa-solid fa-right-from-bracket"></i><a href="/">Log out</a></li>
                </ul>
            </div>
        </div>
    
    );
};

export default PopupUserAccountMenu;