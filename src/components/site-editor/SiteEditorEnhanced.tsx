"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import SiteEditorHeader from './site-editor/SiteEditorHeader';
import SiteEditorLayout from './site-editor/SiteEditorLayout';
import PageManager from './site-editor/PageManager';
import SectionEditor from './site-editor/SectionEditor';
import CDNPanel from './site-editor/panels/CDNPanel';
import DeploymentPanel from './site-editor/panels/DeploymentPanel';
import EcommercePanel from './site-editor/panels/EcommercePanel';
import MembershipPanel from './site-editor/panels/MembershipPanel';
import BlogPanel from './site-editor/panels/BlogPanel';
import FormsPanel from './site-editor/panels/FormsPanel';
import MultilangPanel from './site-editor/panels/MultilangPanel';
import AnalyticsPanel from './site-editor/panels/AnalyticsPanel';
import ApiIntegrationsPanel from './site-editor/panels/ApiIntegrationsPanel';
import CachingPanel from './site-editor/panels/CachingPanel';
import CollaborationPanel from './site-editor/panels/CollaborationPanel';
import SEOPanel from './site-editor/panels/SEOPanel';
import { useSiteEditor } from './site-editor/useSiteEditor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Section } from './site-editor/types';

export const SiteEditorEnhanced = () => {
  const navigate = useNavigate();
  const {
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
    saveSite,
    deploySite,
    updatePageTitle,
    updatePageSlug,
    updateSection,
    deleteSection,
    addSection,
    currentPage,
  } = useSiteEditor();

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
              <Label>Page Title</Label>
              <Input
                value={currentPage?.title || ''}
                onChange={(e) => updatePageTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Page Slug</Label>
              <Input
                value={currentPage?.slug || ''}
                onChange={(e) => updatePageSlug(e.target.value)}
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