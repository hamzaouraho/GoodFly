import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Plus, Search, Calendar, MapPin, Users } from 'lucide-react';

const Bookings = () => {
  const { bookings, clients } = useAppContext();
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Réservations</h1>
        <button
          onClick={() => navigate('/bookings/new')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouvelle réservation
        </button>
      </div>
      
      {/* Search and filters */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une réservation..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Bookings list */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {bookings.map((booking) => {
            const client = clients.find(c => c.id === booking.clientId);
            return (
              <div
                key={booking.id}
                onClick={() => navigate(`/bookings/${booking.id}`)}
                className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {client?.firstName} {client?.lastName}
                        </h3>
                        <span
                          className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {booking.status === 'confirmed' ? 'Confirmée' :
                           booking.status === 'pending' ? 'En attente' :
                           booking.status === 'completed' ? 'Terminée' : 'Annulée'}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center space-x-6">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            {format(new Date(booking.startDate), 'dd MMM', { locale: fr })} - {format(new Date(booking.endDate), 'dd MMM yyyy', { locale: fr })}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{booking.destination}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            {booking.passengers.length} {booking.passengers.length > 1 ? 'voyageurs' : 'voyageur'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-medium text-gray-900">
                      {booking.totalAmount.toLocaleString('fr-FR')} €
                    </p>
                    <p className="text-sm text-gray-500">
                      {booking.paymentStatus === 'paid' ? 'Payé' :
                       booking.paymentStatus === 'partial' ? 'Acompte versé' : 'En attente'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookings;