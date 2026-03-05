import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface DeploymentPanelProps {
  deploymentStatus: 'idle' | 'deploying' | 'completed' | 'failed';
  deploymentProgress: number;
  deploymentTarget: 'production' | 'staging' | 'development';
  onDeploymentTargetChange: (target: 'production' | 'staging' | 'development') => void;
}

export const DeploymentPanel: React.FC<DeploymentPanelProps> = ({
  deploymentStatus,
  deploymentProgress,
  deploymentTarget,
  onDeploymentTargetChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Site Deployment</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {deploymentStatus === 'idle' ? '✓' : deploymentStatus === 'deploying' ? '🔄' : deploymentStatus === 'completed' ? '✓' : '✗'}
              </div>
              <div className="text-sm text-slate-500">
                {deploymentStatus === 'idle' ? 'Ready' : deploymentStatus === 'deploying' ? 'Deploying' : deploymentStatus === 'completed' ? 'Completed' : 'Failed'}
              </div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {deploymentTarget === 'production' ? 'PROD' : deploymentTarget === 'staging' ? 'STAGE' : 'DEV'}
              </div>
              <div className="text-sm text-slate-500">Target</div>
            </div>
          </div>
        </div>

        {deploymentStatus === 'deploying' && (
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${deploymentProgress}%` }}></div>
          </div>
        )}

        <div className="space-y-2">
          <Label>Deployment Target</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="deploymentTarget"
                value="production"
                checked={deploymentTarget === 'production'}
                onChange={(e) => onDeploymentTargetChange('production')}
                className="mr-2"
              />
              <span className="text-sm">Production</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="deploymentTarget"
                value="staging"
                checked={deploymentTarget === 'staging'}
                onChange={(e) => onDeploymentTargetChange('staging')}
                className="mr-2"
              />
              <span className="text-sm">Staging</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="deploymentTarget"
                value="development"
                checked={deploymentTarget === 'development'}
                onChange={(e) => onDeploymentTargetChange('development')}
                className="mr-2"
              />
              <span className="text-sm">Development</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Deployment Options</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">Build site</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">Deploy assets</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mr-2"
              />
              <span className="text-sm">Update DNS</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};