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
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
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
    addSection,
    deleteSection,
    updateSection,
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

  const handleAddPage = () => {
    const newPage = {
      id: `page-${Date.now()}`,
      slug: `page-${pages.length + 1}`,
      title: `Page ${pages.length + 1}`,
      sections: [],
    };
    updatePage('new', newPage);
    setActivePage(pages.length);
  };

  const handleAddSection = (type: string) => {
    addSection(type);
  };

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

  const renderSectionEditor = (section: Section, sectionIndex: number) => {
    const { type, props } = section;

    return (
      <div key={section.id} className="border rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium capitalize">{type} Section</h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => deleteSection(activePage, sectionIndex)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        {type === 'hero' && (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, title: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, subtitle: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Text</Label>
              <Input
                value={props.ctaText || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, ctaText: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Link</Label>
              <Input
                value={props.ctaLink || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, ctaLink: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Background Image URL</Label>
              <Input
                value={props.backgroundImage || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, backgroundImage: e.target.value })
                }
                placeholder="https://..."
              />
            </div>
          </>
        )}

        {type === 'about' && (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, title: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={props.description || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, description: e.target.value })
                }
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                value={props.image || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, image: e.target.value })
                }
                placeholder="https://..."
              />
            </div>
          </>
        )}

        {type === 'services' && (
          <div className="space-y-2">
            <Label>Services (one per line, format: Title:Description)</Label>
            <Textarea
              value={props.services?.map((s: any) => `${s.title}:${s.description}`).join('\n') || ''}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const services = e.target.value.split('\n')
                  .filter(line => line.trim())
                  .map(line => {
                    const [title, description] = line.split(':');
                    return { title: title?.trim() || '', description: description?.trim() || '' };
                  });
                updateSection(activePage, sectionIndex, { ...props, services });
              }}
              rows={4}
              placeholder="Service Title:Description"
            />
          </div>
        )}

        {type === 'testimonials' && (
          <div className="space-y-2">
            <Label>Testimonials (one per line, format: Name:Role:Text)</Label>
            <Textarea
              value={props.testimonials?.map((t: any) => `${t.name}:${t.role}:${t.text}`).join('\n') || ''}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const testimonials = e.target.value.split('\n')
                  .filter(line => line.trim())
                  .map(line => {
                    const [name, role, text] = line.split(':');
                    return { name: name?.trim() || '', role: role?.trim() || '', text: text?.trim() || '' };
                  });
                updateSection(activePage, sectionIndex, { ...props, testimonials });
              }}
              rows={4}
              placeholder="Name:Role:Testimonial text"
            />
          </div>
        )}

        {type === 'contact' && (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, title: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={props.phone || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={props.email || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea
                value={props.address || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, address: e.target.value })
                }
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp</Label>
              <Input
                value={props.whatsapp || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, whatsapp: e.target.value })
                }
              />
            </div>
          </>
        )}

        {type === 'pricing' && (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, title: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, subtitle: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Plans (one per line, format: Name:Price:Features)</Label>
              <Textarea
                value={props.plans?.map((p: any) => `${p.name}:${p.price}:${p.features?.join(',')}`).join('\n') || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const plans = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [name, price, features] = line.split(':');
                      return { 
                        name: name?.trim() || '', 
                        price: price?.trim() || '', 
                        features: features?.split(',').map((f: string) => f.trim()) || [],
                        highlighted: false
                      };
                    });
                  updateSection(activePage, sectionIndex, { ...props, plans });
                }}
                rows={4}
                placeholder="Basic:29:1 Site,Subdomain,Basic Editor"
              />
            </div>
          </>
        )}

        {type === 'faq' && (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateSection(activePage, sectionIndex, { ...props, title: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>FAQs (one per line, format: Question:Answer)</Label>
              <Textarea
                value={props.faqs?.map((f: any) => `${f.question}:${f.answer}`).join('\n') || ''}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const faqs = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [question, answer] = line.split(':');
                      return { question: question?.trim() || '', answer: answer?.trim() || '' };
                    });
                  updateSection(activePage, sectionIndex, { ...props, faqs });
                }}
                rows={4}
                placeholder="What is your return policy?:30-day money back guarantee"
              />
            </div>
          </>
        )}
      </div>
    );
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
              onAddPage={handleAddPage}
            />
            <SectionEditor onAddSection={handleAddSection} />
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold">Sections</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSection('hero')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>
              <div className="space-y-4">
                {currentPage?.sections?.map((section: Section, index: number) => (
                  <div key={section.id}>
                    {renderSectionEditor(section, index)}
                  </div>
                )) || (
                  <div className="text-center py-8 text-slate-500 border rounded-lg">
                    <p>No sections yet. Add one from the sidebar or use the button above.</p>
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