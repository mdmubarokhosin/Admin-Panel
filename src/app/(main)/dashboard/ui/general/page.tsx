"use client";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UIGeneralPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">General UI Elements</h2><p className="text-muted-foreground">A comprehensive showcase of common UI elements used throughout the admin panel. These components are built with shadcn/ui and follow the design system consistently for accessibility, responsiveness, and theme-awareness.</p></div>
      <Card><CardHeader><CardTitle>Alerts</CardTitle><CardDescription>Alert messages for displaying important information, warnings, or errors to users with different urgency levels and visual styling for each context.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <Alert><AlertCircle className="h-4 w-4" /><AlertTitle>Default Alert</AlertTitle><AlertDescription>This is a default informational alert. Use it to highlight general information that users should be aware of, such as tips, notes, or neutral updates about the platform.</AlertDescription></Alert>
        <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong. Please check your input and try again. If the problem persists, contact the system administrator for assistance with this issue.</AlertDescription></Alert>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Badges</CardTitle><CardDescription>Small status descriptors for UI elements used to indicate status, categories, counts, or supplementary information that needs visual emphasis.</CardDescription></CardHeader><CardContent><div className="flex flex-wrap gap-3"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="destructive">Destructive</Badge></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Buttons</CardTitle><CardDescription>Interactive button elements in multiple variants and sizes for triggering actions, submitting forms, or navigating users with appropriate visual hierarchy.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3"><Button>Default</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="destructive">Destructive</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button></div>
        <div className="flex flex-wrap gap-3"><Button size="sm">Small</Button><Button size="default">Default</Button><Button size="lg">Large</Button></div>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Progress Bars</CardTitle><CardDescription>Visual indicators for task completion, loading states, or metric progress providing clear feedback about ongoing operations or goals.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2"><Label>Project Completion - 75%</Label><Progress value={75} /></div>
        <div className="flex flex-col gap-2"><Label>Upload Progress - 45%</Label><Progress value={45} /></div>
        <div className="flex flex-col gap-2"><Label>Disk Usage - 90%</Label><Progress value={90} /></div>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Skeleton Loaders</CardTitle><CardDescription>Placeholder loading indicators that mimic content shape, reducing perceived loading time and providing smoother user experience.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-4"><Skeleton className="h-12 w-12 rounded-full" /><div className="flex flex-col gap-2"><Skeleton className="h-4 w-48" /><Skeleton className="h-3 w-32" /></div></div>
        <Skeleton className="h-24 w-full" />
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Tabs</CardTitle><CardDescription>Tabbed navigation for organizing content into switchable panels, reducing clutter by grouping related content for users.</CardDescription></CardHeader><CardContent><Tabs defaultValue="tab1"><TabsList><TabsTrigger value="tab1">Account</TabsTrigger><TabsTrigger value="tab2">Password</TabsTrigger><TabsTrigger value="tab3">Notifications</TabsTrigger></TabsList><TabsContent value="tab1" className="p-4"><p className="text-sm text-muted-foreground">Manage your account settings, update your profile information, and configure your personal preferences. Changes will be saved automatically when you navigate away.</p></TabsContent><TabsContent value="tab2" className="p-4"><p className="text-sm text-muted-foreground">Change your password regularly to keep your account secure. We recommend using a strong, unique password that you do not use on other websites or services.</p></TabsContent><TabsContent value="tab3" className="p-4"><p className="text-sm text-muted-foreground">Configure how and when you receive notifications. You can choose between email, push, and in-app notifications for different event types.</p></TabsContent></Tabs></CardContent></Card>
      <Card><CardHeader><CardTitle>Separators</CardTitle><CardDescription>Visual dividers for separating and organizing content sections, establishing visual hierarchy and grouping related content.</CardDescription></CardHeader><CardContent><div><p className="text-sm">Content section above the separator</p><Separator className="my-4" /><p className="text-sm text-muted-foreground">Content section below the separator with additional contextual information.</p></div></CardContent></Card>
    </div>
  );
}