export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
  studentId?: string;
  createdAt: string;
}
export const users: User[] = [
  {
    id: '1',
    name: 'Admin ',
    email: 'admin@cairo.edu',
    password: 'admin123',
    role: 'admin',
    createdAt: '2023-01-01'
  },
  {
    id: '2',
    name: 'Ahmed Mohamed',
    email: 'ahmed@cairo.edu',
    password: 'student123',
    role: 'student',
    studentId: 'ENG-2023-001',
    createdAt: '2023-02-15'
  },
  {
    id: '3',
    name: 'Fatima Ahmed',
    email: 'fatima@cairo.edu',
    password: 'student123',
    role: 'student',
    studentId: 'ENG-2023-002',
    createdAt: '2023-03-10'
  }
];