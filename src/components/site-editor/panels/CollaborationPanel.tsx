import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export const CollaborationPanel = () => {
  const collaborators = [
    { id: '1', name: 'John Doe', email: 'john@example.com', color: '#3b82f6' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', color: '#10b981' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaboration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Collaborators</Label>
            <Button variant="ghost" size="sm">Show</Button>
          </div>
          
          <div className="space-y-2">
            {collaborators.map((collaborator) => (
              <div key={collaborator.id} className="flex items-center gap-2 p-2 border rounded">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: collaborator.color }}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{collaborator.name}</p>
                  <p className="text-xs text-slate-500">{collaborator.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Invite Collaborators</Label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 p-2 border border-slate-200 rounded text-sm"
            />
            <Button size="sm">
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Collaboration Settings</Label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Real-time editing</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Show cursors</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Live chat</span>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};