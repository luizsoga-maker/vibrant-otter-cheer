import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface SectionEditorProps {
  onAddSection: (type: string) => void;
}

export const SectionEditor: React.FC<SectionEditorProps> = ({ onAddSection }) => {
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