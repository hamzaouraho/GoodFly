import { Client, Booking, TravelPackage } from '../types';

export const mockClients: Client[] = [
  {
    id: '1',
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    address: '15 Rue de la Paix',
    city: 'Paris',
    country: 'France',
    passportNumber: 'FRA123456789',
    dateOfBirth: '1985-05-15',
    createdAt: '2023-01-15T09:30:00Z',
    notes: 'Client fidèle depuis 2023'
  },
  {
    id: '2',
    firstName: 'Marie',
    lastName: 'Laurent',
    email: 'marie.laurent@example.com',
    phone: '+33 6 98 76 54 32',
    address: '8 Avenue des Champs-Élysées',
    city: 'Paris',
    country: 'France',
    passportNumber: 'FRA987654321',
    dateOfBirth: '1990-08-22',
    createdAt: '2023-03-10T14:15:00Z'
  },
  {
    id: '3',
    firstName: 'Thomas',
    lastName: 'Martin',
    email: 'thomas.martin@example.com',
    phone: '+33 6 23 45 67 89',
    city: 'Lyon',
    country: 'France',
    createdAt: '2023-05-20T11:45:00Z'
  },
  {
    id: '4',
    firstName: 'Sophie',
    lastName: 'Petit',
    email: 'sophie.petit@example.com',
    phone: '+33 6 34 56 78 90',
    address: '25 Rue du Commerce',
    city: 'Bordeaux',
    country: 'France',
    dateOfBirth: '1988-11-30',
    createdAt: '2023-06-05T10:20:00Z',
    notes: 'Préfère les destinations ensoleillées'
  },
  {
    id: '5',
    firstName: 'Pierre',
    lastName: 'Dubois',
    email: 'pierre.dubois@example.com',
    phone: '+33 6 45 67 89 01',
    address: '12 Boulevard Victor Hugo',
    city: 'Nice',
    country: 'France',
    passportNumber: 'FRA567891234',
    dateOfBirth: '1975-02-18',
    createdAt: '2023-07-22T16:40:00Z'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    clientId: '1',
    packageId: '2',
    destination: 'Rome, Italie',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    status: 'confirmed',
    totalAmount: 1250,
    amountPaid: 1250,
    currency: 'EUR',
    paymentStatus: 'paid',
    createdAt: '2024-01-10T13:25:00Z',
    updatedAt: '2024-01-15T09:40:00Z',
    passengers: [
      {
        id: '101',
        firstName: 'Jean',
        lastName: 'Dupont',
        dateOfBirth: '1985-05-15',
        passportNumber: 'FRA123456789'
      },
      {
        id: '102',
        firstName: 'Émilie',
        lastName: 'Dupont',
        dateOfBirth: '1987-09-28',
        passportNumber: 'FRA123456790'
      }
    ]
  },
  {
    id: '2',
    clientId: '2',
    packageId: '1',
    destination: 'Barcelone, Espagne',
    startDate: '2024-07-10',
    endDate: '2024-07-17',
    status: 'pending',
    totalAmount: 980,
    amountPaid: 490,
    currency: 'EUR',
    paymentStatus: 'partial',
    createdAt: '2024-02-05T10:15:00Z',
    updatedAt: '2024-02-05T10:15:00Z',
    notes: 'Attend un hôtel avec vue sur mer',
    passengers: [
      {
        id: '201',
        firstName: 'Marie',
        lastName: 'Laurent',
        dateOfBirth: '1990-08-22',
        passportNumber: 'FRA987654321'
      }
    ]
  },
  {
    id: '3',
    clientId: '3',
    destination: 'Londres, Royaume-Uni',
    startDate: '2024-05-20',
    endDate: '2024-05-23',
    status: 'confirmed',
    totalAmount: 650,
    amountPaid: 650,
    currency: 'EUR',
    paymentStatus: 'paid',
    createdAt: '2024-03-12T14:30:00Z',
    updatedAt: '2024-03-14T09:15:00Z',
    passengers: [
      {
        id: '301',
        firstName: 'Thomas',
        lastName: 'Martin',
        passportNumber: 'FRA567891234'
      },
      {
        id: '302',
        firstName: 'Laura',
        lastName: 'Martin',
        passportNumber: 'FRA567891235'
      }
    ]
  },
  {
    id: '4',
    clientId: '4',
    packageId: '3',
    destination: 'Lisbonne, Portugal',
    startDate: '2024-08-05',
    endDate: '2024-08-12',
    status: 'pending',
    totalAmount: 1100,
    amountPaid: 0,
    currency: 'EUR',
    paymentStatus: 'unpaid',
    createdAt: '2024-04-02T11:45:00Z',
    updatedAt: '2024-04-02T11:45:00Z',
    passengers: [
      {
        id: '401',
        firstName: 'Sophie',
        lastName: 'Petit',
        dateOfBirth: '1988-11-30'
      },
      {
        id: '402',
        firstName: 'Michel',
        lastName: 'Petit',
        dateOfBirth: '1986-07-14'
      }
    ]
  },
  {
    id: '5',
    clientId: '5',
    destination: 'New York, États-Unis',
    startDate: '2024-09-10',
    endDate: '2024-09-17',
    status: 'confirmed',
    totalAmount: 2300,
    amountPaid: 1150,
    currency: 'EUR',
    paymentStatus: 'partial',
    createdAt: '2024-05-15T09:30:00Z',
    updatedAt: '2024-05-18T14:20:00Z',
    notes: 'Souhaite faire du shopping',
    passengers: [
      {
        id: '501',
        firstName: 'Pierre',
        lastName: 'Dubois',
        dateOfBirth: '1975-02-18',
        passportNumber: 'FRA567891234'
      }
    ]
  }
];

