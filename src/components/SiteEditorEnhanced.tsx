"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError } from '@/utils/toast';
import { 
  SiteEditorHeader, 
  SiteEditorLayout, 
  PageManager, 
  SectionEditor,
  CDNPanel,
  DeploymentPanel,
  EcommercePanel,
  MembershipPanel,
  BlogPanel,
  FormsPanel,
  MultilangPanel,
  AnalyticsPanel,
  ApiIntegrationsPanel,
  CachingPanel,
  CollaborationPanel,
  SEOPanel
} from './site-editor';
import type { Site, Page, Section } from './site-editor';

export const SiteEditorEnhanced = () => {
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

  useEffect(() => {
    if (id) {
      fetchSite();
    }
  }, [id]);

  const fetchSite = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/sites/${id}`, {
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
  };

  const saveSite = async () => {
    setSaving(true);
    try {
      for (const page of pages) {
        await fetch(`http://localhost:3000/api/pages/${page.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: page.title,
            slug: page.slug,
            sections: page.sections,
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

  const deploySite = async () => {
    try {
      setDeploymentStatus('deploying');
      setDeploymentProgress(0);

      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setDeploymentProgress(i);
      }

      setDeploymentStatus('completed');
      showSuccess('Site deployed successfully');
    } catch (error) {
      setDeploymentStatus('failed');
      showError('Site deployment failed');
    }
  };

  const updatePageTitle = (title: string) => {
    const updated = [...pages];
    updated[activePage].title = title;
    setPages(updated);
  };

  const updatePageSlug = (slug: string) => {
    const updated = [...pages];
    updated[activePage].slug = slug;
    setPages(updated);
  };

  const updateSection = (pageIndex: number, sectionIndex: number, props: Record<string, any>) => {
    const updated = [...pages];
    updated[pageIndex].sections[sectionIndex].props = props;
    setPages(updated);
  };

  const deleteSection = (pageIndex: number, sectionIndex: number) => {
    const updated = [...pages];
    updated[pageIndex].sections.splice(sectionIndex, 1);
    setPages(updated);
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

  const currentPage = pages[activePage];

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
      <SiteEditorHeader
        siteName={site?.name || ''}
        onBack={() => navigate('/dashboard')}
        onSave={saveSite}
        onDeploy={deploySite}
        saving={saving}
        deploymentStatus={deploymentStatus}
      />

      <SiteEditorLayout
        leftPanel={
          <>
            <PageManager
              pages={pages}
              activePage={activePage}
              onPageSelect={setActivePage}
              onAddPage={() => {}}
            />
            <SectionEditor onAddSection={addSection} />
            <CDNPanel />
            <DeploymentPanel
              deploymentStatus={deploymentStatus}
              deploymentProgress={deploymentProgress}
              deploymentTarget={deploymentTarget}
              onDeploymentTargetChange={setDeploymentTarget}
            />
            <EcommercePanel />
            <MembershipPanel />
            <BlogPanel />
            <FormsPanel />
            <MultilangPanel />
            <AnalyticsPanel />
            <ApiIntegrationsPanel />
            <CachingPanel />
            <CollaborationPanel />
            <SEOPanel />
          </>
        }
        rightPanel={
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Page Title</label>
              <input
                type="text"
                value={currentPage?.title || ''}
                onChange={(e) => updatePageTitle(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Page Slug</label>
              <input
                type="text"
                value={currentPage?.slug || ''}
                onChange={(e) => updatePageSlug(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-md"
              />
            </div>

            <div className="border-t pt-4">
              <h3 className="text-base font-semibold mb-4">Sections</h3>
              <div className="space-y-4">
                {currentPage?.sections?.map((section: Section, index: number) => (
                  <SectionEditor.Item
                    key={section.id}
                    section={section}
                    pageIndex={activePage}
                    sectionIndex={index}
                    onUpdate={updateSection}
                    onDelete={deleteSection}
                  />
                )) || (
                  <div className="text-center py-8 text-slate-500">
                    <p>No sections yet. Add one from the sidebar.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      />
    </MainLayout>
  );
};

function getDefaultProps(type: string): Record<string, any> {
  switch (type) {
    case 'hero':
      return {
        title: 'Your Hero Title',
        subtitle: 'Your subtitle here',
        ctaText: 'Call to Action',
        ctaLink: '/contact',
      };
    case 'about':
      return {
        title: 'About Us',
        description: 'Tell your story here...',
        features: [],
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
      };
    default:
      return {};
  }
}