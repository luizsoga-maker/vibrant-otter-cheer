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
      // ... existing cases for hero, about, services, testimonials, contact ...

      case 'pricing':
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
              <Label>Subtitle (optional)</Label>
              <Input
                value={props.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Pricing Plans</Label>
              {props.plans?.map((plan: any, idx: number) => (
                <div key={idx} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Plan {idx + 1}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('plans', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={plan.name || ''}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, name: e.target.value })}
                      placeholder="Plan name (e.g., Basic, Pro)"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        value={plan.price || ''}
                        onChange={(e) => handleArrayChange('plans', idx, { ...plan, price: e.target.value })}
                        placeholder="Price (e.g., 29)"
                      />
                      <Input
                        value={plan.period || ''}
                        onChange={(e) => handleArrayChange('plans', idx, { ...plan, period: e.target.value })}
                        placeholder="Period (e.g., /month)"
                      />
                    </div>
                    <Textarea
                      value={plan.features?.join('\n') || ''}
                      onChange={(e) => handleArrayChange('plans', idx, { ...plan, features: e.target.value.split('\n').filter(f => f.trim()) })}
                      rows={3}
                      placeholder="Features (one per line)"
                    />
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={plan.highlighted || false}
                        onChange={(e) => handleArrayChange('plans', idx, { ...plan, highlighted: e.target.checked })}
                        className="mr-2"
                      />
                      <span className="text-sm">Highlight this plan</span>
                    </label>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('plans', { name: '', price: '', period: '', features: [], highlighted: false })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Plan
              </Button>
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
              />
            </div>
            <div className="space-y-2">
              <Label>FAQ Items</Label>
              {props.faqs?.map((faq: any, idx: number) => (
                <div key={idx} className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">FAQ {idx + 1}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('faqs', idx)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={faq.question || ''}
                      onChange={(e) => handleArrayChange('faqs', idx, { ...faq, question: e.target.value })}
                      placeholder="Question"
                    />
                    <Textarea
                      value={faq.answer || ''}
                      onChange={(e) => handleArrayChange('faqs', idx, { ...faq, answer: e.target.value })}
                      rows={3}
                      placeholder="Answer"
                    />
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addArrayItem('faqs', { question: '', answer: '' })}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </Button>
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