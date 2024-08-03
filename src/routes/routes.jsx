import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import About from '../components/About';
import Career from '../components/Career';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/career',
                element: <Career />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]);

export default router;
