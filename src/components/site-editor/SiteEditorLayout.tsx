import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SiteEditorLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

export const SiteEditorLayout: React.FC<SiteEditorLayoutProps> = ({
  leftPanel,
  rightPanel,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1 space-y-4">
        {leftPanel}
      </div>
      <div className="lg:col-span-3">
        <Card>
          <CardContent className="p-6">
            {rightPanel}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};