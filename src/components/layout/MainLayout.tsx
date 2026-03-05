"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { UserNav } from '@/components/UserNav';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/">
                <Logo />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/dashboard')
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/sites"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/sites') || location.pathname.startsWith('/sites/')
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  My Sites
                </Link>
                <Link
                  to="/ai-generator"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/ai-generator')
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AI Generator
                </Link>
              </nav>
            </div>

            <UserNav />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © 2024 SiteCraft AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-700">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-slate-500 hover:text-slate-700">
                Terms
              </Link>
              <Link to="/contact" className="text-sm text-slate-500 hover:text-slate-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};