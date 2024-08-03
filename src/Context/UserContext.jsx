import {createContext} from 'react';
import PropTypes from 'prop-types';

// 1. create context
export const AuthContext = createContext(null);

const userss = 'hello context';
const authInfo = {userss};

const UserContext = ({children}) => {
    return (
        // 2. set context
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
// 3. set UserContext in main.jsx

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
