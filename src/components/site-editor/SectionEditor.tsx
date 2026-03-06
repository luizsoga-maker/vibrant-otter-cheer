import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface SectionEditorProps {
  onAddSection: (type: string) => void;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({ onAddSection }) => {
  const sectionTypes = [
    { type: 'hero', label: 'Hero' },
    { type: 'about', label: 'About' },
    { type: 'services', label: 'Services' },
    { type: 'testimonials', label: 'Testimonials' },
    { type: 'contact', label: 'Contact' },
    { type: 'pricing', label: 'Pricing' },
    { type: 'faq', label: 'FAQ' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Sections</h3>
      <div className="grid grid-cols-2 gap-2">
        {sectionTypes.map(({ type, label }) => (
          <Button
            key={type}
            variant="outline"
            size="sm"
            onClick={() => onAddSection(type)}
            className="justify-start"
          >
            <Plus className="h-4 w-4 mr-2" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};