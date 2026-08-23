"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ribbons = [
  { title: "Pro Plan", desc: "Unlock all premium features with our Pro subscription including advanced analytics, priority support, and unlimited storage.", badge: "Popular", variant: "default" as const },
  { title: "New Release", desc: "Version 3.0 is now available with a completely redesigned interface, improved performance, and 15+ new features.", badge: "New", variant: "secondary" as const },
  { title: "Limited Offer", desc: "Get 40% off on all annual plans. This limited-time offer is available for the first 100 customers who upgrade this month.", badge: "40% Off", variant: "destructive" as const },
  { title: "Recommended", desc: "This tool has been selected by our team as the top recommendation for data visualization and reporting tasks.", badge: "Top Pick", variant: "outline" as const },
];

export default function UIRibbonsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Ribbons</h2><p className="text-muted-foreground">Ribbon elements highlight and categorize content with visual labels applied to cards, products, and status indicators for featured items.</p></div>
      <Card><CardHeader><CardTitle>Card Ribbons</CardTitle><CardDescription>Ribbons applied to card components to highlight special status or categorization for featured content items.</CardDescription></CardHeader><CardContent><div className="grid gap-4 md:grid-cols-2">{ribbons.map((r) => (
        <Card key={r.title} className="relative overflow-hidden"><div className="absolute right-0 top-0"><Badge variant={r.variant} className="rounded-none rounded-bl-lg">{r.badge}</Badge></div><CardHeader className="pr-20"><CardTitle className="text-lg">{r.title}</CardTitle><CardDescription>{r.desc}</CardDescription></CardHeader><CardContent><button className="text-sm text-primary underline-offset-4 hover:underline">Learn more</button></CardContent></Card>
      ))}</div></CardContent></Card>
      <Card><CardHeader><CardTitle>Status Indicators</CardTitle><CardDescription>Colored ribbon-style status indicators representing different states across the platform for visual consistency.</CardDescription></CardHeader><CardContent><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{l:"Active",c:"bg-green-500",n:1247},{l:"Pending",c:"bg-yellow-500",n:389},{l:"Inactive",c:"bg-gray-400",n:156},{l:"Suspended",c:"bg-red-500",n:23}].map((s) => (
        <div key={s.l} className="relative overflow-hidden rounded-lg border p-4"><div className={`absolute left-0 top-0 h-full w-1.5 ${s.c}`} /><div className="pl-3"><p className="text-sm font-medium">{s.l}</p><p className="text-2xl font-bold">{s.n.toLocaleString()}</p><p className="text-xs text-muted-foreground">Total Users</p></div></div>
      ))}</div></CardContent></Card>
    </div>
  );
}