import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface Page {
  id: string;
  slug: string;
  title: string;
  sections: any[];
}

interface PageManagerProps {
  pages: Page[];
  activePage: number;
  onPageSelect: (index: number) => void;
  onAddPage: () => void;
}

export const PageManager: React.FC<PageManagerProps> = ({
  pages,
  activePage,
  onPageSelect,
  onAddPage,
}) => {
  return (
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
              onClick={() => onPageSelect(index)}
            >
              {page.title}
            </Button>
          ))}
          <Button variant="outline" className="w-full justify-start" onClick={onAddPage}>
            <Plus className="h-4 w-4 mr-2" />
            Add Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};