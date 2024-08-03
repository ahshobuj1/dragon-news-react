import {FaFacebook, FaGoogle} from 'react-icons/fa';

const NewsRight = () => {
    return (
        <div>
            <p className="text-xl font-semibold text-[#403F3F] mb-3">
                Login With
            </p>

            <div>
                <p className="text-center py-3 flex justify-center items-center border-2 rounded-xl mb-3">
                    <FaGoogle className="pr-2 text-2xl" /> login with google
                </p>

                <p className="text-center py-3 flex justify-center items-center border-2 rounded-xl ">
                    <FaFacebook className="pr-2 text-3xl" /> login with facebook
                </p>
            </div>
        </div>
    );
};

export default NewsRight;
