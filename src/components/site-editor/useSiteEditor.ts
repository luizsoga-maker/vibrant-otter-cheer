"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/toast';
import { API_BASE_URL } from '@/config';
import type { Site, Page, Section } from './types';

export const useSiteEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [site, setSite] = useState<Site | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'completed' | 'failed'>('idle');
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [deploymentTarget, setDeploymentTarget] = useState<'production' | 'staging' | 'development'>('production');

  const fetchSite = useCallback(async () => {
    if (!id) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/sites/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch site');
      const data = await response.json();
      setSite(data);
      setPages(data.pages || []);
    } catch (error) {
      showError('Failed to load site');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    if (id) {
      fetchSite();
    }
  }, [id, fetchSite]);

  const saveSite = async () => {
    setSaving(true);
    try {
      for (const page of pages) {
        await fetch(`${API_BASE_URL}/api/pages/${page.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: page.title,
            slug: page.slug,
            sections: page.sections,
            theme: page.theme,
            seo: page.seo,
            analytics: page.analytics,
            forms: page.forms,
            blog: page.blog,
            multilang: page.multilang,
            caching: page.caching,
            apiIntegrations: page.apiIntegrations,
            collaboration: page.collaboration,
          }),
        });
      }
      showSuccess('Site saved successfully');
    } catch (error) {
      showError('Failed to save site');
    } finally {
      setSaving(false);
    }
  };

  const updatePage = async (pageId: string, updates: Partial<Page>) => {
    setPages(prev => prev.map(page => 
      page.id === pageId ? { ...page, ...updates } : page
    ));
  };

  const deploySite = async () => {
    try {
      setDeploymentStatus('deploying');
      setDeploymentProgress(0);

      // Simulate deployment progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setDeploymentProgress(i);
      }

      setDeploymentStatus('completed');
      showSuccess('Site deployed successfully');
    } catch (error) {
      setDeploymentStatus('failed');
      showError('Site deployment failed');
    }
  };

  const addSection = (type: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type,
      props: getDefaultProps(type),
    };
    const updated = [...pages];
    updated[activePage].sections.push(newSection);
    setPages(updated);
  };

  const deleteSection = (pageIndex: number, sectionIndex: number) => {
    const updated = [...pages];
    updated[pageIndex].sections.splice(sectionIndex, 1);
    setPages(updated);
  };

  const updateSection = (pageIndex: number, sectionIndex: number, props: Record<string, any>) => {
    const updated = [...pages];
    updated[pageIndex].sections[sectionIndex].props = props;
    setPages(updated);
  };

  const currentPage = pages[activePage];

  return {
    site,
    pages,
    activePage,
    setActivePage,
    loading,
    saving,
    deploymentStatus,
    deploymentProgress,
    deploymentTarget,
    setDeploymentTarget,
    fetchSite,
    saveSite,
    deploySite,
    updatePage,
    addSection,
    deleteSection,
    updateSection,
    currentPage,
  };
};

function getDefaultProps(type: string): Record<string, any> {
  switch (type) {
    case 'hero':
      return {
        title: 'Your Hero Title',
        subtitle: 'Your subtitle here',
        ctaText: 'Call to Action',
        ctaLink: '/contact',
        backgroundImage: '',
      };
    case 'about':
      return {
        title: 'About Us',
        description: 'Tell your story here...',
        features: [],
        image: '',
      };
    case 'services':
      return {
        title: 'Our Services',
        services: [],
      };
    case 'testimonials':
      return {
        title: 'Testimonials',
        testimonials: [],
      };
    case 'contact':
      return {
        title: 'Contact Us',
        phone: '',
        email: '',
        address: '',
        whatsapp: '',
        socialLinks: [],
        mapEmbed: '',
      };
    case 'pricing':
      return {
        title: 'Pricing Plans',
        subtitle: 'Choose the plan that fits your needs',
        plans: [],
      };
    case 'faq':
      return {
        title: 'Frequently Asked Questions',
        faqs: [],
      };
    default:
      return {};
  }
}