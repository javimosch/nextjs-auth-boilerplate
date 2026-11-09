"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import AppShell from '@/components/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: new URLSearchParams({ email, password }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setError(error);
    } else {
      const { access_token } = await res.json();
      localStorage.setItem('jwt', access_token);
      router.push('/dashboard');
    }
  };

  return (
    <AppShell>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
            </CardHeader>
            <CardContent>
              {error && <p className="text-sm text-destructive mb-4">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Toaster />
      </ThemeProvider>
    </AppShell>
  );
}
