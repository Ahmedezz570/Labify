"use client"
import React ,{useState}from 'react'
import {useAuth} from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button";
import {  Sun,  Moon,  Menu,  X,  Globe,  LogOut,  User,  LayoutDashboard,  Package,  ClipboardCheck, History ,Info } from "lucide-react";
import { Lock, Unlock } from "lucide-react";
import useMobile from '@/hooks/use-mobile';
import Link from 'next/link';
import Image from "next/image"
const Layout = () => {
    const {user} = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const isMobile = useMobile();
    const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
   <div className="min-h-screen bg-blue-950">
        <header className="sticky top-0 z-40 border-b border-white/20 bg-blue-950">
           <div className="flex h-14 items-center px-4 md:px-6">
           <Button
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex items-center gap-2 font-semibold">
            <div className='cursor-pointer'>
              <Image
                  src="/LOGOO.png"
                  alt="logo"
                  width={64}   
                  height={64}  
                  className="mr-2"
                />
            </div>
            <span className='hidden md:inline-block no-underline hover:no-underline cursor-pointer text-white'>Labify</span>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-2">
            <Button className='mr-2' size="icon"  variant="ghost" title='LogOut'>
               <LogOut className="h-5 w-5 text-white" />
               <span className="sr-only">LogOut</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={()=>{console.log("LoLLLL")}}>
               {isDisabled ? <Lock className="h-5 w-5 text-white" /> : <Unlock className="h-5 w-5 text-white" />}
            </Button>
          </div>
           </div>
        </header>      


        <div className="flex h-[calc(100vh-3.5rem)]">
              {isMobile && sidebarOpen && (
                <div className='fixed inset-0 z-50' onClick={toggleSidebar}>
                  <div className='absolute inset-y-0 w-64 bg-sidebar border-r p-0' onClick={(e) => e.stopPropagation()}>
                        <div className="flex h-14 items-center border-b px-4 bg-blue-950 border-white/20">
                          <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2"
                  onClick={toggleSidebar}
                >
                  <X className="h-5 w-5 text-white" />
                  <span className="sr-only bg-white">Close Menu</span>
                </Button>
                <span className="font-semibold text-white">
                  Labify
                </span>
                        </div>
                        {renderSidebarContent(!!user, user?.role || "student")}
                  </div>
                </div>
              )}
              {!isMobile && (
          <div className={`hidden md:block w-64 border-r p-0 border-b border-white/20`}>
            {renderSidebarContent(true, user?.role || "student")}
            
          </div>
        )}
         <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {true && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-white/20">
                Welcome to Labify Dashboard
              </h1>
            </div>
          )}
        </main>
        </div>      
   </div>
  )
}

function renderSidebarContent(isAuthenticated: boolean, userRole: "student" | "admin") {
  return (
      <div className="flex flex-col h-full bg-blue-950 text-white">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
          
      

            <Link href="/dashboard" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/equipment" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              <Package className="h-5 w-5" />
              <span>Equipments</span>
            </Link>
            <Link href="/requests" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              <ClipboardCheck className="h-5 w-5" />
              <span>Requests</span>
            </Link>
            <Link href="/materials" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
               <Info className="h-5 w-5" />
              <span>Materials</span>
            </Link>
           
            {userRole === "student" && (
               <Link href="/profile" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            )}
           
            {userRole === "admin" && (
              <>
              
              <Link href="/admin" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                <User className="h-5 w-5" />
                <span>Admin</span>
              </Link>
              <Link href="/admin-user-history" className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent">
                  <History className="h-5 w-5" />
                  <span>User History</span>
                </Link>
                </>
            )}
          
          </nav>
        </div>
        
        <div className="mt-auto border-t p-4 border-b border-white/20">
          <div className="flex items-center gap-3 py-2">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium">
              {/* {userRole === "admin" ? "Admin" : "cgvhgvh"} */}
              {"Guest"}
            </span>
          </div>
          <Link href="/logout">
            <Button variant="ghost" className="w-full justify-start mt-2">
              <LogOut className="h-5 w-5 mr-2" />
              <span>logout</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }


export default Layout