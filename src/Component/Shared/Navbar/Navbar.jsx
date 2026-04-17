import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineBarChart } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className='bg-base-100 shadow-sm '>
      <div className="navbar container  mx-auto">
        <div className="navbar-start">
          <a className="text-2xl  md:text-3xl  lg:text-4xl  font-bold ">Keen<span className='text-green-700 text-2xl  md:text-3xl  lg:text-4xl '>Keeper</span></a>
        </div>
        
        <div className="navbar-end gap-3">
          <NavLink to="/" className= {({isActive})=> `btn  text-[14px] md:text-[16px] lg:text-[18px] ${isActive ? 'bg-green-800 text-white' : 'btn-soft btn-success'} `}><AiOutlineHome /> Home</NavLink>
          <NavLink to="/timeline" className={({isActive})=> `btn  text-[14px] md:text-[16px] lg:text-[18px] ${isActive ? 'bg-green-800 text-white' : 'btn-soft btn-success'} `}><IoTimeOutline /> Timeline</NavLink>
          <NavLink to="/states" className={({isActive})=> `btn  text-[14px] md:text-[16px] lg:text-[18px] ${isActive ? 'bg-green-800 text-white' : 'btn-soft btn-success'} `}><ImStatsDots /> Stats</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;