import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import auth from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';

// 1. create context
export const AuthContext = createContext(null);

const UserContext = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // Create user with email password
    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with email
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider);
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
                setLoading(false);
            } else {
                console.log('not found current user');
                setUser('');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUserWithEmail,
        loginWithEmail,
        loggedOutUser,
        user,
        loading,
        loginWithGoogle,
    };

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
