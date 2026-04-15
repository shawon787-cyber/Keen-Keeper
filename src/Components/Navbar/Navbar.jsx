import logo from "../../assets/logo.png";
import { NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';


const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "bg-green-900 text-white px-3 py-2 rounded flex items-center gap-2"
            : "flex items-center gap-2 text-gray-600 px-3 py-2";

    return (
        <div className='shadow py-3'>
            <div className='container mx-auto px-4 flex items-center justify-center md:justify-between'>
                <img src={logo} alt="logo" className="h-10 hidden md:block" />

                <ul className='flex items-center gap-6'>
                    <li><NavLink to="/" className={linkClass}><IoHomeOutline /> Home</NavLink></li>
                    <li><NavLink to="/timeline" className={linkClass}><CiClock2 /> Timeline</NavLink></li>
                    <li><NavLink to="/stats" className={linkClass}><TfiStatsUp /> Stats</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;