"use client";

import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Zap, Shield, BarChart3, Globe, Sparkles } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Generate complete websites in seconds with advanced AI',
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain and build your brand',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track your performance with detailed analytics',
    },
    {
      icon: Sparkles,
      title: 'Easy Editor',
      description: 'Drag-and-drop editor with no coding required',
    },
    {
      icon: CheckCircle2,
      title: 'SEO Optimized',
      description: 'Built-in SEO tools to help you rank higher',
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-16 py-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Website Builder
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Build Your Website
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              In Minutes, Not Months
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            SiteCraft AI uses artificial intelligence to create stunning, professional websites 
            tailored to your business. No design skills needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <a href="/signup">Start Building Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/ai-generator">Try AI Generator</a>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Powerful features to help you create, manage, and grow your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Dream Website?
              </h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Join thousands of businesses using SiteCraft AI to create beautiful, 
                effective websites in minutes.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="/signup">Get Started for Free</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;