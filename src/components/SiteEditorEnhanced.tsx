// Add site collaboration state
const [collaborationMode, setCollaborationMode] = useState('private' as 'private' | 'public' | 'team');
const [collaborationLink, setCollaborationLink] = useState('');

// Add function to update collaboration mode
const updateCollaborationMode = (mode: 'private' | 'public' | 'team') => {
  setCollaborationMode(mode);
  if (mode === 'public') {
    // Generate public collaboration link
    const link = `https://sitecraft.ai/collaborate/${site.id}`;
    setCollaborationLink(link);
  } else {
    setCollaborationLink('');
  }
};

// Add site collaboration panel
<div className="space-y-4">
  <div className="space-y-2">
    <Label>Collaboration Mode</Label>
    <div className="space-y-2">
      <label className="flex items-center">
        <input
          type="radio"
          name="collaboration"
          value="private"
          checked={collaborationMode === 'private'}
          onChange={(e) => updateCollaborationMode(e.target.value as 'private' | 'public' | 'team')}
          className="mr-2"
        />
        <span className="text-sm">Private (Only invited users)</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="collaboration"
          value="public"
          checked={collaborationMode === 'public'}
          onChange={(e) => updateCollaborationMode(e.target.value as 'private' | 'public' | 'team')}
          className="mr-2"
        />
        <span className="text-sm">Public (Anyone with link)</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="collaboration"
          value="team"
          checked={collaborationMode === 'team'}
          onChange={(e) => updateCollaborationMode(e.target.value as 'private' | 'public' | 'team')}
          className="mr-2"
        />
        <span className="text-sm">Team (Organization members)</span>
      </label>
    </div>
  </div>

  {collaborationMode === 'public' && (
    <div className="space-y-2">
      <Label>Collaboration Link</Label>
      <Input
        value={collaborationLink}
        readOnly
        className="bg-slate-50"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigator.clipboard.writeText(collaborationLink)}
      >
        <Copy className="h-4 w-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )}

  <div className="space-y-2">
    <Label>Collaboration Settings</Label>
    <div className="space-y-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">Real-time collaboration</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">Version history</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={true} // Always enabled
          disabled
          className="mr-2"
        />
        <span className="text-sm">Comment system</span>
      </label>
    </div>
  </div>

  <div className="space-y-2">
    <Label>Active Collaborators</Label>
    <div className="space-y-2">
      <div className="p-3 bg-slate-50 rounded-lg">
        <h4 className="font-medium mb-2">Currently Active</h4>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-slate-500">Editing header section</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>