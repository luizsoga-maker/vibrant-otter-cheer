import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Index from './pages/Index';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { AIGenerator } from './pages/AIGenerator';
import { SiteEditorEnhanced } from './components/site-editor/SiteEditorEnhanced';
import { SitePreview } from './pages/SitePreview';
import { Assets } from './pages/Assets';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react';

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ErrorBoundary>
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
        </ErrorBoundary>
      </AuthProvider>
    </Router>
  );
};

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: any) => {
      console.error('Unhandled error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-red-500 mb-4">Please check the console for details.</p>
          <button 
            onClick={() => setHasError(false)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default App;