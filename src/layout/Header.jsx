import moment from 'moment';
import logo from '../../public/assets/logo.png';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className="text-center">
            <img src={logo} alt="logo" className="mx-auto" />
            <p className="text-lg font-medium text-[#706F6F] mt-5 mb-2">
                Journalism Without Fear or Favour
            </p>
            <p className="text-xl font-medium ">
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </p>

            <div className="flex bg-[#F3F3F3] p-2">
                <button className="btn btn-secondary btn-sm px-10 rounded-r-none">
                    Latest
                </button>
                <Marquee>
                    I can be a React component, multiple React components, or
                    just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;
