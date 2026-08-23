"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const events = [
  { time: "10:00 AM", title: "System Update Deployed", desc: "Version 2.4.1 has been successfully deployed to production. This update includes performance improvements and bug fixes for the dashboard module.", user: "MK", badge: "default" as const, text: "Completed" },
  { time: "09:30 AM", title: "New User Registered", desc: "A new user account was created for John Doe. Verification email has been sent to the registered email address.", user: "JD", badge: "secondary" as const, text: "Info" },
  { time: "09:15 AM", title: "Server Alert: High CPU", desc: "Server node-03 reported CPU usage exceeding 90% for more than 5 minutes. Auto-scaling has been triggered and a new instance is being provisioned.", user: "SY", badge: "destructive" as const, text: "Alert" },
  { time: "08:45 AM", title: "Database Backup Completed", desc: "Automated daily backup of the primary database completed successfully. Backup size: 2.4 GB stored in region us-east-1.", user: "DB", badge: "default" as const, text: "Completed" },
  { time: "08:00 AM", title: "Scheduled Maintenance", desc: "Planned maintenance for network infrastructure upgrade. Expected downtime: 15 minutes. All services will be temporarily unavailable.", user: "OP", badge: "secondary" as const, text: "Scheduled" },
];

export default function UITimelinePage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Timeline</h2><p className="text-muted-foreground">A chronological display of events and activities within the system. The timeline provides a visual audit trail for tracking changes and monitoring system health in real-time.</p></div>
      <Card><CardHeader><CardTitle>Activity Timeline</CardTitle><CardDescription>Recent system events displayed in chronological order with status indicators and user attribution for each event.</CardDescription></CardHeader><CardContent><div className="relative"><div className="absolute left-6 top-0 bottom-0 w-px bg-border" /><div className="flex flex-col gap-8">{events.map((e, i) => (
        <div key={i} className="relative flex gap-4 pl-2"><div className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-background bg-primary"><span className="text-xs font-bold text-primary-foreground">{i+1}</span></div><div className="flex-1 rounded-lg border p-4"><div className="flex flex-wrap items-center gap-2"><h4 className="font-semibold">{e.title}</h4><Badge variant={e.badge}>{e.text}</Badge></div><p className="mt-2 text-sm text-muted-foreground">{e.desc}</p><div className="mt-3 flex items-center gap-3"><Avatar className="h-6 w-6"><AvatarFallback className="text-xs">{e.user}</AvatarFallback></Avatar><span className="text-xs text-muted-foreground">{e.time}</span></div></div></div>
      ))}</div></div></CardContent></Card>
    </div>
  );
}