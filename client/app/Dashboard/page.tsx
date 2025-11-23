"use client";
import {useAuth} from '@/contexts/AuthContext'
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';
const Dashboard = () => {
  const {user} = useAuth();
  if(user?.role == "admin"){
    return  <AdminDashboard />
  }
  if (user?.role == "student"){
    return <StudentDashboard />
  }
}

export default Dashboard