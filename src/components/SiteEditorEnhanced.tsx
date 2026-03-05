"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GripVertical, 
  Plus, 
  Trash2, 
  Save, 
  ArrowLeft, 
  Eye,
  ChevronUp,
  ChevronDown,
  Type,
  MessageSquare,
  Phone,
  List,
  DollarSign,
  HelpCircle,
  Palette
} from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError } from '@/utils/toast';

interface Section {
  id: string;
  type: string;
  props: any;
  order: number;
}

interface Page {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
}

const SECTION_TYPES = [
  { type: 'hero', icon: Type, label: 'Hero' },
  { type: 'about', icon: MessageSquare, label: 'About' },
  { type: 'services', icon: List, label: 'Services' },
  { type: 'testimonials', icon: MessageSquare, label: 'Testimonials' },
  { type: 'pricing', icon: DollarSign, label: 'Pricing' },
  { type: 'faq', icon: HelpCircle, label: 'FAQ' },
  { type: 'contact', icon: Phone, label: 'Contact' },
];

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
        features: [
          { icon: 'check-circle', title: 'Feature 1', description: 'Description' },
          { icon: 'check-circle', title: 'Feature 2', description: 'Description' },
        ],
        image: '',
      };
    case 'services':
      return {
        title: 'Our Services',
        services: [
          { icon: 'briefcase', title: 'Service 1', description: 'Description', price: '' },
          { icon: 'briefcase', title: 'Service 2', description: 'Description', price: '' },
        ],
      };
    case 'testimonials':
      return {
        title: 'What Our Clients Say',
        testimonials: [
          { name: 'John Doe', role: 'Client', text: 'Great service!', avatar: '' },
          { name: 'Jane Smith', role: 'Client', text: 'Highly recommended!', avatar: '' },
        ],
      };
    case 'pricing':
      return {
        title: 'Pricing Plans',
        plans: [
          { name: 'Basic', price: '29', period: 'month', features: ['Feature 1', 'Feature 2'], highlighted: false },
          { name: 'Pro', price: '79', period: 'month', features: ['Feature 1', 'Feature 2', 'Feature 3'], highlighted: true },
          { name: 'Enterprise', price: '199', period: 'month', features: ['All features'], highlighted: false },
        ],
      };
    case 'faq':
      return {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'What is your return policy?', answer: '30-day money-back guarantee.' },
          { question: 'How can I contact support?', answer: 'Email us at support@example.com' },
        ],
      };
    case 'contact':
      return {
        title: 'Get in Touch',
        phone: '',
        email: '',
        address: '',
        whatsapp: '',
        socialLinks: [],
        mapEmbed: '',
      };
    default:
      return {};
  }
};

