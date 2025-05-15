import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Import as Passport } from 'lucide-react';

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { clients, bookings } = useAppContext();
  
  const client = clients.find(c => c.id === id);
  const clientBookings = bookings.filter(b => b.clientId === id);
  
  if (!client) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Client non trouvé</p>
        <button
          onClick={() => navigate('/clients')}
          className="mt-4 text-primary-600 hover:text-primary-700"
        >
          Retour à la liste des clients
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/clients')}
          className="p-2 text-gray-400 hover:text-gray-500"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {client.firstName} {client.lastName}
          </h1>
          <p className="text-sm text-gray-500">
            Client depuis {format(new Date(client.createdAt), 'MMMM yyyy', { locale: fr })}
          </p>
        </div>
      </div>
      
      {/* Client Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Informations personnelles
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Nom complet</p>
                <p className="text-gray-900">{client.firstName} {client.lastName}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{client.email}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500">Téléphone</p>
                <p className="text-gray-900">{client.phone}</p>
              </div>
            </div>
            
            {client.address && (
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Adresse</p>
                  <p className="text-gray-900">
                    {client.address}
                    {client.city && `, ${client.city}`}
                    {client.country && `, ${client.country}`}
                  </p>
                </div>
              </div>
            )}
            
            {client.dateOfBirth && (
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Date de naissance</p>
                  <p className="text-gray-900">
                    {format(new Date(client.dateOfBirth), 'dd MMMM yyyy', { locale: fr })}
                  </p>
                </div>
              </div>
            )}
            
            {client.passportNumber && (
              <div className="flex items-center">
                <Passport className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Numéro de passeport</p>
                  <p className="text-gray-900">{client.passportNumber}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Bookings */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Réservations
          </h2>
          <div className="space-y-4">
            {clientBookings.length > 0 ? (
              clientBookings.map(booking => (
                <div
                  key={booking.id}
                  onClick={() => navigate(`/bookings/${booking.id}`)}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{booking.destination}</h3>
                      <p className="text-sm text-gray-500">
                        {format(new Date(booking.startDate), 'dd MMM', { locale: fr })} - {format(new Date(booking.endDate), 'dd MMM yyyy', { locale: fr })}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-500">
                      {booking.passengers.length} {booking.passengers.length > 1 ? 'voyageurs' : 'voyageur'}
                    </span>
                    <span className="font-medium text-gray-900">
                      {booking.totalAmount.toLocaleString('fr-FR')} €
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">
                Aucune réservation
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;