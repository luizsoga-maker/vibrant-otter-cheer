import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Index from './pages/Index';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { AIGenerator } from './pages/AIGenerator';
import { SiteEditorEnhanced } from './components/SiteEditorEnhanced';
import { SitePreview } from './pages/SitePreview';
import { Assets } from './pages/Assets';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-generator" element={<AIGenerator />} />
          <Route path="/sites/:id/edit" element={<SiteEditorEnhanced />} />
          <Route path="/sites/:id" element={<SitePreview />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;