export const mockPackages: TravelPackage[] = [
  {
    id: '1',
    name: 'Weekend à Barcelone',
    description: 'Un weekend inoubliable dans la capitale catalane avec visites des sites emblématiques.',
    destination: 'Barcelone, Espagne',
    duration: 3,
    price: 450,
    currency: 'EUR',
    imageUrl: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
    inclusions: ['Vol aller-retour', 'Hôtel 3 étoiles', 'Petit-déjeuner', 'Visite guidée'],
    exclusions: ['Déjeuner et dîner', 'Frais d\'entrée aux monuments'],
    isActive: true
  },
  {
    id: '2',
    name: 'Découverte de Rome',
    description: 'Une semaine pour découvrir les merveilles de la ville éternelle.',
    destination: 'Rome, Italie',
    duration: 7,
    price: 850,
    currency: 'EUR',
    imageUrl: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg',
    inclusions: ['Vol aller-retour', 'Hôtel 4 étoiles', 'Demi-pension', 'Visite guidée du Colisée et du Vatican'],
    exclusions: ['Déjeuners', 'Pourboires', 'Assurance voyage'],
    isActive: true
  },
  {
    id: '3',
    name: 'Lisbonne City Break',
    description: 'Explorez la charmante capitale portugaise en 4 jours.',
    destination: 'Lisbonne, Portugal',
    duration: 4,
    price: 520,
    currency: 'EUR',
    imageUrl: 'https://images.pexels.com/photos/14874500/pexels-photo-14874500.jpeg',
    inclusions: ['Vol aller-retour', 'Hôtel 3 étoiles', 'Petit-déjeuner', 'Pass transports'],
    exclusions: ['Déjeuner et dîner', 'Activités optionnelles'],
    isActive: true
  },
  {
    id: '4',
    name: 'Évasion à Santorin',
    description: 'Séjour paradisiaque sur l\'île grecque aux maisons blanches et bleues.',
    destination: 'Santorin, Grèce',
    duration: 7,
    price: 1200,
    currency: 'EUR',
    imageUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    inclusions: ['Vol aller-retour', 'Hôtel vue mer', 'Petit-déjeuner', 'Excursion en bateau au volcan'],
    exclusions: ['Déjeuner et dîner', 'Transferts aéroport', 'Activités optionnelles'],
    isActive: true
  },
  {
    id: '5',
    name: 'City Trip à Londres',
    description: 'Découvrez la capitale britannique et ses monuments emblématiques.',
    destination: 'Londres, Royaume-Uni',
    duration: 5,
    price: 650,
    currency: 'EUR',
    imageUrl: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    inclusions: ['Vol aller-retour', 'Hôtel central', 'Oyster Card', 'Tour en bus panoramique'],
    exclusions: ['Tous les repas', 'Entrées aux attractions'],
    isActive: true
  }
];