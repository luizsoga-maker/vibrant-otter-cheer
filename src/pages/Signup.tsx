"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { showSuccess, showError } from '@/utils/toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/Logo';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password, name);
      showSuccess('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      showError('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Create your account</CardTitle>
          <CardDescription className="text-center">
            Start building your AI-powered website today
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <dyad-problem-report summary="6 problems">
<problem file="src/hooks/useAuth.tsx" line="2" column="10" code="2724">'"react-router-dom"' has no exported member named 'useRouter'. Did you mean 'useRoutes'?</problem>
<problem file="src/App.tsx" line="9" column="8" code="2613">Module '"/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/Signup"' has no default export. Did you mean to use 'import { Signup } from "/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/Signup"' instead?</problem>
<problem file="src/App.tsx" line="10" column="8" code="2613">Module '"/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/Dashboard"' has no default export. Did you mean to use 'import { Dashboard } from "/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/Dashboard"' instead?</problem>
<problem file="src/App.tsx" line="11" column="8" code="2613">Module '"/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/AIGenerator"' has no default export. Did you mean to use 'import { AIGenerator } from "/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/AIGenerator"' instead?</problem>
<problem file="src/App.tsx" line="12" column="8" code="2613">Module '"/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/SiteEditor"' has no default export. Did you mean to use 'import { SiteEditor } from "/Users/luizsoga/dyad-apps/vibrant-otter-cheer/src/pages/SiteEditor"' instead?</problem>
<problem file="src/App.tsx" line="18" column="29" code="2304">Cannot find name 'useAuth'.</problem>
</dyad-problem-report><think>Okay, let's tackle these TypeScript errors one by one. 

First, the error in useAuth.tsx about 'react-router-dom' not having 'useRouter'. I remember that in React Router v6, the hook is called 'useNavigate' instead of 'useRouter'. So I need to change the import from 'useRouter' to 'useNavigate' and update the variable name in the code.

Next, the App.tsx errors about modules not having default exports. The user is importing components like Signup, Dashboard, etc., using the default import syntax. But if those components don't have a default export, TypeScript throws an error. The fix here is to use named imports instead. For example, instead of 'import Signup from "./pages/Signup"', it should be 'import { Signup } from "./pages/Signup"'. I'll need to adjust all those imports in App.tsx accordingly.

Then, the error in App.tsx about 'useAuth' not being found. The user is using 'useAuth' in the ProtectedRoute component, but the hook is exported from 'useAuth.ts' as a named export. So the import statement should be 'import { useAuth } from "@/hooks/useAuth"'. I'll correct that import line.

Let me check each error again to make sure I didn't miss anything. The first error is definitely about the wrong hook name. The others are all about default vs named exports. Once those are fixed, the code should compile without those errors.
</think><dyad-write path="src/hooks/useAuth.tsx" description="Fixed useRouter import to useNavigate"> import { createContext, useContext, useState, useEffect } from 'react'; import { useNavigate } from 'react-router-dom'; // Fixed hook name interface User { id: string; email: string; name?: string; avatar?: string; } interface AuthContextType { user: User | null; login: (email: string, password: string) => Promise<void>; signup: (email: string, password: string, name?: string) => Promise<void>; logout: () => void; loading: boolean; } const AuthContext = createContext<AuthContextType | undefined>(undefined); export const useAuth = () => { const context = useContext(AuthContext); if (context === undefined) { throw new Error('useAuth must be used within an AuthProvider'); } return context; }; export const AuthProvider = ({ children }: { children: React.ReactNode }) => { const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(true); const navigate = useNavigate(); useEffect(() => { const token = localStorage.getItem('token'); const userData = localStorage.getItem('user'); if (token && userData) { setUser(JSON.parse(userData)); } setLoading(false); }, []); const login = async (email: string, password: string) => { try { const response = await fetch('http://localhost:3000/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }), }); if (!response.ok) { throw new Error('Login failed'); } const data = await response.json(); localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); setUser(data.user); navigate('/dashboard'); } catch (error) { throw error; } }; const signup = async (email: string, password: string, name?: string) => { try { const response = await fetch('http://localhost:3000/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name }), }); if (!response.ok) { throw new Error('Signup failed'); } const data = await response.json(); localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); setUser(data.user); navigate('/dashboard'); } catch (error) { throw error; } }; const logout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); setUser(null); navigate('/'); }; return ( <AuthContext.Provider value={{ user, login, signup, logout, loading }}> {children} </AuthContext.Provider> ); };