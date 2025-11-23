"use client";
import {useAuth} from '@/contexts/AuthContext'
import {Equipments} from '@/data/Equipment'
const Dashboard = () => {
  const {user} = useAuth();
  console.log(Equipments);
  return (
    <div className='mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {user?.role === 'admin' && (
        <h1 className='text-white/20 text-4xl'>this user is a admin</h1>
      )}
    </div>
  )
}

export default Dashboard