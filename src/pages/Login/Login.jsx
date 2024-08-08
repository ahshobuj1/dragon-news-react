import {useContext} from 'react';
import {AuthContext} from '../../Context/UserContext';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Header from '../../layout/Header';

const Login = () => {
    const {loginWithEmail} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleFormValue = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginWithEmail(email, password)
            .then((res) => {
                console.log('user login ', res.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Header />
            <Navbar />
            <div className="w-[600px]">
                <form onSubmit={handleFormValue} className="space-y-5">
                    <h2 className="text-3xl font-medium text-center ">
                        LogIn Now!
                    </h2>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            type="email"
                            className="w-full"
                            placeholder="Email"
                            name="email"
                            required
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="password"
                            className="grow "
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </label>

                    <div>
                        <button
                            type="submit"
                            className="btn btn-neutral w-full ">
                            LogIn
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center">
                    Do not have an account!{' '}
                    <Link to="/register" className="underline text-blue-500">
                        Please register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
