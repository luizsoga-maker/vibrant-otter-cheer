import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { Section } from './types';

interface SectionEditorProps {
  onAddSection: (type: string) => void;
}

interface SectionEditorItemProps {
  section: Section;
  pageIndex: number;
  sectionIndex: number;
  onUpdate: (pageIndex: number, sectionIndex: number, props: Record<string, any>) => void;
  onDelete: (pageIndex: number, sectionIndex: number) => void;
}

export const SectionEditor: React.FC<SectionEditorProps> & {
  Item: React.FC<SectionEditorItemProps>;
} = ({ onAddSection }) => {
  const sectionTypes = ['hero', 'about', 'services', 'testimonials', 'contact', 'pricing', 'faq'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sectionTypes.map((type) => (
            <Button
              key={type}
              variant="outline"
              className="w-full justify-start capitalize"
              onClick={() => onAddSection(type)}
            >
              <Plus className="h-4 w-4 mr-2" />
              {type}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

SectionEditor.Item = ({ section, pageIndex, sectionIndex, onUpdate, onDelete }: SectionEditorItemProps) => {
  const { type, props } = section;

  const handleChange = (field: string, value: any) => {
    onUpdate(pageIndex, sectionIndex, { ...props, [field]: value });
  };

  const renderFields = () => {
    switch (type) {
      case 'hero':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Hero title"
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                placeholder="Hero subtitle"
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Text</Label>
              <Input
                value={props.ctaText || ''}
                onChange={(e) => handleChange('ctaText', e.target.value)}
                placeholder="Call to action"
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Link</Label>
              <Input
                value={props.ctaLink || ''}
                onChange={(e) => handleChange('ctaLink', e.target.value)}
                placeholder="/contact"
              />
            </div>
            <div className="space-y-2">
              <Label>Background Image URL</Label>
              <Input
                value={props.backgroundImage || ''}
                onChange={(e) => handleChange('backgroundImage', e.target.value)}
                placeholder="https://..."
              />
            </div>
          </>
        );

      case 'about':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="About section title"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={props.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Tell your story..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                value={props.image || ''}
                onChange={(e) => handleChange('image', e.target.value)}
                placeholder="https://..."
              />
            </div>
          </>
        );

      case 'services':
        return (
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={props.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Services section title"
            />
            <Label className="mt-4">Services (one per line, format: Title:Description:Icon)</Label>
            <Textarea
              value={props.services?.map((s: any) => `${s.title}:${s.description}:${s.icon || ''}`).join('\n') || ''}
              onChange={(e) => {
                const services = e.target.value.split('\n')
                  .filter(line => line.trim())
                  .map(line => {
                    const parts = line.split(':');
                    return { 
                      title: parts[0]?.trim() || '', 
                      description: parts[1]?.trim() || '',
                      icon: parts[2]?.trim() || 'star'
                    };
                  });
                handleChange('services', services);
              }}
              rows={4}
              placeholder="Web Design:Create beautiful websites:design&#10;SEO:Optimize for search engines:search"
            />
          </div>
        );

      case 'testimonials':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Testimonials section title"
              />
            </div>
            <div className="space-y-2">
              <Label>Testimonials (one per line, format: Name:Role:Text)</Label>
              <Textarea
                value={props.testimonials?.map((t: any) => `${t.name}:${t.role}:${t.text}`).join('\n') || ''}
                onChange={(e) => {
                  const testimonials = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [name, role, text] = line.split(':');
                      return { name: name?.trim() || '', role: role?.trim() || '', text: text?.trim() || '' };
                    });
                  handleChange('testimonials', testimonials);
                }}
                rows={4}
                placeholder="John Doe:Client:Great service!&#10;Jane Smith:Patient:Excellent care!"
              />
            </div>
          </>
        );

      case 'contact':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Contact section title"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={props.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={props.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contact@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea
                value={props.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                rows={2}
                placeholder="Your business address"
              />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp</Label>
              <Input
                value={props.whatsapp || ''}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <Label>Social Links (one per line, format: Platform:URL)</Label>
              <Textarea
                value={props.socialLinks?.map((link: any) => `${link.platform || 'social'}:${link.url}`).join('\n') || ''}
                onChange={(e) => {
                  const socialLinks = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [platform, url] = line.split(':');
                      return { platform: platform?.trim() || 'social', url: url?.trim() || '' };
                    });
                  handleChange('socialLinks', socialLinks);
                }}
                rows={3}
                placeholder="Facebook:https://facebook.com/yourpage&#10;Instagram:https://instagram.com/yourpage"
              />
            </div>
          </>
        );

      case 'pricing':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Pricing section title"
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                placeholder="Pricing section subtitle"
              />
            </div>
            <div className="space-y-2">
              <Label>Plans (one per line, format: Name:Price:Period:Features:highlighted)</Label>
              <Textarea
                value={props.plans?.map((p: any) => `${p.name}:${p.price}:${p.period}:${p.features?.join(',')}:${p.highlighted || false}`).join('\n') || ''}
                onChange={(e) => {
                  const plans = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const parts = line.split(':');
                      return { 
                        name: parts[0]?.trim() || '', 
                        price: Number(parts[1]) || 0,
                        period: parts[2]?.trim() || 'month',
                        features: (parts[3] || '').split(',').map((f: string) => f.trim()).filter(Boolean),
                        highlighted: parts[4] === 'true'
                      };
                    });
                  handleChange('plans', plans);
                }}
                rows={4}
                placeholder="Basic:29:month:1 Site,Subdomain,Basic Editor:false&#10;Pro:79:month:3 Sites,Custom Domain,Advanced Editor:true"
              />
            </div>
          </>
        );

      case 'faq':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="FAQ section title"
              />
            </div>
            <div className="space-y-2">
              <Label>FAQs (one per line, format: Question:Answer)</Label>
              <Textarea
                value={props.faqs?.map((f: any) => `${f.question}:${f.answer}`).join('\n') || ''}
                onChange={(e) => {
                  const faqs = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [question, answer] = line.split(':');
                      return { question: question?.trim() || '', answer: answer?.trim() || '' };
                    });
                  handleChange('faqs', faqs);
                }}
                rows={4}
                placeholder="What is your return policy?:30-day money-back guarantee.&#10;How long does delivery take?:2-3 business days."
              />
            </div>
          </>
        );

      default:
        return <p className="text-sm text-slate-500">Unknown section type: {type}</p>;
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base capitalize flex items-center gap-2">
            <GripVertical className="h-4 w-4 text-slate-400" />
            {type} Section
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(pageIndex, sectionIndex)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderFields()}
      </CardContent>
    </Card>
  );
};