"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { UserPlus, Mail } from 'lucide-react';
import { useSiteEditor } from '../useSiteEditor';

export const CollaborationPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const collaborationData = currentPage?.collaboration || {
    collaborators: [],
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        collaboration: { ...collaborationData, [field]: value },
      });
    }
  };

  const addCollaborator = () => {
    const email = prompt('Enter collaborator email:');
    if (email) {
      handleUpdate('collaborators', [
        ...(collaborationData.collaborators || []),
        { email, role: 'editor', addedAt: new Date().toISOString() },
      ]);
    }
  };

  const removeCollaborator = (email: string) => {
    handleUpdate(
      'collaborators',
      collaborationData.collaborators?.filter((c: any) => c.email !== email) || []
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaboration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Collaborators</Label>
          <div className="space-y-2">
            {collaborationData.collaborators?.map((collab: any) => (
              <div
                key={collab.email}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{collab.email}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    {collab.role}
                  </span>
                </div>
                <button
                  onClick={() => removeCollaborator(collab.email)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={addCollaborator}
            className="w-full"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add Collaborator
          </Button>
          <p className="text-xs text-slate-500">
            Invite team members to edit this site
          </p>
        </div>
      </CardContent>
    </Card>
  );
};