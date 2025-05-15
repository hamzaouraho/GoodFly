import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ArrowLeft, Calendar, MapPin, Users, CreditCard, User, Mail, Phone, Import as Passport } from 'lucide-react';

const BookingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookings, clients, packages } = useAppContext();
  
  const booking = bookings.find(b => b.id === id);
  const client = booking ? clients.find(c => c.id === booking.clientId) : null;
  const travelPackage = booking?.packageId ? packages.find(p => p.id === booking.packageId) : null;
  
  if (!booking || !client) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Réservation non trouvée</p>
        <button
          onClick={() => navigate('/bookings')}
          className="mt-4 text-primary-600 hover:text-primary-700"
        >
          Retour à la liste des réservations
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/bookings')}
          className="p-2 text-gray-400 hover:text-gray-500"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Réservation - {booking.destination}
          </h1>
          <p className="text-sm text-gray-500">
            Créée le {format(new Date(booking.createdAt), 'dd MMMM yyyy', { locale: fr })}
          </p>
        </div>
        <span
          className={`ml-auto inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
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
      
      {/* Booking Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Détails du voyage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Dates</p>
                    <p className="text-gray-900">
                      {format(new Date(booking.startDate), 'dd MMM', { locale: fr })} - {format(new Date(booking.endDate), 'dd MMM yyyy', { locale: fr })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Destination</p>
                    <p className="text-gray-900">{booking.destination}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Voyageurs</p>
                    <p className="text-gray-900">
                      {booking.passengers.length} {booking.passengers.length > 1 ? 'personnes' : 'personne'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Paiement</p>
                    <p className="text-gray-900">
                      {booking.amountPaid.toLocaleString('fr-FR')} € / {booking.totalAmount.toLocaleString('fr-FR')} €
                    </p>
                    <p className={`text-sm ${
                      booking.paymentStatus === 'paid' ? 'text-green-600' :
                      booking.paymentStatus === 'partial' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {booking.paymentStatus === 'paid' ? 'Payé' :
                       booking.paymentStatus === 'partial' ? 'Acompte versé' :
                       'En attente de paiement'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Passengers */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Voyageurs
            </h2>
            <div className="space-y-4">
              {booking.passengers.map((passenger, index) => (
                <div key={passenger.id} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {passenger.firstName} {passenger.lastName}
                      </h3>
                      {passenger.dateOfBirth && (
                        <p className="text-sm text-gray-500">
                          Né(e) le {format(new Date(passenger.dateOfBirth), 'dd MMMM yyyy', { locale: fr })}
                        </p>
                      )}
                    </div>
                    {passenger.passportNumber && (
                      <div className="flex items-center text-gray-500">
                        <Passport className="h-4 w-4 mr-2" />
                        <span className="text-sm">{passenger.passportNumber}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Client Info */}
        <div className="bg-white shadow-sm rounded-lg p-6 h-fit">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Client
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
            
            <button
              onClick={() => navigate(`/clients/${client.id}`)}
              className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-700 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Voir la fiche client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;