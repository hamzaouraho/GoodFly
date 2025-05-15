import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, Settings, User, Menu } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ setSidebarOpen }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { user } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <header className="bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger and Title */}
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 lg:hidden mr-3"
              onClick={() => setSidebarOpen(true)}
              aria-controls="sidebar"
              aria-expanded="false"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-primary-700 hidden sm:block">
              TravelPOS
            </h1>
          </div>

          {/* Center: Search */}
          <div className={`${searchOpen ? 'flex-1 mx-4' : 'hidden sm:flex sm:flex-1 sm:mx-4'}`}>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Rechercher un client, une réservation..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button className="text-gray-500 hover:text-gray-700 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
            </button>
            
            <button 
              onClick={() => navigate('/settings')}
              className="text-gray-500 hover:text-gray-700"
            >
              <Settings className="h-5 w-5" />
            </button>
            
            <div className="relative" onClick={() => navigate('/login')}>
              <button className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                  {user ? 
                    (user.avatar ? 
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="h-8 w-8 rounded-full" 
                      /> 
                      : 
                      user.name.charAt(0)
                    ) 
                    : 
                    <User className="h-5 w-5" />
                  }
                </div>
                <span className="hidden md:block ml-2 text-sm font-medium">
                  {user ? user.name : 'Se connecter'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;