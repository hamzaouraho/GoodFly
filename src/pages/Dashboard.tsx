import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Calendar, CreditCard, Users, Package, ChevronRight, TrendingUp, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

const Dashboard = () => {
  const { clients, bookings, packages } = useAppContext();
  
  // Calculate metrics
  const totalClients = clients.length;
  const totalBookings = bookings.length;
  const activePackages = packages.filter(p => p.isActive).length;
  
  const pendingBookings = bookings.filter(b => b.status === 'pending').length;
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
  
  const totalSales = bookings.reduce((total, booking) => total + booking.amountPaid, 0);
  const pendingPayments = bookings.reduce((total, booking) => 
    total + (booking.totalAmount - booking.amountPaid), 0);
  
  // Sort bookings by creation date (most recent first)
  const recentBookings = [...bookings]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);
  
  // Get upcoming trips (filter future dates and sort by start date)
  const upcomingTrips = [...bookings]
    .filter(booking => new Date(booking.startDate) > new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 5);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-card p-5 border-l-4 border-primary-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-100 text-primary-800">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm">Clients</p>
              <h3 className="text-xl font-bold">{totalClients}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-5 border-l-4 border-secondary-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-800">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm">Réservations</p>
              <h3 className="text-xl font-bold">{totalBookings}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-5 border-l-4 border-accent-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-accent-100 text-accent-800">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm">Ventes</p>
              <h3 className="text-xl font-bold">{totalSales.toLocaleString('fr-FR')} €</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-5 border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-800">
              <Package className="h-6 w-6" />
            </div>
            <div className="ml-5">
              <p className="text-gray-500 text-sm">Forfaits actifs</p>
              <h3 className="text-xl font-bold">{activePackages}</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-card p-5">
          <h3 className="font-medium text-gray-700 mb-3 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary-500" />
            Statut des réservations
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-gray-600">En attente</p>
                <p className="text-sm font-medium">{pendingBookings}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: `${(pendingBookings / totalBookings) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-gray-600">Confirmées</p>
                <p className="text-sm font-medium">{confirmedBookings}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(confirmedBookings / totalBookings) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-5">
          <h3 className="font-medium text-gray-700 mb-3 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-primary-500" />
            Paiements
          </h3>
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Total reçu</p>
              <p className="text-sm font-medium">{totalSales.toLocaleString('fr-FR')} €</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">En attente</p>
              <p className="text-sm font-medium">{pendingPayments.toLocaleString('fr-FR')} €</p>
            </div>
            {pendingPayments > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="text-sm text-accent-600 font-medium">
                  {((pendingPayments / (totalSales + pendingPayments)) * 100).toFixed(1)}% des paiements en attente
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card p-5">
          <h3 className="font-medium text-gray-700 mb-3 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-primary-500" />
            Performance des forfaits
          </h3>
          <div className="space-y-3">
            {packages.slice(0, 3).map(pkg => (
              <div key={pkg.id} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-800">{pkg.name}</p>
                  <p className="text-xs text-gray-500">{pkg.destination}</p>
                </div>
                <p className="text-sm font-medium">{pkg.price.toLocaleString('fr-FR')} €</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recent Bookings & Upcoming Trips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
            <h3 className="font-medium text-gray-700">Réservations récentes</h3>
            <a href="/bookings" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="divide-y divide-gray-100">
            {recentBookings.map(booking => {
              const client = clients.find(c => c.id === booking.clientId);
              return (
                <a 
                  key={booking.id}
                  href={`/bookings/${booking.id}`}
                  className="block px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        {client?.firstName} {client?.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{booking.destination}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status === 'confirmed' ? 'Confirmée' : 
                         booking.status === 'pending' ? 'En attente' : 
                         booking.status === 'completed' ? 'Terminée' : 'Annulée'}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDistanceToNow(new Date(booking.createdAt), { 
                          addSuffix: true,
                          locale: fr
                        })}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
            <h3 className="font-medium text-gray-700">Voyages à venir</h3>
            <a href="/bookings" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="divide-y divide-gray-100">
            {upcomingTrips.map(trip => {
              const client = clients.find(c => c.id === trip.clientId);
              const startDate = new Date(trip.startDate);
              return (
                <a 
                  key={trip.id}
                  href={`/bookings/${trip.id}`}
                  className="block px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">
                        {client?.firstName} {client?.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{trip.destination}</p>
                    </div>
                    <div className="text-right flex items-center">
                      <div className="mr-3 p-2 bg-primary-100 rounded-full text-primary-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatDistanceToNow(startDate, { 
                            addSuffix: false,
                            locale: fr
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;