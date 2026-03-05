"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError, showLoading } from '@/utils/toast';
import { Wand2, Loader2 } from 'lucide-react';

export const AIGenerator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = showLoading('Generating your website with AI...');

    try {
      const response = await fetch('http://localhost:3000/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          ...formData,
          socialLinks: formData.socialLinks.split('\n').filter(link => link.trim()),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate site');
      }

      const data = await response.json();
      
      // Create site with generated data
      const siteResponse = await fetch('http://localhost:3000/api/sites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name: formData.name,
          slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
          theme: {
            colors: {
              primary: '#3b82f6',
              secondary: '#10b981',
              background: '#ffffff',
              text: '#333333',
            },
            typography: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '1.6',
            },
          },
        }),
      });

      if (!siteResponse.ok) {
        throw new Error('Failed to create site');
      }

      const site = await siteResponse.json();
      
      // Create pages for the site
      for (const page of data.siteStructure.pages) {
        await fetch(`http://localhost:3000/api/pages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            siteId: site.id,
            slug: page.slug,
            title: page.title,
            sections: page.sections,
          }),
        });
      }

      showSuccess('Website generated successfully!');
      navigate('/dashboard');
    } catch (error) {
      showError('Failed to generate website. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Wand2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Website Generator</h1>
          <p className="text-slate-600">
            Describe your business and our AI will create a complete website for you in seconds.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Business Details</CardTitle>
              <CardDescription>
                Fill in your business information and our AI will generate a professional website.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Business Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profession">Profession *</Label>
                  <Input
                    id="profession"
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    placeholder="e.g., Doctor, Lawyer, Consultant"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty *</Label>
                  <Input
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows={2}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours">Business Hours *</Label>
                <Input
                  id="hours"
                  value={formData.hours}
                  onChange={(e) => setFormData({...formData, hours: e.target.value})}
                  placeholder="Mon-Fri: 9AM - 5PM"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialLinks">Social Media Links (one per line)</Label>
                <Textarea
                  id="socialLinks"
                  value={formData.socialLinks}
                  onChange={(e) => setFormData({...formData, socialLinks: e.target.value})}
                  rows={3}
                  placeholder="https://facebook.com/yourbusiness&#10;https://instagram.com/yourbusiness&#10;https://linkedin.com/company/yourbusiness"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Tone of Voice</Label>
                <Select 
                  value={formData.tone} 
                  onValueChange={(value) => setFormData({...formData, tone: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Website...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate My Website
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
};