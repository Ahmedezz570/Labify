"use client"
import { createContext, useContext, useState } from "react";
import {User } from "@/data/User";
import Layout from "@/components/Navbar";
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) =>Promise<void>;
  register: ( name: string, email: string, password: string, role: "student" | "admin", studentId?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({
     id: '1',
    name: 'Ahmed ezz aldin ',
    email: 'ahmedez570@gmail.com',
    password: '1234567',
    role: 'student',
    createdAt: '2025-11-11'
  });
  
const login = async (email: string, password: string) => {
    console.log(`Logging in user:${email} ${password}`)
}

const register = async (name: string, email: string, password: string) => {
      console.log(`Registering user: ${name} ${email} ${password}`)
}

const logout = () => {
    console.log("Logging out user:")
}

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};