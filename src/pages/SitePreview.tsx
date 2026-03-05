"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, ExternalLink } from 'lucide-react';

interface Site {
  id: number;
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
  id: number;
  slug: string;
  title: string;
  sections: Section[];
}

interface Section {
  id: number;
  type: string;
  props: any;
}

export const SitePreview = () => {
  const { id } = useParams<{ id: string }>();
  const [site, setSite] = useState<Site | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/sites/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Site not found');
          } else {
            setError('Failed to load site');
          }
          return;
        }
        const data = await response.json();
        setSite(data);
      } catch (err) {
        setError('Failed to load site');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchSite();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-slate-900">Error</h1>
            <p className="text-slate-600 mb-4">{error}</p>
            <Button asChild>
              <a href="/dashboard">Back to Dashboard</a>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!site) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-slate-900">Site not found</h1>
            <p className="text-slate-600 mb-4">The site you're looking for doesn't exist or you don't have access to it.</p>
            <Button asChild>
              <a href="/dashboard">Back to Dashboard</a>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const page = site.pages?.[0];
  if (!page) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-slate-900">No pages found</h1>
            <p className="text-slate-600 mb-4">This site doesn't have any pages yet.</p>
            <Button asChild>
              <a href={`/sites/${id}/edit`}>Edit Site</a>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const theme = site.theme;

  const renderSection = (section: Section) => {
    const { type, props } = section;

    switch (type) {
      case 'hero':
        return (
          <section 
            className="py-20 px-4 text-center"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
              backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: theme.colors.primary }}>
                {props.title}
              </h1>
              <p className="text-xl mb-8" style={{ color: theme.colors.secondary }}>
                {props.subtitle}
              </p>
              <button 
                className="px-6 py-3 rounded-lg font-medium"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                }}
              >
                {props.ctaText}
              </button>
            </div>
          </section>
        );

      case 'about':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                    {props.title}
                  </h2>
                  <p className="text-lg mb-6">{props.description}</p>
                  {props.features && props.features.length > 0 && (
                    <div className="space-y-4">
                      {props.features.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: theme.colors.primary }}
                          >
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm opacity-80">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {props.image && (
                  <div>
                    <img src={props.image} alt="About" className="rounded-lg shadow-lg w-full" />
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'services':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.services?.map((service: any, idx: number) => (
                  <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      <span className="text-white text-xl">●</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="mb-4 opacity-80">{service.description}</p>
                    {service.price && (
                      <p className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
                        ${service.price}
                        <span className="text-sm font-normal opacity-60">/month</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {props.testimonials?.map((testimonial: any, idx: number) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      {testimonial.avatar && (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                      )}
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm opacity-60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'pricing':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              {props.subtitle && (
                <p className="text-center text-lg mb-12 opacity-80">{props.subtitle}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {props.plans?.map((plan: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`p-6 border rounded-lg ${plan.highlighted ? 'border-2 shadow-lg scale-105' : ''}`}
                    style={plan.highlighted ? { borderColor: theme.colors.primary } : {}}
                  >
                    {plan.highlighted && (
                      <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.primary }}>
                        MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold" style={{ color: theme.colors.primary }}>${plan.price}</span>
                      <span className="opacity-60">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features?.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="w-full py-2 rounded-lg font-medium"
                      style={{ 
                        backgroundColor: plan.highlighted ? theme.colors.primary : 'transparent',
                        color: plan.highlighted ? theme.colors.background : theme.colors.primary,
                        border: plan.highlighted ? 'none' : `1px solid ${theme.colors.primary}`,
                      }}
                    >
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'faq':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="space-y-4">
                {props.faqs?.map((faq: any, idx: number) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2" style={{ color: theme.colors.primary }}>
                      {faq.question}
                    </h3>
                    <p className="opacity-80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section 
            className="py-16 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="space-y-6">
                    {props.phone && (
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="opacity-80">{props.phone}</p>
                      </div>
                    )}
                    {props.email && (
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="opacity-80">{props.email}</p>
                      </div>
                    )}
                    {props.address && (
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="opacity-80">{props.address}</p>
                      </div>
                    )}
                    {props.whatsapp && (
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="opacity-80">{props.whatsapp}</p>
                      </div>
                    )}
                    {props.socialLinks && props.socialLinks.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Social Links</h3>
                        <div className="space-y-2">
                          {props.socialLinks.map((link: any, idx: number) => (
                            <a 
                              key={idx} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block hover:underline"
                              style={{ color: theme.colors.primary }}
                            >
                              {link.platform || 'Social Link'}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {props.mapEmbed && (
                  <div>
                    <h3 className="font-semibold mb-4">Find Us</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={props.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      default:
        return (
          <section 
            className="py-8 px-4"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg">Unknown section type: {type}</p>
              <p className="text-sm opacity-60 mt-2">This section type is not yet supported in preview.</p>
            </div>
          </section>
        );
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Header */}
        <header 
          className="py-4 px-4 shadow-sm"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold" style={{ color: theme.colors.background }}>
              {site.name}
            </h1>
            <nav>
              <a 
                href="/"
                className="px-4 py-2 rounded hover:opacity-80"
                style={{ color: theme.colors.background }}
              >
                Home
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>
          {page.sections?.map((section: Section) => (
            <React.Fragment key={section.id}>
              {renderSection(section)}
            </React.Fragment>
          ))}
        </main>

        {/* Footer */}
        <footer 
          className="py-8 px-4 mt-12"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <div className="max-w-6xl mx-auto text-center" style={{ color: theme.colors.background }}>
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
};