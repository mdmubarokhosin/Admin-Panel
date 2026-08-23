"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans=[{name:"Starter",price:"$49",period:"/month",desc:"Perfect for small teams getting started.",features:["Up to 5 users","10 GB storage","Basic analytics","Email support","5 dashboards"],cta:"Get Started"},{name:"Professional",price:"$149",period:"/month",desc:"Ideal for growing businesses with advanced features.",features:["Up to 25 users","100 GB storage","Advanced analytics","Priority support","Unlimited dashboards","Custom themes","API access","Role management"],cta:"Get Started",popular:true},{name:"Enterprise",price:"$499",period:"/month",desc:"For large organizations needing enterprise features.",features:["Unlimited users","1 TB storage","Custom analytics","24/7 support","Unlimited dashboards","White-label","SSO / SAML","Audit logs","SLA guarantee","Dedicated manager"],cta:"Contact Sales"}];

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center"><h2 className="text-3xl tracking-tight">Pricing Plans</h2><p className="mt-2 text-muted-foreground">Choose the plan that fits your team. 14-day free trial included.</p></div>
      <div className="grid gap-6 md:grid-cols-3">{plans.map((p) => (
        <Card key={p.name} className={cn("relative flex flex-col",p.popular&&"border-primary shadow-lg")}>{p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><Badge>Most Popular</Badge></div>}<CardHeader className="text-center"><CardTitle>{p.name}</CardTitle><div className="mt-4"><span className="text-4xl font-bold">{p.price}</span><span className="text-muted-foreground">{p.period}</span></div></CardHeader><CardContent className="flex-1"><ul className="flex flex-col gap-2">{p.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /><span>{f}</span></li>))}</ul></CardContent><CardFooter><Button className="w-full" variant={p.popular?"default":"outline"}>{p.cta}</Button></CardFooter></Card>
      ))}</div>
    </div>
  );
}