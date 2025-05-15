export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent';
  avatar?: string;
}

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  country?: string;
  passportNumber?: string;
  dateOfBirth?: string;
  createdAt: string;
  notes?: string;
}

export interface Booking {
  id: string;
  clientId: string;
  packageId?: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
  amountPaid: number;
  currency: string;
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  createdAt: string;
  updatedAt: string;
  notes?: string;
  passengers: Passenger[];
}

export interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  passportNumber?: string;
  specialRequirements?: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  currency: string;
  imageUrl?: string;
  inclusions: string[];
  exclusions: string[];
  isActive: boolean;
}

export interface Transaction {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  paymentMethod: 'cash' | 'credit' | 'transfer' | 'check';
  date: string;
  reference?: string;
}

export type Currency = 'EUR' | 'USD' | 'GBP' | 'CAD';