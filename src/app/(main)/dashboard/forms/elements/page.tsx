"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function FormsElementsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Form Elements</h2><p className="text-muted-foreground">A comprehensive showcase of form elements following the shadcn/ui design system with proper labels, descriptions, and accessibility.</p></div>
      <Card><CardHeader><CardTitle>Text Inputs</CardTitle><CardDescription>Standard input fields for various data types including email, password, number, and search.</CardDescription></CardHeader><CardContent className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2"><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="Enter your full name" /><p className="text-xs text-muted-foreground">Enter your first and last name.</p></div>
        <div className="flex flex-col gap-2"><Label htmlFor="email">Email Address</Label><Input id="email" type="email" placeholder="name@company.com" /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" placeholder="Enter a secure password" /></div>
        <div className="flex flex-col gap-2"><Label htmlFor="disabled">Disabled Input</Label><Input id="disabled" placeholder="Disabled" disabled /></div>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Text Area</CardTitle><CardDescription>Multi-line text input for longer content such as descriptions, comments, or addresses.</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-2"><Label htmlFor="bio">Biography</Label><Textarea id="bio" placeholder="Tell us about yourself..." rows={4} /></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Select / Checkbox / Switch</CardTitle><CardDescription>Selection controls for options, toggling settings, and managing boolean values.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2"><Label>Department</Label><Select><SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger><SelectContent><SelectItem value="eng">Engineering</SelectItem><SelectItem value="design">Design</SelectItem><SelectItem value="marketing">Marketing</SelectItem></SelectContent></Select></div>
        <div className="flex items-center gap-2"><Checkbox id="notif" /><Label htmlFor="notif" className="font-normal">Email notifications</Label></div>
        <div className="flex items-center justify-between rounded-lg border p-4"><div><p className="text-sm font-medium">Dark Mode</p><p className="text-xs text-muted-foreground">Switch between light and dark themes</p></div><Switch /></div>
      </CardContent></Card>
    </div>
  );
}