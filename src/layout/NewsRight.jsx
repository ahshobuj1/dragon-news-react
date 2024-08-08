import {useContext} from 'react';
import {FaFacebook, FaGoogle} from 'react-icons/fa';
import {AuthContext} from '../Context/UserContext';

const NewsRight = () => {
    const {loginWithGoogle} = useContext(AuthContext);

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((res) => console.log(res.user))
            .catch((err) => {
                console.log(err.message);
                console.log(err.code);
            });
    };

    return (
        <div>
            <p className="text-xl font-semibold text-[#403F3F] mb-3">
                Login With
            </p>

            <div>
                <a
                    onClick={handleLoginWithGoogle}
                    className="text-center py-3 flex justify-center items-center border-2 rounded-xl mb-3">
                    <FaGoogle className="pr-2 text-2xl" /> login with google
                </a>

                <a className="text-center py-3 flex justify-center items-center border-2 rounded-xl ">
                    <FaFacebook className="pr-2 text-3xl" /> login with facebook
                </a>
            </div>
        </div>
    );
};

export default NewsRight;
