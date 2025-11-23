export type EquipmentStatus = 'available' | 'rented' | 'maintenance';
export interface Equipment {
    id: string;
    name: string;
    description: string;
    quantity: number;
    location: string;
    imageUrl: string;
    status: EquipmentStatus;
    history: EquipmentHistory[];
    category: string;
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface EquipmentHistory {
  id: string;
  userId: string;
  action: 'rented' | 'returned' | 'maintenance' | 'created';
  timestamp: string;
  notes?: string;
}


export const Equipments : Equipment[] = [
    {
    id: '1',
    name: 'Wind Tunnel Model',
    description: 'Small-scale wind tunnel for aerodynamic testing',
    status: 'available',
    category: 'Testing Equipment',
    notes: 'Requires prior booking for use',
    imageUrl: '/placeholder.svg',
    quantity: 3,
    location: 'Lab A',
    history: [
      {
        id: '101',
        userId: '1',
        action: 'created',
        timestamp: '2023-01-15',
        notes: 'Equipment added to inventory'
      }
    ]
  },
  {
    id: '2',
    name: 'Aerospace Materials Testing Kit',
    description: 'Kit for testing properties of aerospace materials',
    status: 'available',
    category: 'Testing Equipment',
    notes: 'Available for student projects',
    imageUrl: '/placeholder.svg',
    quantity: 5,
                    location: 'Lab B',
    history: [
      {
        id: '201',
        userId: '1',
        action: 'created',
        timestamp: '2023-01-20',
        notes: 'Equipment added to inventory'
      }
    ]
  },
  {
    id: '3',
    name: 'Flight Simulator',
    description: 'Desktop flight simulator with aerospace engineering modules',
    status: 'rented',
    category: 'Simulation Equipment',
    notes: 'Rented for class project',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab C',
    history: [
      {
        id: '301',
        userId: '1',
        action: 'created',
        timestamp: '2023-01-25',
        notes: 'Equipment added to inventory'
      },
      {
        id: '302',
        userId: '2',
        action: 'rented',
        timestamp: '2023-03-01',
        notes: 'Rented for class project'
      }
    ]
  },
  {
    id: '4',
    name: 'Drone Assembly Kit',
    description: 'Kit for assembling and testing small drones',
    status: 'available',
    category: 'Assembly Equipment',
    notes: 'Available for student projects',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab D',
    history: [
      {
        id: '401',
        userId: '1',
        action: 'created',
        timestamp: '2023-02-05',
        notes: 'Equipment added to inventory'
      }
    ]
  },
  {
    id: '5',
    name: 'Propulsion System Analyzer',
    description: 'Tool for analyzing propulsion systems',
    status: 'maintenance',
    category: 'Analysis Equipment',
    notes: 'Undergoing maintenance, available next week',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab E',
    history: [
      {
        id: '501',
        userId: '1',
        action: 'created',
        timestamp: '2023-02-10',
        notes: 'Equipment added to inventory'
      },
      {
        id: '502',
        userId: '1',
        action: 'maintenance',
        timestamp: '2023-04-01',
        notes: 'Scheduled maintenance'
      }
    ]
  },
  {
    id: '6',
    name: 'Structural Analysis System',
    description: 'Equipment for structural analysis of aerospace components',
    status: 'available',
    category: 'Analysis Equipment',
    notes: 'Available for student projects',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab F',
    history: [
      {
        id: '601',
        userId: '1',
        action: 'created',
        timestamp: '2023-02-15',
        notes: 'Equipment added to inventory'
      }
    ]
  },
  {
    id: '7',
    name: 'Avionics Testing Kit',
    description: 'Kit for testing avionics systems',
    status: 'rented',
    category: 'Testing Equipment',
    notes: 'Rented for research project',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab G',
    history: [
      {
        id: '701',
        userId: '1',
        action: 'created',
        timestamp: '2023-02-20',
        notes: 'Equipment added to inventory'
      },
      {
        id: '702',
        userId: '3',
        action: 'rented',
        timestamp: '2023-03-10',
        notes: 'Rented for research project'
      }
    ]
  },
  {
    id: '8',
    name: 'Composite Materials Lab Kit',
    description: 'Kit for testing and analyzing composite materials',
    status: 'available',
    category: 'Testing Equipment',
    notes: 'Available for student projects',
    imageUrl: '/placeholder.svg',
    quantity: 2,
                    location: 'Lab H',
    history: [
      {
        id: '801',
        userId: '1',
        action: 'created',
        timestamp: '2023-02-25',
        notes: 'Equipment added to inventory'
      }
    ]
  }                
]