import {createContext} from 'react';
import PropTypes from 'prop-types';
import auth from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

// 1. create context
export const AuthContext = createContext(null);

// Create user with email password
const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Login with email
const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Logout user
const loggedOutUser = () => {
    return signOut(auth);
};

const authInfo = {createUserWithEmail, loginWithEmail, loggedOutUser};

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
