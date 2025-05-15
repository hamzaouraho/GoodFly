import { NavLink } from 'react-router-dom';
import { X, Home, Users, Calendar, Package, Settings, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const { user, setUser } = useAppContext();
  
  const handleLogout = () => {
    setUser(null);
    // For demonstration purposes
  };
  
  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-30 transition-opacity duration-200 ease-in-out lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      ></div>
      
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-primary-800 text-white overflow-y-auto transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Calendar className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">TravelPOS</span>
            </div>
          </div>
          <button
            className="lg:hidden text-white hover:text-gray-200"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4 px-2 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-700 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`
            }
          >
            <Home className="mr-3 h-5 w-5 text-primary-300" />
            <span>Tableau de bord</span>
          </NavLink>
          
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-700 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`
            }
          >
            <Users className="mr-3 h-5 w-5 text-primary-300" />
            <span>Clients</span>
          </NavLink>
          
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-700 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`
            }
          >
            <Calendar className="mr-3 h-5 w-5 text-primary-300" />
            <span>Réservations</span>
          </NavLink>
          
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-700 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`
            }
          >
            <Package className="mr-3 h-5 w-5 text-primary-300" />
            <span>Forfaits</span>
          </NavLink>
          
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-primary-700 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`
            }
          >
            <Settings className="mr-3 h-5 w-5 text-primary-300" />
            <span>Paramètres</span>
          </NavLink>
        </nav>
        
        {/* User menu at the bottom */}
        <div className="mt-auto px-4 py-4 border-t border-primary-700">
          {user ? (
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-primary-300">{user.role}</p>
              </div>
              <button
                onClick={handleLogout}
                className="ml-auto text-primary-300 hover:text-white"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center px-4 py-2 text-sm font-medium text-primary-100 hover:bg-primary-700 rounded-md"
            >
              <LogOut className="mr-3 h-5 w-5 text-primary-300" />
              <span>Se connecter</span>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;