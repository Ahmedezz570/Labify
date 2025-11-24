"use client";
import React from 'react'
import TotalEquipments from '@/shared/totalEquipments';
import Categories from '@/shared/categories';
import RecentEquipments from '@/shared/RecentEquipments';
const AdminDashboard = () => {
  return (
    <>
   <div className="flex flex-col gap-8">
  <Categories />
  <RecentEquipments />
</div>

    </>
  )
}

export default AdminDashboard