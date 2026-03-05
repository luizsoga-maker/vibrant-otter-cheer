"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/sites/${id}`);
        if (!response.ok) throw new Error('Failed to fetch site');
        const data = await response.json();
        setSite(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchSite();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Site not found</h1>
          <p className="text-slate-600">The site you're looking for doesn't exist or you don't have access to it.</p>
        </div>
      </div>
    );
  }

  const page = site.pages?.[0];
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No pages found</h1>
          <p className="text-slate-600">This site doesn't have any pages yet.</p>
        </div>
      </div>
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <p className="text-lg mb-8">{props.description}</p>
              {props.features && props.features.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {props.features.map((feature: any, idx: number) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: theme.colors.primary }}
                      >
                        <span className="text-white text-xl">★</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {props.services?.map((service: any, idx: number) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      <span className="text-white text-xl">●</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.description}</p>
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="space-y-8">
                {props.testimonials?.map((testimonial: any, idx: number) => (
                  <div key={idx} className="text-center">
                    <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm" style={{ color: theme.colors.secondary }}>{testimonial.role}</p>
                    </div>
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>
                {props.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {props.phone && (
                      <p><strong>Phone:</strong> {props.phone}</p>
                    )}
                    {props.email && (
                      <p><strong>Email:</strong> {props.email}</p>
                    )}
                    {props.address && (
                      <p><strong>Address:</strong> {props.address}</p>
                    )}
                    {props.whatsapp && (
                      <p><strong>WhatsApp:</strong> {props.whatsapp}</p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <div className="space-y-2">
                    {props.socialLinks?.map((link: any, idx: number) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block hover:underline"
                        style={{ color: theme.colors.primary }}
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
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
              fontSize: theme.typography.fontSize,
              lineHeight: theme.typography.lineHeight,
            }}
          >
            <p>Unknown section type: {type}</p>
          </section>
        );
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        lineHeight: theme.typography.lineHeight,
        color: theme.colors.text,
      }}
    >
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
        {page.sections?.map((section: Section, idx: number) => (
          <React.Fragment key={idx}>
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
  );
};