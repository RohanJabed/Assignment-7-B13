import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50'>
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <a className="text-2xl md:text-3xl font-bold text-gray-900">
            Keen<span style={{color: '#244D3F'}}>Keeper</span>
          </a>
        </div>

        <div className="navbar-end gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-800'
              }`
            }
            style={({ isActive }) => isActive ? { backgroundColor: '#244D3F' } : {}}
          >
            <AiOutlineHome size={16} /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-800'
              }`
            }
            style={({ isActive }) => isActive ? { backgroundColor: '#244D3F' } : {}}
          >
            <IoTimeOutline size={16} /> Timeline
          </NavLink>

          <NavLink
            to="/states"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-800'
              }`
            }
            style={({ isActive }) => isActive ? { backgroundColor: '#244D3F' } : {}}
          >
            <ImStatsDots size={14} /> Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
