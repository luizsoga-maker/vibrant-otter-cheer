import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { ImageUpload } from '@/components/ImageUpload';

interface Section {
  id: string;
  type: string;
  props: any;
}

interface SectionEditorProps {
  onAddSection: (type: string) => void;
}

interface SectionEditorItemProps {
  section: Section;
  pageIndex: number;
  sectionIndex: number;
  onUpdate: (pageIndex: number, sectionIndex: number, props: any) => void;
  onDelete: (pageIndex: number, sectionIndex: number) => void;
}

export const SectionEditor: React.FC<SectionEditorProps> & {
  Item: React.FC<SectionEditorItemProps>;
} = ({ onAddSection }) => {
  const sectionTypes = ['hero', 'about', 'services', 'testimonials', 'contact'];

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

SectionEditor.Item = ({ section, pageIndex, sectionIndex, onUpdate, onDelete }) => {
  const { type, props } = section;

  const handleChange = (field: string, value: any) => {
    onUpdate(pageIndex, sectionIndex, { ...props, [field]: value });
  };

  const handleArrayChange = (field: string, index: number, value: any) => {
    const newArray = [...(props[field] || [])];
    newArray[index] = value;
    handleChange(field, newArray);
  };

  const addArrayItem = (field: string, defaultItem: any) => {
    const newArray = [...(props[field] || []), defaultItem];
    handleChange(field, newArray);
  };

  const removeArrayItem = (field: string, index: number) => {
    const newArray = [...(props[field] || [])];
    newArray.splice(index, 1);
    handleChange(field, newArray);
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
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Text</Label>
              <Input
                value={props.ctaText || ''}
                onChange={(e) => handleChange('ctaText', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Link</Label>
              <Input
                value={props.ctaLink || ''}
                onChange={(e) => handleChange('ctaLink', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Background Image</Label>
              <ImageUpload
                onImageSelect={(url) => handleChange('backgroundImage', url)}
                currentImage={props.backgroundImage}
                label="Upload background image"
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
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={props.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Features</Label>
              {props.features?.map((feature: any, idx: number) => (
                <div key={idx} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Feature {idx + 1}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('features', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={feature.title || ''}
                      onChange={(e) => handleArrayChange('features', idx, { ...feature, title: e.target.value })}
                      placeholder="Title"
                    />
                    <Textarea
                      value={feature.description || ''}
                      onChange={(e) => handleArrayChange('features', idx, { ...feature, description: e.target.value })}
                      rows={2}
                      placeholder="Description"
                    />
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('features', { title: '', description: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Image</Label>
              <ImageUpload
                onImageSelect={(url) => handleChange('image', url)}
                currentImage={props.image}
                label="Upload about image"
              />
            </div>
          </>
        );

      case 'services':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Services</Label>
              {props.services?.map((service: any, idx: number) => (
                <div key={idx} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Service {idx + 1}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('services', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={service.title || ''}
                      onChange={(e) => handleArrayChange('services', idx, { ...service, title: e.target.value })}
                      placeholder="Service title"
                    />
                    <Textarea
                      value={service.description || ''}
                      onChange={(e) => handleArrayChange('services', idx, { ...service, description: e.target.value })}
                      rows={2}
                      placeholder="Description"
                    />
                    <Input
                      value={service.price || ''}
                      onChange={(e) => handleArrayChange('services', idx, { ...service, price: e.target.value })}
                      placeholder="Price (optional)"
                    />
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('services', { title: '', description: '', price: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </div>
          </>
        );

      case 'testimonials':
        return (
          <>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={props.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Testimonials</Label>
              {props.testimonials?.map((testimonial: any, idx: number) => (
                <div key={idx} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Testimonial {idx + 1}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('testimonials', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={testimonial.name || ''}
                      onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, name: e.target.value })}
                      placeholder="Name"
                    />
                    <Input
                      value={testimonial.role || ''}
                      onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, role: e.target.value })}
                      placeholder="Role"
                    />
                    <Textarea
                      value={testimonial.text || ''}
                      onChange={(e) => handleArrayChange('testimonials', idx, { ...testimonial, text: e.target.value })}
                      rows={3}
                      placeholder="Testimonial text"
                    />
                    <div className="space-y-2">
                      <Label>Avatar Image</Label>
                      <ImageUpload
                        onImageSelect={(url) => handleArrayChange('testimonials', idx, { ...testimonial, avatar: url })}
                        currentImage={testimonial.avatar}
                        label="Upload avatar"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('testimonials', { name: '', role: '', text: '', avatar: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
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
              />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={props.phone || ''}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={props.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea
                value={props.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label>WhatsApp</Label>
              <Input
                value={props.whatsapp || ''}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Social Links</Label>
              {props.socialLinks?.map((link: any, idx: number) => (
                <div key={idx} className="flex gap-2">
                  <Input
                    value={link.platform || ''}
                    onChange={(e) => {
                      const newLinks = [...props.socialLinks];
                      newLinks[idx] = { ...link, platform: e.target.value };
                      handleChange('socialLinks', newLinks);
                    }}
                    placeholder="Platform (e.g., Facebook)"
                  />
                  <Input
                    value={link.url || ''}
                    onChange={(e) => {
                      const newLinks = [...props.socialLinks];
                      newLinks[idx] = { ...link, url: e.target.value };
                      handleChange('socialLinks', newLinks);
                    }}
                    placeholder="URL"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('socialLinks', idx)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('socialLinks', { platform: '', url: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Social Link
              </Button>
            </div>
            <div className="space-y-2">
              <Label>Map Embed (optional)</Label>
              <Textarea
                value={props.mapEmbed || ''}
                onChange={(e) => handleChange('mapEmbed', e.target.value)}
                rows={3}
                placeholder="Paste Google Maps embed code"
              />
            </div>
          </>
        );

      default:
        return <p className="text-sm text-slate-500">Unknown section type</p>;
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base capitalize">{type} Section</CardTitle>
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