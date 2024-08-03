// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDpFvl8bRkGO4PtxCPB-uAIHlzpdes2lRU',
    authDomain: 'dragon-news-react-54546.firebaseapp.com',
    projectId: 'dragon-news-react-54546',
    storageBucket: 'dragon-news-react-54546.appspot.com',
    messagingSenderId: '99223474962',
    appId: '1:99223474962:web:6000e343a09bd4a16819cb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
