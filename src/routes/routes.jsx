import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import About from '../components/About';
import Career from '../components/Career';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import News from '../pages/News/News';
import ProtectedRoutes from '../routes/ProtectedRoutes';

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
            {
                path: '/news/:id',
                element: (
                    <ProtectedRoutes>
                        <News />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
]);

export default router;
