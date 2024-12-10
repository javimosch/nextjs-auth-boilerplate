"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "Free",
    description: "Perfect for side projects and experiments",
    features: [
      "Up to 1,000 users",
      "Basic authentication",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing applications and teams",
    features: [
      "Unlimited users",
      "Advanced authentication",
      "Priority support",
      "Custom domains",
      "Team management",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Everything in Pro",
      "Custom integration",
      "24/7 support",
      "SLA guarantee",
      "Dedicated account manager",
      "Custom features",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose the perfect plan for your project. All plans include core features.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
                <ul className="space-y-2 pt-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}