"use client";

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';
import { Home, Search } from 'lucide-react';
import { BASE_PATH } from '@/config';

const NotFound = () => {
  const location = useLocation();

  // Redirect all 404s to index.html for SPA routing on GitHub Pages
  useEffect(() => {
    const path = window.location.pathname;
    const search = window.location.search;
    const hash = window.location.hash;
    
    // If we're already at index.html, don't redirect
    if (path.endsWith('/index.html')) {
      return;
    }

    // Delay redirect slightly to allow UI to render
    const timer = setTimeout(() => {
      // For GitHub Pages, we need to redirect to index.html with the full path
      // The BASE_PATH is already included in the path if set correctly
      window.location.replace(`${BASE_PATH}index.html${path}${search}${hash}`);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-slate-200">404</h1>
            <div className="relative -mt-16">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's help you find your way back.
          </p>
          
          <div className="space-y-3">
            <Button asChild size="lg" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;