"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { showSuccess, showError } from '@/utils/toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MainLayout } from '@/components/layout/MainLayout';
import { useSite } from '@/hooks/useSite';

export const AIGenerator = () => {
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
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
  const { site, setSite } = useSite();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/ai/generate', {
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

      if (!response.ok) throw new Error('Failed to generate site');
      
      const data = await response.json();
      setSite(data);
      showSuccess('Website generated successfully!');
      navigate('/dashboard');
    } catch (error) {
      showError('Failed to generate website');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0l8 8m0-8l8 8M9 12l8 8-8 8M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10l2-2M0 0l8 8m2-2h10lI see the issue - the file extension needs to be `.tsx` for JSX syntax. Let me fix this:

<dyad-rename from="src/hooks/useAuth.ts" to="src/hooks/useAuth.tsx"></dyad-rename>

<dyad-write path="src/hooks/useAuth.tsx" description="Fixed auth hook with proper TypeScript JSX syntax">
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      navigate('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, password: string, name?: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      navigate('/dashboard');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};