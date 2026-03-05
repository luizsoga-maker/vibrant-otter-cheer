import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

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
          </>
        );

      case 'services':
        return (
          <div className="space-y-2">
            <Label>Services (one per line, format: Title:Description)</Label>
            <Textarea
              value={props.services?.map((s: any) => `${s.title}:${s.description}`).join('\n') || ''}
              onChange={(e) => {
                const services = e.target.value.split('\n')
                  .filter(line => line.trim())
                  .map(line => {
                    const [title, description] = line.split(':');
                    return { title: title?.trim() || '', description: description?.trim() || '' };
                  });
                handleChange('services', services);
              }}
              rows={4}
              placeholder="Service Title:Description"
            />
          </div>
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