"use client";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, ExternalLink, Edit } from 'lucide-react';
import { showError } from '@/utils/toast';
import { MainLayout } from '@/components/layout/MainLayout';

interface Site {
  id: string;
  name: string;
  slug: string;
  status: string;
  createdAt: string;
}

export const Dashboard = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/sites', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch sites');
        
        const data = await response.json();
        setSites(data);
      } catch (error) {
        showError('Failed to load sites');
      } finally {
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  const handleCreateSite = () => {
    navigate('/ai-generator');
  };

  const handleEditSite = (id: string) => {
    navigate(`/sites/${id}/edit`);
  };

  const handlePreviewSite = (id: string) => {
    navigate(`/sites/${id}`);
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">
              Welcome back, {user?.name || 'User'}! Manage your websites here.
            </p>
          </div>
          <Button onClick={handleCreateSite} className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <Plus className="h-4 w-4 mr-2" />
            Create New Site
          </Button>
        </div>

        {sites.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No websites yet</h3>
                <p className="text-slate-600 mb-6">
                  Create your first website with our AI generator in just a few minutes.
                </p>
                <Button onClick={handleCreateSite} className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Site
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site) => (
              <Card key={site.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="truncate">{site.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      site.status === 'ACTIVE' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {site.status}
                    </span>
                  </CardTitle>
                  <CardDescription>{site.slug}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center">
                      <span>Site ID: {site.id}</span>
                    </div>
                    <div className="flex items-center">
                      <span>Created: {new Date(site.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditSite(site.id)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handlePreviewSite(site.id)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};