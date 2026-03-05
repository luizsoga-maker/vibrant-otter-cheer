"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MainLayout } from '@/components/layout/MainLayout';
import { showSuccess, showError } from '@/utils/toast';
import { 
  Save, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  CloudUpload, 
  X, 
  RefreshCw, 
  Eye,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Mail,
  BookOpen,
  Code,
  Play,
  Twitter,
  Cloud,
  Shield,
  Lock,
  Axe,
  Google,
  Archive,
  Copy,
  ArrowRight,
  Bot,
  Pin,
  Cake,
  Download,
  Edit,
  ExternalLink,
  CheckCircle2,
  Zap,
  BarChart3,
  Globe,
  Sparkles,
  Heart,
  Users,
  Briefcase,
  ChartLine,
  ShieldCheck,
  MessageSquare,
  Star,
  Award,
  Target,
  TrendingUp,
  Activity,
  Server,
  Wifi,
  Database,
  HardDrive,
  Cpu,
  MemoryStick,
  Gauge,
  Timer,
  Flag,
  MapPin,
  Phone,
  Clock,
  Calendar,
  FileText,
  Settings,
  Palette,
  Type,
  Layout,
  Layers,
  Box,
  Boxes,
  Grid,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  Unlink,
  Image,
  Video,
  Music,
  File,
  FolderOpen,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  PlusCircle,
  MinusCircle,
  Check,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ExclamationTriangle,
  AlertOctagon,
  Bell,
  BellOff,
  EyeOff,
  Unlock,
  Key,
  KeyRound,
  Fingerprint,
  ShieldAlert,
  ShieldX,
  User,
  UserCheck,
  UserX,
  UserMinus,
  UserPlus,
  UserCog,
  Crown,
  Medal,
  Trophy,
  ThumbsUp,
  ThumbsDown,
  MessageHeart,
  MessageCircle,
  Send,
  Reply,
  Forward,
  RotateCcw,
  RotateCw,
  Undo,
  Redo,
  Scissors,
  Clipboard,
  ClipboardCheck,
  ClipboardList,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileImage,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FileJson,
  FileSearch,
  FileSymlink,
  FileWarning,
  FileQuestion,
  Folder,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderSymlink,
  FolderGit,
  FolderGit2,
  FolderLock,
  FolderSearch,
  FolderCog,
  FolderInput,
  FolderOutput,
  FolderArchive,
  FolderKanban,
  FolderTree,
  FolderSettings,
  Home,
  Building,
  Building2,
  Factory,
  Store,
  ShoppingBag,
  ShoppingCart,
  Package,
  Pallet,
  Warehouse,
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  Bus,
  Bike,
  Navigation,
  Map,
  MapPinned,
  Earth,
  Satellite,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  Power,
  PowerOff,
  Lightning,
  Tablet,
  Laptop,
  Printer,
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface Site {
  id: string;
  name: string;
  slug: string;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      lineHeight: string;
    };
  };
  pages: Page[];
}

interface Page {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
}

interface Section {
  id: string;
  type: string;
  props: any;
}

