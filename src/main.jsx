import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from './routes/routes';
import UserContext from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContext>
            <RouterProvider router={router} />
        </UserContext>
    </React.StrictMode>
);
