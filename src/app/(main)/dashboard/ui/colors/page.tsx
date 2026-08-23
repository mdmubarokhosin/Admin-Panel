"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const colors = [
  {n:"Background",c:"bg-background",t:"text-foreground",d:"Main background color of the application used for the base layer."},
  {n:"Foreground",c:"bg-foreground",t:"text-background",d:"Primary text color used throughout for headings and body text."},
  {n:"Card",c:"bg-card",t:"text-card-foreground",d:"Background color for card components."},
  {n:"Primary",c:"bg-primary",t:"text-primary-foreground",d:"Primary brand color for buttons, links, and active states."},
  {n:"Secondary",c:"bg-secondary",t:"text-secondary-foreground",d:"Secondary color for less prominent elements."},
  {n:"Muted",c:"bg-muted",t:"text-muted-foreground",d:"Muted color for disabled or de-emphasized elements."},
  {n:"Accent",c:"bg-accent",t:"text-accent-foreground",d:"Accent color for highlighting and hover states."},
  {n:"Destructive",c:"bg-destructive",t:"text-destructive-foreground",d:"Destructive action color for delete and error indicators."},
  {n:"Border",c:"bg-border",t:"text-background",d:"Border color for separating sections."},
  {n:"Chart-1",c:"bg-chart-1",t:"text-background",d:"Primary chart color for data visualization."},
  {n:"Chart-2",c:"bg-chart-2",t:"text-background",d:"Secondary chart color."},
  {n:"Chart-3",c:"bg-chart-3",t:"text-background",d:"Tertiary chart color."},
];

export default function UIColorsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Colors</h2><p className="text-muted-foreground">The admin panel uses CSS custom properties that automatically adapt between light and dark modes for consistent visual hierarchy.</p></div>
      <Card><CardHeader><CardTitle>Theme Color Palette</CardTitle><CardDescription>All semantic color tokens used throughout the admin panel, adapting when switching themes.</CardDescription></CardHeader><CardContent><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{colors.map((c) => (
        <div key={c.n} className="flex items-start gap-3 rounded-lg border p-3"><div className={`h-12 w-12 shrink-0 rounded-md ${c.c}`} /><div className="flex-1"><p className="text-sm font-semibold">{c.n}</p><p className="mt-0.5 text-xs text-muted-foreground">{c.d}</p></div></div>
      ))}</div></CardContent></Card>
    </div>
  );
}