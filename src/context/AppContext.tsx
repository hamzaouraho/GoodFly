import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Client, Booking, TravelPackage, User } from '../types';
import { mockClients, mockBookings, mockPackages } from '../data/mockData';

interface AppContextType {
  user: User | null;
  clients: Client[];
  bookings: Booking[];
  packages: TravelPackage[];
  loading: boolean;
  setUser: (user: User | null) => void;
  addClient: (client: Client) => void;
  updateClient: (id: string, client: Client) => void;
  addBooking: (booking: Booking) => void;
  updateBooking: (id: string, booking: Booking) => void;
  addPackage: (travelPackage: TravelPackage) => void;
  updatePackage: (id: string, travelPackage: TravelPackage) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [packages, setPackages] = useState<TravelPackage[]>(mockPackages);
  const [loading, setLoading] = useState(false);

  const addClient = (client: Client) => {
    setClients([...clients, client]);
  };

  const updateClient = (id: string, client: Client) => {
    setClients(clients.map((c) => (c.id === id ? client : c)));
  };

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  const updateBooking = (id: string, booking: Booking) => {
    setBookings(bookings.map((b) => (b.id === id ? booking : b)));
  };

  const addPackage = (travelPackage: TravelPackage) => {
    setPackages([...packages, travelPackage]);
  };

  const updatePackage = (id: string, travelPackage: TravelPackage) => {
    setPackages(packages.map((p) => (p.id === id ? travelPackage : p)));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        clients,
        bookings,
        packages,
        loading,
        setUser,
        addClient,
        updateClient,
        addBooking,
        updateBooking,
        addPackage,
        updatePackage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};