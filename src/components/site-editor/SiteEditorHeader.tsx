import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, CloudUpload } from 'lucide-react';

interface SiteEditorHeaderProps {
  siteName: string;
  onBack: () => void;
  onSave: () => void;
  onDeploy: () => void;
  saving: boolean;
  deploymentStatus: 'idle' | 'deploying' | 'completed' | 'failed';
}

export const SiteEditorHeader: React.FC<SiteEditorHeaderProps> = ({
  siteName,
  onBack,
  onSave,
  onDeploy,
  saving,
  deploymentStatus,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{siteName}</h1>
          <p className="text-slate-600">Edit your website</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={onSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save'}
        </Button>
        <Button 
          onClick={onDeploy} 
          disabled={deploymentStatus === 'deploying'}
          variant="default"
        >
          <CloudUpload className="h-4 w-4 mr-2" />
          {deploymentStatus === 'deploying' ? 'Deploying...' : 'Deploy'}
        </Button>
      </div>
    </div>
  );
};