import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import auth from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

// 1. create context
export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user, setUser] = useState('');

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

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('current user ', currentUser);
                setUser(currentUser);
            } else {
                console.log('not found current user');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {createUserWithEmail, loginWithEmail, loggedOutUser, user};

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
