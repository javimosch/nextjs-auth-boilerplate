"use client";

import { Card } from "@/components/ui/card";
import { Shield, Zap, Lock, Users } from "lucide-react";

const features = [
  {
    title: "Secure Authentication",
    description: "Enterprise-grade security with Supabase Auth, including JWT tokens and secure sessions.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Built on Next.js for optimal performance and SEO with server-side rendering.",
    icon: Zap,
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions and role-based access control for your applications.",
    icon: Lock,
  },
  {
    title: "User Management",
    description: "Complete user management system with profiles and account settings.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Built with modern technologies and best practices for secure, scalable applications.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 backdrop-blur bg-background/60">
              <div className="flex items-center space-x-4">
                <feature.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}