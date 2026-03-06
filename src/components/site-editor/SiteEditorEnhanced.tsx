import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { 
  SiteEditorHeader 
} from '@/components/site-editor/components/SiteEditorHeader';
import { SiteEditorLayout } from '@/components/site-editor/components/SiteEditorLayout';
import { PageManager } from '@/components/site-editor/PageManager';
import { SectionEditor } from '@/components/site-editor/SectionEditor';
import { 
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
  SEOPanel,
  ThemeSettingsPanel
} from '@/components/site-editor/panels';
import { useSiteEditor } from '@/components/site-editor/useSiteEditor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
            <BlogPanel<dyad-problem-report summary="2 problems">
<problem file="src/components/site-editor/SiteEditorEnhanced.tsx" line="5" column="8" code="2307">Cannot find module './components/SiteEditorHeader' or its corresponding type declarations.</problem>
<problem file="src/components/site-editor/SiteEditorEnhanced.tsx" line="6" column="34" code="2307">Cannot find module './components/SiteEditorLayout' or its corresponding type declarations.</problem>
</dyad-problem-report><think>The user is asking me to fix 2 TypeScript compile-time errors in the SiteEditorEnhanced.tsx file. The errors are:

1. Cannot find module './components/SiteEditorHeader' or its corresponding type declarations. (TS2307)
2. Cannot find module './components/SiteEditorLayout' or its corresponding type declarations. (TS2307)

Looking at the code, the imports are using relative paths like `./components/SiteEditorHeader` and `./components/SiteEditorLayout`. However, based on the file structure, these components are actually in the same directory as SiteEditorEnhanced.tsx, not in a subdirectory called `components`.

Let me check the file structure from the provided code:
- SiteEditorEnhanced.tsx is in `src/components/site-editor/`
- There are files like `SiteEditorHeader.tsx` and `SiteEditorLayout.tsx` in the same directory `src/components/site-editor/`

So the correct imports should be:
- `import { SiteEditorHeader } from './SiteEditorHeader';`
- `import { SiteEditorLayout } from './SiteEditorLayout';`

The current code is trying to import from `./components/SiteEditorHeader` which would be looking for a `components` subdirectory, but the files are directly in the `site-editor` directory.

I need to fix these import paths.</think><dyad-chat-summary>Fixed import paths for SiteEditorHeader and SiteEditorLayout components - changed from './components/...' to direct imports from the same directory.</dyad-chat-summary><dyad-write path="src/components/site-editor/SiteEditorEnhanced.tsx" description="Fixed module resolution errors by correcting import paths - SiteEditorHeader and SiteEditorLayout are in the same directory, not in a 'components' subfolder.">
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { 
  SiteEditorHeader 
} from './SiteEditorHeader';
import { SiteEditorLayout } from './SiteEditorLayout';
import { PageManager } from './PageManager';
import { SectionEditor } from './SectionEditor';
import { 
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
  SEOPanel,
  ThemeSettingsPanel
} from './panels';
import { useSiteEditor } from './useSiteEditor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
            <ThemeSettingsPanel />
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
                {currentPage?.sections?.map((section: any) => (
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