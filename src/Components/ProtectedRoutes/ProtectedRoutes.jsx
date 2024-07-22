import React from 'react';
import { Dashboard } from '../Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';


{/* 
                    explanation
<Navigate>: "Take the train to Paris." (Clear instruction)
useNavigate: "When you see the green light, get on the train to Paris."
*/}

export const ProtectedRoutes = ({ children, user }) => {
    return (
        <div>
            {
                (user) ? children : <Navigate to="/"></Navigate>
            }
        </div>
    )
}
