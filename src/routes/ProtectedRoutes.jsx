import {useContext} from 'react';
import {AuthContext} from '../Context/UserContext';
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({children}) => {
    const {user} = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate to="/login" />;
};

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
    children: PropTypes.node,
};
