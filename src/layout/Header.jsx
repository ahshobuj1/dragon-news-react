import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="text-center">
            <img src={logo} alt="logo" className="mx-auto" />
            <p className="text-lg font-medium text-[#706F6F] mt-5 mb-2">
                Journalism Without Fear or Favour
            </p>
            <p className="text-xl font-medium ">Sunday, November 27, 2022</p>
        </div>
    );
};

export default Header;
