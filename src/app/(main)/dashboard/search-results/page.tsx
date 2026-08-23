"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const results=[{title:"User Management Guide",url:"/dashboard/users",desc:"Learn how to manage users, assign roles, and configure permissions for the admin panel interface.",type:"Documentation"},{title:"Role-Based Access Control",url:"/dashboard/roles",desc:"Configure roles and permission sets to control access with granular security and custom role creation capabilities.",type:"Documentation"},{title:"Dashboard Analytics",url:"/dashboard/analytics",desc:"Comprehensive analytics dashboard with real-time metrics, charts, and KPIs for tracking performance.",type:"Page"},{title:"Project Management",url:"/dashboard/projects",desc:"Track project progress, manage tasks, and collaborate with team members using Kanban boards.",type:"Page"},{title:"Invoice Management",url:"/dashboard/invoice",desc:"Create, send, and track invoices with recurring support and payment gateway integration.",type:"Page"}];

export default function SearchResultsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Search Results</h2><p className="text-muted-foreground">Search results from across the admin panel ranked by relevance.</p></div>
      <Card><CardContent className="pt-6"><div className="relative max-w-xl"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input defaultValue="dashboard management" className="pl-9" /></div><p className="mt-2 text-sm text-muted-foreground">Showing {results.length} results for "dashboard management"</p></CardContent></Card>
      <div className="flex flex-col gap-4">{results.map((r) => (<Card key={r.title}><CardHeader className="pb-2"><div className="flex items-center gap-2"><CardTitle className="text-base text-primary hover:underline cursor-pointer">{r.title}</CardTitle><Badge variant="outline" className="text-xs">{r.type}</Badge></div></CardHeader><CardContent><p className="text-sm text-muted-foreground">{r.desc}</p></CardContent></Card>))}</div>
    </div>
  );
}