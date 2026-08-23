"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const projects=[{name:"Admin Panel Redesign",desc:"Complete redesign with modern UI and improved UX including new dashboards.",status:"In Progress",progress:72,team:["MK","SJ","MC"],due:"2024-09-30",tasks:"18/25"},{name:"Mobile App Development",desc:"Cross-platform mobile app using React Native for on-the-go access.",status:"In Progress",progress:45,team:["ED","JW","LA","RB"],due:"2024-11-15",tasks:"12/40"},{name:"API Gateway Setup",desc:"API gateway for microservices communication and authentication.",status:"Planning",progress:15,team:["MK","RB"],due:"2024-10-20",tasks:"3/20"},{name:"Database Migration",desc:"Migrate legacy database to PostgreSQL with zero downtime.",status:"Completed",progress:100,team:["MC","LA"],due:"2024-08-01",tasks:"15/15"}];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between"><div><h2 className="text-3xl tracking-tight">Projects</h2><p className="text-muted-foreground">Track projects with progress, team, and task metrics.</p></div><Button>New Project</Button></div>
      <div className="grid gap-4 md:grid-cols-2">{projects.map((p) => (
        <Card key={p.name}><CardHeader className="pb-3"><div className="flex items-start justify-between"><CardTitle className="text-lg">{p.name}</CardTitle><Badge variant={p.status=="Completed"?"default":p.status=="On Hold"?"outline":"secondary"}>{p.status}</Badge></div></CardHeader><CardContent className="flex flex-col gap-4"><div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Progress</span><span className="font-medium">{p.progress}%</span></div><Progress value={p.progress} /><div className="flex items-center justify-between"><div className="flex items-center gap-1">{p.team.map((m) => (<Avatar key={m} className="-ml-2 h-7 w-7 border-2 border-background first:ml-0"><AvatarFallback className="text-xs">{m}</AvatarFallback></Avatar>))}</div><div className="flex items-center gap-4 text-xs text-muted-foreground"><span>Tasks: {p.tasks}</span><span>Due: {p.due}</span></div></div></CardContent></Card>
      ))}</div>
    </div>
  );
}