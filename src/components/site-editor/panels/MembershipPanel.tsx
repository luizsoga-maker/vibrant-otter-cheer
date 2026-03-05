import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const MembershipPanel = () => {
  const plans = [
    { id: 'free', name: 'Free', price: 0, features: ['Basic access'] },
    { id: 'basic', name: 'Basic', price: 9.99, features: ['Premium content', 'No ads'] },
    { id: 'pro', name: 'Pro', price: 19.99, features: ['All basic features', 'Exclusive content', 'Priority support'] },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Membership</Label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable membership</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Membership Plans</Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <div key={plan.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{plan.name}</h4>
                  <span className="text-lg font-bold">
                    {plan.price === 0 ? 'Free' : `$${plan.price}/mo`}
                  </span>
                </div>
                <ul className="space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Membership Statistics</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">0</div>
              <div className="text-sm text-slate-500">Members</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">0</div>
              <div className="text-sm text-slate-500">Active Subs</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">$0.00</div>
              <div className="text-sm text-slate-500">Revenue</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};