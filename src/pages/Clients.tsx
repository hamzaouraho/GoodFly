import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Plus, Search, Phone, Mail, MapPin } from 'lucide-react';

const Clients = () => {
  const { clients } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
        <button
          onClick={() => navigate('/clients/new')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouveau client
        </button>
      </div>
      
      {/* Search and filters */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un client..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Clients list */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => navigate(`/clients/${client.id}`)}
              className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {client.firstName} {client.lastName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Client depuis {format(new Date(client.createdAt), 'MMMM yyyy', { locale: fr })}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    {client.phone && (
                      <div className="flex items-center text-gray-500">
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">{client.phone}</span>
                      </div>
                    )}
                    {client.email && (
                      <div className="flex items-center text-gray-500">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="text-sm">{client.email}</span>
                      </div>
                    )}
                    {client.city && (
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{client.city}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;