export const SiteEditorEnhanced = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [site, setSite] = useState<Site | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Site CDN state
  const [siteCDN, setSiteCDN] = useState({
    provider: 'Cloudflare' as 'Cloudflare' | 'AWS CloudFront' | 'Fastly' | 'Akamai',
    status: 'active' as 'active' | 'pending' | 'error',
    cacheHitRate: '92%',
    edgeLocations: 200,
    dataTransfer: '15GB',
  });

  // Site deployment state
  const [deploymentStatus, setDeploymentStatus] = useState('idle' as 'idle' | 'deploying' | 'completed' | 'failed');
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [deploymentTarget, setDeploymentTarget] = useState('production' as 'production' | 'staging' | 'development');

  useEffect(() => {
    if (id) {
      fetchSite();
    }
  }, [id]);

  const fetchSite = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/sites/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch site');
      const data = await response.json();
      setSite(data);
      setPages(data.pages || []);
    } catch (error) {
      showError('Failed to load site');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const saveSite = async () => {
    setSaving(true);
    try {
      // Save pages
      for (const page of pages) {
        await fetch(`http://localhost:3000/api/pages/${page.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            title: page.title,
            slug: page.slug,
            sections: page.sections,
          }),
        });
      }
      showSuccess('Site saved successfully');
    } catch (error) {
      showError('Failed to save site');
    } finally {
      setSaving(false);
    }
  };

  const deploySite = async () => {
    try {
      setDeploymentStatus('deploying');
      setDeploymentProgress(0);

      // Simulate deployment process
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setDeploymentProgress(i);
      }

      setDeploymentStatus('completed');
      showSuccess('Site deployed successfully');
    } catch (error) {
      setDeploymentStatus('failed');
      showError('Site deployment failed');
    }
  };

  const addSection = (pageIndex: number, type: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type,
      props: getDefaultProps(type),
    };
    
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections.push(newSection);
    setPages(updatedPages);
  };

  const updateSection = (pageIndex: number, sectionIndex: number, props: any) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections[sectionIndex].props = props;
    setPages(updatedPages);
  };

  const deleteSection = (pageIndex: number, sectionIndex: number) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].sections.splice(sectionIndex, 1);
    setPages(updatedPages);
  };

  const getDefaultProps = (type: string) => {
    switch (type) {
      case 'hero':
        return {
          title: 'Your Hero Title',
          subtitle: 'Your subtitle here',
          ctaText: 'Call to Action',
          ctaLink: '/contact',
        };
      case 'about':
        return {
          title: 'About Us',
          description: 'Tell your story here...',
          features: [],
        };
      case 'services':
        return {
          title: 'Our Services',
          services: [],
        };
      case 'testimonials':
        return {
          title: 'Testimonials',
          testimonials: [],
        };
      case 'contact':
        return {
          title: 'Contact Us',
          phone: '',
          email: '',
          address: '',
          whatsapp: '',
          socialLinks: [],
        };
      default:
        return {};
    }
  };

  const renderSectionEditor = (pageIndex: number, section: Section, sectionIndex: number) => {
    const { type, props } = section;

    return (
      <Card key={section.id} className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base capitalize">{type} Section</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteSection(pageIndex, sectionIndex)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {type === 'hero' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={props.subtitle || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, subtitle: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Text</Label>
                <Input
                  value={props.ctaText || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, ctaText: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Link</Label>
                <Input
                  value={props.ctaLink || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, ctaLink: e.target.value })}
                />
              </div>
            </>
          )}

          {type === 'about' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={props.description || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, description: e.target.value })}
                  rows={4}
                />
              </div>
            </>
          )}

          {type === 'services' && (
            <div className="space-y-2">
              <Label>Services (one per line, format: Title:Description)</Label>
              <Textarea
                value={props.services?.map((s: any) => `${s.title}:${s.description}`).join('\n') || ''}
                onChange={(e) => {
                  const services = e.target.value.split('\n')
                    .filter(line => line.trim())
                    .map(line => {
                      const [title, description] = line.split(':');
                      return { title: title?.trim() || '', description: description?.trim() || '' };
                    });
                  updateSection(pageIndex, sectionIndex, { ...props, services });
                }}
                rows={4}
                placeholder="Service Title:Description"
              />
            </div>
          )}

          {type === 'contact' && (
            <>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={props.title || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={props.phone || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={props.email || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea
                  value={props.address || ''}
                  onChange={(e) => updateSection(pageIndex, sectionIndex, { ...props, address: e.target.value })}
                  rows={2}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </MainLayout>
    );
  }

  const currentPage = pages[activePage];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{site?.name}</h1>
              <p className="text-slate-600">Edit your website</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={saveSite} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button onClick={deploySite} disabled={deploymentStatus === 'deploying'}>
              <CloudUpload className="h-4 w-4 mr-2" />
              {deploymentStatus === 'deploying' ? 'Deploying...' : 'Deploy'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
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
                      onClick={() => setActivePage(index)}
                    >
                      {page.title}
                    </Button>
                  ))}
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Page
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['hero', 'about', 'services', 'testimonials', 'contact'].map((type) => (
                    <Button
                      key={type}
                      variant="outline"
                      className="w-full justify-start capitalize"
                      onClick={() => addSection(activePage, type)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      {type}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CDN</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Site CDN</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {siteCDN.provider}
                      </div>
                      <div className="text-sm text-slate-500">Provider</div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {siteCDN.status === 'active' ? '✓' : '✗'}
                      </div>
                      <div className="text-sm text-slate-500">
                        {siteCDN.status === 'active' ? 'Active' : siteCDN.status === 'pending' ? 'Pending' : 'Error'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>CDN Performance</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">Data Transfer</span>
                      <span className="text-sm font-medium">{siteCDN.dataTransfer}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">Cache Hit Rate</span>
                      <div className="flex-1 bg-slate-200 rounded-full h-2 ml-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: siteCDN.cacheHitRate }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Available CDN Providers</Label>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open('https://www.cloudflare.com/', '_blank')}
                    >
                      <Cloud className="h-4 w-4 mr-2" />
                      Cloudflare
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open('https://aws.amazon.com/cloudfront/', '_blank')}
                    >
                      <Server className="h-4 w-4 mr-2" />
                      AWS CloudFront
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open('https://www.fastly.com/', '_blank')}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Fastly
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open('https://www.akamai.com/', '_blank')}
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Akamai
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>CDN Settings</Label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="mr-2"
                      />
                      <span className="text-sm">Automatic cache purging</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="mr-2"
                      />
                      <span className="text-sm">SSL/TLS encryption</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="mr-2"
                      />
                      <span className="text-sm">DDoS protection</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                        onChange={(e) => setDeploymentTarget(e.target.value as 'production' | 'staging' | 'development')}
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
                        onChange={(e) => setDeploymentTarget(e.target.value as 'production' | 'staging' | 'development')}
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
                        onChange={(e) => setDeploymentTarget(e.target.value as 'production' | 'staging' | 'development')}
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
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Page Editor</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Page Title</Label>
                    <Input
                      value={currentPage?.title || ''}
                      onChange={(e) => {
                        const updated = [...pages];
                        updated[activePage].title = e.target.value;
                        setPages(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Page Slug</Label>
                    <Input
                      value={currentPage?.slug || ''}
                      onChange={(e) => {
                        const updated = [...pages];
                        updated[activePage].slug = e.target.value;
                        setPages(updated);
                      }}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <Label className="text-base font-semibold mb-4 block">Sections</Label>
                    <div className="space-y-4">
                      {currentPage?.sections?.map((section: Section, index: number) => (
                        <div key={section.id}>
                          {renderSectionEditor(activePage, section, index)}
                        </div>
                      )) || (
                        <div className="text-center py-8 text-slate-500">
                          <p>No sections yet. Add one from the sidebar.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};