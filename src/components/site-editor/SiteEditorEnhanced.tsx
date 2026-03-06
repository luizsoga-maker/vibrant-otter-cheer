import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { 
  SiteEditorHeader 
} from './components/SiteEditorHeader';
import { SiteEditorLayout } from './components/SiteEditorLayout';
import { PageManager } from './PageManager';
import { SectionEditor } from './SectionEditor';
import { CDNPanel } from './panels/CDNPanel';
import { DeploymentPanel } from './panels/DeploymentPanel';
import { EcommercePanel } from './panels/EcommercePanel';
import { MembershipPanel } from './panels/MembershipPanel';
import { BlogPanel } from './panels/BlogPanel';
import { FormsPanel } from './panels/FormsPanel';
import { MultilangPanel } from './panels/MultilangPanel';
import { AnalyticsPanel } from './panels/AnalyticsPanel';
import { ApiIntegrationsPanel } from './panels/ApiIntegrationsPanel';
import { CachingPanel } from './panels/CachingPanel';
import { CollaborationPanel } from './panels/CollaborationPanel';
import { SEOPanel } from './panels/SEOPanel';
import { ThemeSettingsPanel } from './panels/ThemeSettingsPanel';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';