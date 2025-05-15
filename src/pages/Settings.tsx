import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Settings as SettingsIcon, User, Globe, Bell, Shield, CreditCard } from 'lucide-react';

const Settings = () => {
  const { user } = useAppContext();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <User className="h-5 w-5 text-primary-600" />
            </div>
            <h2 className="ml-3 text-lg font-medium">Profil</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={user?.name || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={user?.email || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rôle</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={user?.role || ''}
                readOnly
              />
            </div>
          </div>
        </div>
        
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <SettingsIcon className="h-5 w-5 text-primary-600" />
            </div>
            <h2 className="ml-3 text-lg font-medium">Général</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Mode sombre</h3>
                <p className="text-sm text-gray-500">Activer le thème sombre</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-gray-200">
                <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
                <p className="text-sm text-gray-500">Recevoir des notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600">
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Shield className="h-5 w-5 text-primary-600" />
            </div>
            <h2 className="ml-3 text-lg font-medium">Sécurité</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Changer le mot de passe
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Activer la 2FA
            </button>
          </div>
        </div>
      </div>
      
      {/* Additional Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Globe className="h-5 w-5 text-primary-600" />
            </div>
            <h2 className="ml-3 text-lg font-medium">Langue et région</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Langue</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fuseau horaire</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option value="europe/paris">Europe/Paris</option>
                <option value="utc">UTC</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Payment Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-primary-100 rounded-lg">
              <CreditCard className="h-5 w-5 text-primary-600" />
            </div>
            <h2 className="ml-3 text-lg font-medium">Paiement</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Devise par défaut</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option value="eur">EUR (€)</option>
                <option value="usd">USD ($)</option>
                <option value="gbp">GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mode de paiement préféré</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option value="card">Carte bancaire</option>
                <option value="transfer">Virement bancaire</option>
                <option value="cash">Espèces</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-card p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary-100 rounded-lg">
            <Bell className="h-5 w-5 text-primary-600" />
          </div>
          <h2 className="ml-3 text-lg font-medium">Préférences de notification</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Nouvelles réservations</h3>
              <p className="text-sm text-gray-500">Recevoir une notification pour chaque nouvelle réservation</p>
            </div>
            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600">
              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Rappels de paiement</h3>
              <p className="text-sm text-gray-500">Recevoir des rappels pour les paiements en attente</p>
            </div>
            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600">
              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Mises à jour système</h3>
              <p className="text-sm text-gray-500">Recevoir des notifications pour les mises à jour importantes</p>
            </div>
            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-primary-600">
              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;