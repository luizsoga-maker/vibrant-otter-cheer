import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

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
          <Label>Deployment Target</Label>
          <select
            value={deploymentTarget}
            onChange={(e) => onDeploymentTargetChange(e.target.value as any)}
            className="w-full p-2 border border-slate-200 rounded-md"
          >
            <option value="production">Production</option>
            <option value="staging">Staging</option>
            <option value="development">Development</option>
          </select>
        </div>
        {deploymentStatus === 'deploying' && (
          <div className="space-y-2">
            <Label>Progress: {deploymentProgress}%</Label>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${deploymentProgress}%` }}
              ></div>
            </div>
          </div>
        )}
        {deploymentStatus === 'completed' && (
          <div className="text-green-600 text-sm">Deployment completed successfully!</div>
        )}
        {deploymentStatus === 'failed' && (
          <div className="text-red-600 text-sm">Deployment failed. Please try again.</div>
        )}
      </CardContent>
    </Card>
  );
};