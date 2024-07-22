import React from 'react';
import './Dashboard.css';
import { signOut } from 'firebase/auth/web-extension';
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();

    let handleSignOut = (e) => {
        signOut(auth)     //===> Firebase attempts to sign out the current user.
            .then(() => {
                alert("User sign out successfully!");
                navigate('/'); // ==> here on '/' there is login_signUp page available
            })
            .catch((error) => {
                console.log("signOut error ====>", error.message);
            });

        console.log("signOut called....");
    }

    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <p>Mr. <b>XYZ</b></p>
            <br />
            <button
                onClick={handleSignOut}
                className='signOutBtn'>SignOut</button>
        </div>
    )
}
