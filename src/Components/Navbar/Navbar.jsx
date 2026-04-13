import { useState } from 'react';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "bg-green-950 text-white px-3 py-2 rounded flex items-center gap-2"
            : "flex items-center gap-2 text-gray-600 px-3 py-2";

    return (
        <div className='shadow py-3'>
            <div className='container mx-auto px-4 flex items-center justify-between'>

                
                <img src={logo} alt="logo" className="h-10" />

                
                <ul className='hidden md:flex items-center gap-6'>
                    <li><NavLink to="/" className={linkClass}><IoHomeOutline /> Home</NavLink></li>
                    <li><NavLink to="/timeline" className={linkClass}><CiClock2 /> Timeline</NavLink></li>
                    <li><NavLink to="/stats" className={linkClass}><TfiStatsUp /> Stats</NavLink></li>
                </ul>

                
                <button
                    className='md:hidden text-2xl cursor-pointer'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            
            {open && (
                <ul className='md:hidden flex flex-col gap-2 px-4 pb-4'>
                    <li onClick={() => setOpen(false)}>
                        <NavLink to="/" className={linkClass}><IoHomeOutline /> Home</NavLink>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <NavLink to="/timeline" className={linkClass}><CiClock2 /> Timeline</NavLink>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <NavLink to="/stats" className={linkClass}><TfiStatsUp /> Stats</NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;