"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError } from '@/utils/toast';
import { API_ENDPOINTS } from '@/config';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const AIGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [formData, setFormData] = useState({
    profession: '',
    name: '',
    city: '',
    specialty: '',
    whatsapp: '',
    address: '',
    hours: '',
    socialLinks: '',
    tone: 'professional',
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkApiHealth();
  }, []);

  const checkApiHealth = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.HEALTH}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setApiStatus('online');
      } else {
        setApiStatus('offline');
      }
    } catch (error) {
      setApiStatus('offline');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.AI_GENERATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          profession: formData.profession,
          name: formData.name,
          city: formData.city,
          specialty: formData.specialty,
          whatsapp: formData.whatsapp,
          address: formData.address,
          hours: formData.hours,
          socialLinks: formData.socialLinks.split('\n').filter(link => link.trim()),
          tone: formData.tone,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to generate site');
      }
      
      await response.json();
      showSuccess('Website generated successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      showError(error.message || 'Failed to generate website');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Website Generator</h1>
          <p className="text-slate-600">
            Fill in your details and let AI create a complete website for you in seconds.
          </p>
        </div>

        {/* API Status Indicator */}
        <div className={`mb-6 p-4 rounded-lg border ${
          apiStatus === 'online' ? 'bg-green-50 border-green-200' : 
          apiStatus === 'offline' ? 'bg-red-50 border-red-200' : 
          'bg-yellow-50 border-yellow-200'
        }`}>
          <div className="flex items-center gap-2">
            {apiStatus === 'online' && <CheckCircle className="h-5 w-5 text-green-600" />}
            {apiStatus === 'offline' && <AlertCircle className="h-5 w-5 text-red-600" />}
            {apiStatus === 'checking' && <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-600 border-t-transparent"></div>}
            <span className={`font-medium ${
              apiStatus === 'online' ? 'text-green-800' : 
              apiStatus === 'offline' ? 'text-red-800' : 
              'text-yellow-800'
            }`}>
              {apiStatus === 'online' ? 'API Server is online' : 
               apiStatus === 'offline' ? 'API Server is offline. Please start the backend server.' : 
               'Checking API status...'}
            </span>
          </div>
          {apiStatus === 'offline' && (
            <div className="mt-2 text-sm text-red-700">
              <p>To start the backend server:</p>
              <ol className="list-decimal list-inside mt-1 space-y-1">
                <li>Open a terminal in the <code className="bg-red-100 px-1 rounded">apps/api</code> directory</li>
                <li>Run: <code className="bg-red-100 px-1 rounded">npm install</code></li>
                <li>Copy <code className="bg-red-100 px-1 rounded">.env.example</code> to <code className="bg-red-100 px-1 rounded">.env</code></li>
                <li>Run: <code className="bg-red-100 px-1 rounded">npm run start:dev</code></li>
              </ol>
            </div>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession *</Label>
                  <Input
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="e.g., Doctor, Lawyer, Consultant"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty *</Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    placeholder="e.g., Cardiology, Family Law"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone *</Label>
                  <select
                    id="tone"
                    name="tone"
                    value={formData.tone}
                    onChange={handleChange}
                    className="w-full p-2 border border-slate-200 rounded-md"
                    required
                    disabled={apiStatus === 'offline' || loading}
                  >
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="authoritative">Authoritative</option>
                    <option value="casual">Casual</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your business address"
                  disabled={apiStatus === 'offline' || loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours">Business Hours</Label>
                <Input
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  placeholder="Mon-Fri: 9am - 5pm"
                  disabled={apiStatus === 'offline' || loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialLinks">Social Links (one per line)</Label>
                <Textarea
                  id="socialLinks"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleChange}
                  placeholder="https://facebook.com/yourpage&#10;https://instagram.com/yourpage&#10;https://linkedin.com/in/yourprofile"
                  rows={3}
                  disabled={apiStatus === 'offline' || loading}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={loading || apiStatus === 'offline'}
                >
                  {loading ? 'Generating...' : 'Generate Website with AI'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};