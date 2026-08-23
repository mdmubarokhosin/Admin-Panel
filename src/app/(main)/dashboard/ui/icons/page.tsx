"use client";
import { BarChart3, Bell, BookOpen, Calendar, Camera, ChartBar, Clock, Cloud, CreditCard, Download, FileCheck, FileText, Filter, FolderOpen, Globe, Heart, Home, Image, Key, Layout, Link, ListOrdered, Lock, Mail, MapPin, MessageSquare, Monitor, Moon, Palette, Phone, Printer, Search, Send, Server, Settings, Share2, Shield, ShoppingBag, Star, Sun, Tag, Trash, Upload, User, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cats = [
  { title: "Navigation", icons: [Home, Layout, Globe, Link, Filter, Search, Settings, ListOrdered] },
  { title: "Actions", icons: [Download, Upload, Send, Printer, Trash, FileCheck, Share2] },
  { title: "Communication", icons: [Mail, MessageSquare, Bell, Phone, Users, User] },
  { title: "Media", icons: [FileText, Image, Camera, FolderOpen, Star, Heart, Tag, BookOpen] },
  { title: "Data", icons: [BarChart3, ChartBar, Calendar, Clock, MapPin, CreditCard, ShoppingBag] },
  { title: "System", icons: [Server, Shield, Lock, Key, Zap, Cloud, Monitor, Sun, Moon, Palette] },
];

export default function UIIconsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Icons</h2><p className="text-muted-foreground">The admin panel uses Lucide Icons, an open-source icon library. All icons are designed on a 24x24 pixel grid with a 2px stroke width for visual consistency across the interface.</p></div>
      {cats.map((cat) => (
        <Card key={cat.title}><CardHeader><CardTitle>{cat.title}</CardTitle><CardDescription>Commonly used icons in the {cat.title.toLowerCase()} category of the admin panel interface.</CardDescription></CardHeader><CardContent><div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">{cat.icons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-muted"><Icon className="h-6 w-6 text-muted-foreground" /><span className="text-xs text-muted-foreground">{Icon.displayName}</span></div>
        ))}</div></CardContent></Card>
      ))}
      <Card><CardHeader><CardTitle>Usage</CardTitle><CardDescription>Import icons from lucide-react and use as React components with standard SVG props.</CardDescription></CardHeader><CardContent><div className="rounded-lg bg-muted p-4"><code className="text-sm">{`import { Home, Settings } from "lucide-react";
<Home className="h-5 w-5" />
<Settings className="h-6 w-6 text-blue-500" />`}</code></div></CardContent></Card>
    </div>
  );
}