export const SiteEditorEnhanced = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [site, setSite] = useState<any>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('edit');
  const [showThemePanel, setShowThemePanel] = useState(false);

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
      showSuccess('Site saved successfully!');
    } catch (error) {
      showError('Failed to save site');
    } finally {
      setSaving(false);
    }
  };

  const addPage = () => {
    const newPage: Page = {
      id: `page-${Date.now()}`,
      slug: `page-${pages.length + 1}`,
      title: `Page ${pages.length + 1}`,
      sections: [],
    };
    setPages([...pages, newPage]);
    setActivePage(pages.length);
  };

  const deletePage = (pageIndex: number) => {
    if (pages.length <= 1) {
      showError('Cannot delete the last page');
      return;
    }
    const updatedPages = pages.filter((_, index) => index !== pageIndex);
    setPages(updatedPages);
    if (activePage >= updatedPages.length) {
      setActivePage(updatedPages.length - 1);
    }
  };

  const updatePage = (pageIndex: number, updates: Partial<Page>) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex] = { ...updatedPages[pageIndex], ...updates };
    setPages(updatedPages);
  };

  const addSection = (pageIndex: number, type: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type,
      props: getDefaultProps(type),
      order: pages[pageIndex].sections.length,
    };
    
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections.push(newSection);
    setPages(updatedPages);
  };

  const updateSection = (pageIndex: number, sectionId: string, props: any) => {
    const updatedPages = [...pages];
    const sectionIndex = updatedPages[pageIndex].sections.findIndex(s => s.id === sectionId);
    if (sectionIndex !== -1) {
      updatedPages[pageIndex].sections[sectionIndex].props = props;
      setPages(updatedPages);
    }
  };

  const deleteSection = (pageIndex: number, sectionId: string) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections = updatedPages[pageIndex].sections.filter(s => s.id !== sectionId);
    setPages(updatedPages);
  };

  const moveSection = (pageIndex: number, sectionId: string, direction: 'up' | 'down') => {
    const updatedPages = [...pages];
    const sections = updatedPages[pageIndex].sections;
    const currentIndex = sections.findIndex(s => s.id === sectionId);
    
    if (direction === 'up' && currentIndex > 0) {
      [sections[currentIndex], sections[currentIndex - 1]] = [sections[currentIndex - 1], sections[currentIndex]];
    } else if (direction === 'down' && currentIndex < sections.length - 1) {
      [sections[currentIndex], sections[currentIndex + 1]] = [sections[currentIndex + 1], sections[currentIndex]];
    }
    
    setPages(updatedPages);
  };

  const updateTheme = (updates: any) => {
    if (!site) return;
    setSite({
      ...site,
      theme: {
        ...site.theme,
        ...updates,
      },
    });
  };

  const renderSectionEditor = (pageIndex: number, section: Section) => {
    const { type, props } = section;

    const handlePropChange = (key: string, value: any) => {
      updateSection(pageIndex, section.id, { ...props, [key]: value });
    };

    const handleArrayChange = (key: string, index: number, value: any) => {
      const newArray = [...(props[key] || [])];
      newArray[index] = value;
      handlePropChange(key, newArray);
    };

    const addArrayItem = (key: string, defaultItem: any) => {
      handlePropChange(key, [...(props[key] || []), defaultItem]);
    };

    const removeArrayItem = (key: string, index: number) => {
      const newArray = [...(props[key] || [])];
      newArray.splice(index, 1);
      handlePropChange(key, newArray);
    };

    return (
      <Card key={section.id} className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-slate-400" />
              <CardTitle className="text-base capitalize">{type} Section</CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveSection(pageIndex, section.id, 'up')}
                disabled={pageIndex === 0}
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveSection(pageIndex, section.id, 'down')}
                disabled={pageIndex === pages[pageIndex].sections.length - 1}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteSection(pageIndex, section.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {type === 'hero' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => handlePropChange('title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={props.subtitle || ''}
                  onChange={(e) => handlePropChange('subtitle', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Text</Label>
                <Input
                  value={props.ctaText || ''}
                  onChange={(e) => handlePropChange('ctaText', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Link</Label>
                <Input
                  value={props.ctaLink || ''}
                  onChange={(e) => handlePropChange('ctaLink', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Background Image URL</Label>
                <Input
                  value={props.backgroundImage || ''}
                  onChange={(e) => handlePropChange('backgroundImage', e.target.value)}
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
                  onChange={(e) => handlePropChange('title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={props.description || ''}
                  onChange={(e) => handlePropChange('description', e.target.value)}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input
                  value={props.image || ''}
                  onChange={(e) => handlePropChange('image', e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label>Features</Label>
                {props.features?.map((feature: any, idx: number) => (
                  <div key={idx} className="flex gap-2 items-start p-2 border rounded">
                    <Input
                      value={feature.title || ''}
                      onChange={(e) => handleArrayChange('features', idx, { ...feature, title: e.target.value })}
                      placeholder="Title"
                      className="flex-1"
                    />
                    <Input
                      value={feature.description || ''}
                      onChange={(e) => handleArrayChange('features', idx, { ...feature, description: e.target.value })}
                      placeholder="Description"
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('features', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('features', { icon: 'check-circle', title: 'New Feature', description: 'Description' })}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>
            </>
          )}

          {type === 'services' && (
            <div className="space-y-2">
              <Label>Services</Label>
              {props.services?.map((service: any, idx: number) => (
                <div key={idx} className="flex gap-2 items-start p-2 border rounded">
                  <Input
                    value={service.title || ''}
                    onChange={(e) => handleArrayChange('services', idx, { ...service, title: e.target.value })}
                    placeholder="Service Title"
                    className="flex-1"
                  />
                  <Input
                    value={service.description || ''}
                    onChange={(e) => handleArrayChange('services', idx, { ...service, description: e.target.value })}
                    placeholder="Description"
                    className="flex-1"
                  />
                  <Input
                    value={service.price || ''}
                    onChange={(e) => handleArrayChange('services', idx, { ...service, price: e.target.value })}
                    placeholder="Price"
                    className="w-24"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('services', idx)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('services', { icon: 'briefcase', title: 'New Service', description: 'Description', price: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </div>
          )}

          {type === 'testimonials' && (
            <div className="space-y-2">
              <Label>Testimonials</Label>
              {props.testimonials?.map((testimonial: any, idx: number) => (
                <div key={idx} className="p-2 border rounded space-y-2">
                  <Input
                    value={testimonial.name || ''}
                    onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, name: e.target.value })}
                    placeholder="Client Name"
                  />
                  <Input
                    value={testimonial.role || ''}
                    onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, role: e.target.value })}
                    placeholder="Role (e.g., CEO, Patient)"
                  />
                  <Textarea
                    value={testimonial.text || ''}
                    onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, text: e.target.value })}
                    placeholder="Testimonial text"
                    rows={2}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('testimonials', idx)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('testimonials', { name: 'Client Name', role: 'Role', text: 'Testimonial text', avatar: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </div>
          )}

          {type === 'pricing' && (
            <div className="space-y-2">
              <Label>Pricing Plans</Label>
              {props.plans?.map((plan: any, idx: number) => (
                <div key={idx} className="p-2 border rounded space-y-2">
                  <div className="flex gap-2">
                    <Input
                      value={plan.name || ''}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, name: e.target.value })}
                      placeholder="Plan Name"
                      className="flex-1"
                    />
                    <Input
                      value={plan.price || ''}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, price: e.target.value })}
                      placeholder="Price"
                      className="w-24"
                    />
                    <Input
                      value={plan.period || ''}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, period: e.target.value })}
                      placeholder="month/year"
                      className="w-20"
                    />
                  </div>
                  <div className="space-y-1">
                    {plan.features?.map((feature: string, fIdx: number) => (
                      <div key={fIdx} className="flex gap-2">
                        <Input
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...plan.features];
                            newFeatures[fIdx] = e.target.value;
                            handleArrayChange('plans', idx, { ...plan, features: newFeatures });
                          }}
                          placeholder="Feature"
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newFeatures = [...plan.features];
                            newFeatures.splice(fIdx, 1);
                            handleArrayChange('plans', idx, { ...plan, features: newFeatures });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const newFeatures = [...(plan.features || []), 'New Feature'];
                        handleArrayChange('plans', idx, { ...plan, features: newFeatures });
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Feature
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={plan.highlighted || false}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, highlighted: e.target.checked })}
                      className="rounded"
                    />
                    <Label className="text-sm">Highlight this plan</Label>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('plans', { 
                  name: 'New Plan', 
                  price: '0', 
                  period: 'month', 
                  features: ['Feature 1'], 
                  highlighted: false 
                })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Plan
              </Button>
            </div>
          )}

          {type === 'faq' && (
            <div className="space-y-2">
              <Label>FAQ Items</Label>
              {props.faqs?.map((faq: any, idx: number) => (
                <div key={idx} className="p-2 border rounded space-y-2">
                  <Input
                    value={faq.question || ''}
                    onChange={(e) => handleArrayChange('faqs', idx, { ...faq, question: e.target.value })}
                    placeholder="Question"
                  />
                  <Textarea
                    value={faq.answer || ''}
                    onChange={(e) => handleArrayChange('faqs', idx, { ...faq, answer: e.target.value })}
                    placeholder="Answer"
                    rows={2}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('faqs', idx)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('faqs', { question: 'Question?', answer: 'Answer.' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
            </div>
          )}

          {type === 'contact' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => handlePropChange('title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={props.phone || ''}
                  onChange={(e) => handlePropChange('phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={props.email || ''}
                  onChange={(e) => handlePropChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea
                  value={props.address || ''}
                  onChange={(e) => handlePropChange('address', e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>WhatsApp</Label>
                <Input
                  value={props.whatsapp || ''}
                  onChange={(e) => handlePropChange('whatsapp', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Google Maps Embed URL</Label>
                <Input
                  value={props.mapEmbed || ''}
                  onChange={(e) => handlePropChange('mapEmbed', e.target.value)}
                  placeholder="https://www.google.com/maps/embed?..."
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderSectionPreview = (section: Section) => {
    const theme = site?.theme || {
      colors: { primary: '#3b82f6', secondary: '#10b981', background: '#ffffff', text: '#333333' },
      typography: { fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '1.6' },
    };

    const { type, props } = section;

    switch (type) {
      case 'hero':
        return (
          <section 
            className="py-20 px-4 text-center"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
              backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.primary }}>
                {props.title}
              </h1>
              <p className="text-xl mb-8" style={{ color: theme.colors.secondary }}>
                {props.subtitle}
              </p>
              <button 
                className="px-6 py-3 rounded-lg font-medium"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                }}
              >
                {props.ctaText}
              </button>
            </div>
          </section>
        );

      case 'about':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                    {props.title}
                  </h2>
                  <p className="text-lg mb-6">{props.description}</p>
                  {props.features && props.features.length > 0 && (
                    <div className="space-y-4">
                      {props.features.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: theme.colors.primary }}
                          >
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm opacity-80">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {props.image && (
                  <div>
                    <img src={props.image} alt="About" className="rounded-lg shadow-lg w-full" />
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'services':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.services?.map((service: any, idx: number) => (
                  <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      <span className="text-white text-xl">●</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="mb-4 opacity-80">{service.description}</p>
                    {service.price && (
                      <p className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                        ${service.price}
                        <span className="text-sm font-normal opacity-60">/month</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {props.testimonials?.map((testimonial: any, idx: number) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      {testimonial.avatar && (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm opacity-60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'pricing':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {props.plans?.map((plan: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`p-6 border rounded-lg ${plan.highlighted ? 'border-2 shadow-lg scale-105' : ''}`}
                    style={plan.highlighted ? { borderColor: theme.colors.primary } : {}}
                  >
                    {plan.highlighted && (
                      <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.primary }}>
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold" style={{ color: theme.colors.primary }}>${plan.price}</span>
                      <span className="opacity-60">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features?.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="w-full py-2 rounded-lg font-medium"
                      style={{ 
                        backgroundColor: plan.highlighted ? theme.colors.primary : 'transparent',
                        color: plan.highlighted ? theme.colors.background : theme.colors.primary,
                        border: plan.highlighted ? 'none' : `1px solid ${theme.colors.primary}`,
                      }}
                    >
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'faq':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="space-y-4">
                {props.faqs?.map((faq: any, idx: number) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2" style={{ color: theme.colors.primary }}>
                      {faq.question}
                    </h3>
                    <p className="opacity-80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="space-y-6">
                    {props.phone && (
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="opacity-80">{props.phone}</p>
                      </div>
                    )}
                    {props.email && (
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="opacity-80">{props.email}</p>
                      </div>
                    )}
                    {props.address && (
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="opacity-80">{props.address}</p>
                      </div>
                    )}
                    {props.whatsapp && (
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="opacity-80">{props.whatsapp}</p>
                      </div>
                    )}
                    {props.socialLinks && props.socialLinks.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Social Links</h3>
                        <div className="space-y-2">
                          {props.socialLinks.map((link: any, idx: number) => (
                            <a 
                              key={idx} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block hover:underline"
                              style={{ color: theme.colors.primary }}
                            >
                              {link.platform || 'Social Link'}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {props.mapEmbed && (
                  <div>
                    <h3 className="font-semibold mb-4">Find Us</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={props.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      default:
        return (
          <section 
            className="py-8 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <p>Unknown section type: {type}</p>
          </section>
        );
    }
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
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowThemePanel(!showThemePanel)}
            >
              <Palette className="h-4 w-4 mr-2" />
              Theme
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(`/sites/${id}`, '_blank')}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={saveSite} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>

        {showThemePanel && (
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={site?.theme?.colors?.primary || '#3b82f6'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, primary: e.target.value } })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={site?.theme?.colors?.primary || '#3b82f6'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, primary: e.target.value } })}
                      placeholder="#3b82f6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={site?.theme?.colors?.secondary || '#10b981'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, secondary: e.target.value } })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={site?.theme?.colors?.secondary || '#10b981'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, secondary: e.target.value } })}
                      placeholder="#10b981"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={site?.theme?.colors?.background || '#ffffff'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, background: e.target.value } })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={site?.theme?.colors?.background || '#ffffff'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, background: e.target.value } })}
                      placeholder="#ffffff"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={site?.theme?.colors?.text || '#333333'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, text: e.target.value } })}
                      className="w-12 h-10 p-1"
                    />
                    <Input
                      value={site?.theme?.colors?.text || '#333333'}
                      onChange={(e) => updateTheme({ colors: { ...site.theme.colors, text: e.target.value } })}
                      placeholder="#333333"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Font Family</Label>
                <select
                  value={site?.theme?.typography?.fontFamily || 'Inter, sans-serif'}
                  onChange={(e) => updateTheme({ typography: { ...site.theme.typography, fontFamily: e.target.value } })}
                  className="w-full p-2 border border-slate-200 rounded-md"
                >
                  <option value="Inter, sans-serif">Inter</option>
                  <option value="'Segoe UI', sans-serif">Segoe UI</option>
                  <option value="'Roboto', sans-serif">Roboto</option>
                  <option value="'Open Sans', sans-serif">Open Sans</option>
                  <option value="'Montserrat', sans-serif">Montserrat</option>
                  <option value="'Playfair Display', serif">Playfair Display</option>
                  <option value="'Merriweather', serif">Merriweather</option>
                </select>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="edit">Editor</TabsTrigger>
            <TabsTrigger value="preview">Live Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="edit" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {pages.map((page, index) => (
                        <div key={page.id} className="flex items-center gap-1">
                          <Button
                            variant={activePage === index ? 'default' : 'ghost'}
                            className="flex-1 justify-start"
                            onClick={() => setActivePage(index)}
                          >
                            {page.title}
                          </Button>
                          {pages.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deletePage(index)}
                              className="h-8 w-8 p-0"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" className="w-full justify-start" onClick={addPage}>
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
                    <div className="grid grid-cols-2 gap-2">
                      {SECTION_TYPES.map(({ type, icon: Icon, label }) => (
                        <Button
                          key={type}
                          variant="outline"
                          className="h-auto py-3 flex flex-col items-center gap-2"
                          onClick={() => addSection(activePage, type)}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-xs">{label}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Page Settings</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                      <Label>Page Slug (URL)</Label>
                      <Input
                        value={currentPage?.slug || ''}
                        onChange={(e) => {
                          const updated = [...pages];
                          updated[activePage].slug = e.target.value;
                          setPages(updated);
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Label className="text-base font-semibold">Sections</Label>
                  {currentPage?.sections?.map((section: Section, index: number) => (
                    <div key={section.id}>
                      {renderSectionEditor(activePage, section)}
                    </div>
                  )) || (
                    <Card>
                      <CardContent className="pt-6 text-center text-slate-500">
                        <p>No sections yet. Add one from the sidebar.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardContent className="p-0">
                <div className="border-b p-4 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">Live Preview</span>
                      {pages.length > 1 && (
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActivePage(Math.max(0, activePage - 1))}
                            disabled={activePage === 0}
                          >
                            Previous
                          </Button>
                          <span className="text-sm">
                            Page {activePage + 1} of {pages.length}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActivePage(Math.min(pages.length - 1, activePage + 1))}
                            disabled={activePage === pages.length - 1}
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`/sites/${id}`, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Open in New Tab
                    </Button>
                  </div>
                </div>
                <div className="bg-white">
                  {currentPage?.sections?.map((section: Section, idx: number) => (
                    <React.Fragment key={section.id}>
                      {renderSectionPreview(section)}
                    </React.Fragment>
                  )) || (
                    <div className="p-12 text-center text-slate-500">
                      <p>No content to preview. Add sections to see your site.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};