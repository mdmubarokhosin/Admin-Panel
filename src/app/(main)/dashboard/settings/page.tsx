"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Settings</h2><p className="text-muted-foreground">Manage application preferences, account settings, and system configuration organized into logical sections.</p></div>
      <Tabs defaultValue="general"><TabsList><TabsTrigger value="general">General</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger><TabsTrigger value="security">Security</TabsTrigger></TabsList>
        <TabsContent value="general" className="mt-4"><Card><CardHeader><CardTitle>General Settings</CardTitle><CardDescription>Basic application settings.</CardDescription></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><div className="flex flex-col gap-2"><Label>Application Name</Label><Input defaultValue="Admin Panel" /></div><div className="flex flex-col gap-2"><Label>Language</Label><Select defaultValue="en"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="bn">Bangla</SelectItem><SelectItem value="es">Spanish</SelectItem></SelectContent></Select></div><div className="flex flex-col gap-2"><Label>Timezone</Label><Select defaultValue="utc"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="utc">UTC</SelectItem><SelectItem value="gmt6">GMT+6 (Dhaka)</SelectItem></SelectContent></Select></div></CardContent></Card></TabsContent>
        <TabsContent value="notifications" className="mt-4"><Card><CardHeader><CardTitle>Notification Preferences</CardTitle><CardDescription>Choose notification channels and frequency.</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-1">{[{t:"Email Notifications",d:"Receive updates via email",c:true},{t:"Push Notifications",d:"Get instant push notifications",c:true},{t:"SMS Alerts",d:"Critical alerts via SMS"},{t:"Weekly Digest",d:"Weekly email summary",c:false},{t:"Marketing Emails",d:"News and offers",c:false}].map((i) => (<div key={i.t} className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted"><div className="flex flex-col gap-0.5"><p className="text-sm font-medium">{i.t}</p><p className="text-xs text-muted-foreground">{i.d}</p></div><Switch defaultChecked={i.c} /></div>))}</div></CardContent></Card></TabsContent>
        <TabsContent value="security" className="mt-4"><Card><CardHeader><CardTitle>Security</CardTitle><CardDescription>Account security preferences.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4"><div className="flex items-center justify-between rounded-lg border p-4"><div><p className="font-medium">Two-factor Authentication</p><p className="text-sm text-muted-foreground">Extra security layer</p></div><Switch defaultChecked /></div><div className="flex flex-col gap-4"><h4 className="text-sm font-semibold">Change Password</h4><div className="grid gap-4 md:grid-cols-2"><div className="flex flex-col gap-2"><Label>Current Password</Label><Input type="password" /></div><div className="flex flex-col gap-2"><Label>New Password</Label><Input type="password" /></div></div></div></CardContent></Card></TabsContent>
      </Tabs>
    </div>
  );
}