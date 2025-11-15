"use client"
import React ,{useState}from 'react'
import {useAuth} from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button";
import {  Sun,  Moon,  Menu,  X,  Globe,  LogOut,  User,  LayoutDashboard,  Package,  ClipboardCheck, History } from "lucide-react";
import { Lock, Unlock } from "lucide-react";
const Layout = () => {
    const {user} = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
   <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <img src='./LOGOO.png' alt='logo' className='h-16 w-16 mr-2'/>
            </div>
            <span className='hidden md:inline-block no-underline hover:no-underline cursor-pointer'>Labify</span>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-2">
            <Button className='mr-2' size="icon"  variant="ghost" title='LogOut'>
               <LogOut className="h-5 w-5" />
               <span className="sr-only">LogOut</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={()=>{console.log("LoLLLL")}}>
               {isDisabled ? <Lock className="h-5 w-5" /> : <Unlock className="h-5 w-5" />}
            </Button>
          </div>
           </div>
        </header>            
   </div>
  )
}

export default Layout