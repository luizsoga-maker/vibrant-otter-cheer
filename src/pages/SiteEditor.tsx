"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError } from '@/utils/toast';
import { Save, Eye, ArrowLeft, Plus, Trash2, GripVertical } from 'lucide-react';

interface Section {
  id: string;
  type: string;
  props: any;
}

interface Page {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
}

export const SiteEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [site, setSite] = useState<any>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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

  const savePage = async (pageIndex: number) => {
    setSaving(true);
    try {
      const page = pages[pageIndex];
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
      showSuccess('Page saved successfully');
    } catch (error) {
      showError('Failed to save page');
    } finally {
      setSaving(false);
    }
  };

  const addSection = (pageIndex: number, type: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type,
      props: getDefaultProps(type),
    };
    
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections.push(newSection);
    setPages(updatedPages);
  };

  const updateSection = (pageIndex: number, sectionIndex: number, props: any) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections[sectionIndex].props = props;
    setPages(updatedPages);
  };

  const deleteSection = (pageIndex: number, sectionIndex: number) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections.splice(sectionIndex, 1);
    setPages(updatedPages);
  };

  const getDefaultProps = (type: string) => {
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
  };

  const renderSectionEditor = (pageIndex: number, section: Section, sectionIndex: number) => {
    const { type, props } = section;

    return (
      <Card key={section.id} className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base capitalize">{type} Section</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteSection(pageIndex, sectionIndex)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {type === 'hero' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={props.subtitle || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, subtitle: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Text</Label>
                <Input
                  value={props.ctaText || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, ctaText: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Link</Label>
                <Input
                  value={props.ctaLink || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, ctaLink: e.target.value })}
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
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={props.description || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, description: e.target.value })}
                  rows={4}
                />
              </div>
            </>
          )}

          {type === 'services' && (
            <div className="space-y-2">
              <Label>Services (one per line)</Label>
              <Textarea
                value={props.services?.map((s: any) => `${s.title}:${s.description}`).join('\n') || ''}
                onChange={(e) => {
                  const services = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [title, description] = line.split(':');
                      return { title: title?.trim() || '', description: description?.trim() || '' };
                    });
                  updateSection(pageIndex, sectionIndex, { ...props, services });
                }}
                rows={4}
                placeholder="Service Title:Description"
              />
            </div>
          )}

          {type === 'contact' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={props.phone || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={props.email || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea
                  value={props.address || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, address: e.target.value })}
                  rows={2}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </MainLayout>
    );
  }

  const currentPage = pages[activePage];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{site?.name}</h1>
              <p className="text-slate-600">Edit your website</p>
            </div>
          </div>
          <Button onClick={() => savePage(activePage)} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pages.map((page, index) => (
                    <Button
                      key={page.id}
                      variant={activePage === index ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActivePage(index)}
                    >
                      {page.title}
                    </Button>
                  ))}
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Page
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['hero', 'about', 'services', 'testimonials', 'contact'].map((type) => (
                    <Button
                      key={type}
                      variant="outline"
                      className="w-full justify-start capitalize"
                      onClick={() => addSection(activePage, type)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      {type}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Page Editor</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Page Title</Label>
                    <Input
                      value={currentPage?.title || ''}
                      onChange={(e) => {
                        const updated = [...pages];
                        updated[activePage].title = e.target.value;
                        setPages(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Page Slug</Label>
                    <Input
                      value={currentPage?.slug || ''}
                      onChange={(e) => {
                        const updated = [...pages];
                        updated[activePage].slug = e.target.value;
                        setPages(updated);
                      }}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-base font-semibold mb-4 block">Sections</Label>
                    <div className="space-y-4">
                      {currentPage?.sections?.map((section: Section, index: number) => (
                        <div key={section.id} className="relative">
                          <div className="absolute -left-8 top-4 cursor-move text-slate-400">
                            <GripVertical className="h-5 w-5" />
                          </div>
                          {renderSectionEditor(activePage, section, index)}
                        </div>
                      )) || (
                        <div className="text-center py-8 text-slate-500">
                          <p>No sections yet. Add one from the sidebar.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};