import {useContext} from 'react';
import {AuthContext} from '../Context/UserContext';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />;
};

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
    children: PropTypes.node,
};
