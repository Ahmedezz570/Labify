"use client"
import React ,{useState}from 'react'
import {useAuth} from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button";
import {  Sun,  Moon,  Menu,  X,  Globe,  LogOut,  User,  LayoutDashboard,  Package,  ClipboardCheck, History 
} from "lucide-react";
const Layout = () => {
    const {user} = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);
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
           </div>
        </header>            
   </div>
  )
}

export default Layout