"use client";

import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
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
} from './index';
import { useSiteEditor } from './useSiteEditor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Section } from './types';

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
    updatePage,
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

  const updatePageTitle = (title: string) => {
    if (currentPage) {
      updatePage(currentPage.id, { title });
    }
  };

  const updatePageSlug = (slug: string) => {
    if (currentPage) {
      updatePage(currentPage.id, { slug });
    }
  };

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
            <SectionEditor onAddSection={() => {}} />
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePageTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Page Slug</Label>
              <Input
                value={currentPage?.slug || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePageSlug(e.target.value)}
              />
            </div>

            <div className="border-t pt-4">
              <h3 className="text-base font-semibold mb-4">Sections</h3>
              <div className="space-y-4">
                {currentPage?.sections?.map((section: Section) => (
                  <div key={section.id}>
                    <div className="p-4 border rounded">
                      <p className="font-medium capitalize">{section.type}</p>
                      <p className="text-sm text-slate-500">
                        {JSON.stringify(section.props).substring(0, 100)}...
                      </p>
                    </div>
                  </div>
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