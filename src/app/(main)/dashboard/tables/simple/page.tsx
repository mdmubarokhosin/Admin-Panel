"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const users = [{id:1,name:"Md Mubarok",email:"mubarok@example.com",role:"Admin",status:"Active",joined:"2024-01-15"},{id:2,name:"Sarah Johnson",email:"sarah@example.com",role:"Editor",status:"Active",joined:"2024-02-20"},{id:3,name:"Michael Chen",email:"michael@example.com",role:"Viewer",status:"Inactive",joined:"2024-03-10"},{id:4,name:"Emily Davis",email:"emily@example.com",role:"Editor",status:"Active",joined:"2024-04-05"},{id:5,name:"James Wilson",email:"james@example.com",role:"Admin",status:"Active",joined:"2024-05-12"}];

export default function TablesSimplePage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Simple Tables</h2><p className="text-muted-foreground">Basic tables styled with the design system for structured data display.</p></div>
      <Card><CardHeader><CardTitle>Users Table</CardTitle><CardDescription>A straightforward table with status badges.</CardDescription></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>#</TableHead><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Joined</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader><TableBody>{users.map((u) => (<TableRow key={u.id}><TableCell className="font-mono text-muted-foreground">{u.id}</TableCell><TableCell className="font-medium">{u.name}</TableCell><TableCell className="text-muted-foreground">{u.email}</TableCell><TableCell>{u.role}</TableCell><TableCell><Badge variant={u.status==="Active"?"default":"outline"}>{u.status}</Badge></TableCell><TableCell className="text-muted-foreground">{u.joined}</TableCell><TableCell className="text-right"><Button variant="ghost" size="sm">Edit</Button></TableCell></TableRow>))}</TableBody></Table></CardContent></Card>
    </div>
  );
}