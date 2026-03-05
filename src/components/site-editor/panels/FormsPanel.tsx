"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useSiteEditor } from '../useSiteEditor';

export const FormsPanel: React.FC = () => {
  const { currentPage, updatePage } = useSiteEditor();

  const formsData = currentPage?.forms || {
    enableContactForm: true,
    contactEmail: '',
    formspreeId: '',
    recaptchaSiteKey: '',
    recaptchaSecretKey: '',
    successMessage: 'Thank you for your message! We will get back to you soon.',
  };

  const handleUpdate = (field: string, value: any) => {
    if (currentPage) {
      updatePage(currentPage.id, {
        forms: { ...formsData, [field]: value },
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="forms-enable">Enable Contact Form</Label>
          <Switch
            id="forms-enable"
            checked={formsData.enableContactForm || false}
            onCheckedChange={(checked) => handleUpdate('enableContactForm', checked)}
          />
        </div>

        {formsData.enableContactForm && (
          <>
            <div className="space-y-2">
              <Label htmlFor="forms-email">Contact Email</Label>
              <Input
                id="forms-email"
                type="email"
                value={formsData.contactEmail || ''}
                onChange={(e) => handleUpdate('contactEmail', e.target.value)}
                placeholder="your@email.com"
              />
              <p className="text-xs text-slate-500">
                Messages from the contact form will be sent to this email
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="forms-formspree">Formspree ID (optional)</Label>
              <Input
                id="forms-formspree"
                value={formsData.formspreeId || ''}
                onChange={(e) => handleUpdate('formspreeId', e.target.value)}
                placeholder="your-form-id"
              />
              <p className="text-xs text-slate-500">
                Use Formspree for form handling (leave empty for email)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="forms-recaptcha-site">reCAPTCHA Site Key</Label>
              <Input
                id="forms-recaptcha-site"
                value={formsData.recaptchaSiteKey || ''}
                onChange={(e) => handleUpdate('recaptchaSiteKey', e.target.value)}
                placeholder="6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="forms-recaptcha-secret">reCAPTCHA Secret Key</Label>
              <Input
                id="forms-recaptcha-secret"
                type="password"
                value={formsData.recaptchaSecretKey || ''}
                onChange={(e) => handleUpdate('recaptchaSecretKey', e.target.value)}
                placeholder="6Le-wvkSAAAAAOIhW3Vb_2M"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="forms-success">Success Message</Label>
              <Textarea
                id="forms-success"
                value={formsData.successMessage || ''}
                onChange={(e) => handleUpdate('successMessage', e.target.value)}
                rows={2}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};