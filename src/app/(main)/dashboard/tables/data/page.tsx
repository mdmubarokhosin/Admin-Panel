"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const orders = [{id:"ORD-7291",customer:"Md Mubarok",product:"Pro Plan",amount:"$299",status:"Completed",date:"2024-08-15"},{id:"ORD-7292",customer:"Sarah Johnson",product:"Enterprise",amount:"$999",status:"Processing",date:"2024-08-15"},{id:"ORD-7293",customer:"Michael Chen",product:"Starter",amount:"$49",status:"Completed",date:"2024-08-14"},{id:"ORD-7294",customer:"Emily Davis",product:"Pro Plan",amount:"$299",status:"Pending",date:"2024-08-14"}];

export default function TablesDataPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Data Tables</h2><p className="text-muted-foreground">Advanced data tables with search, filtering, and status tracking.</p></div>
      <Card><CardHeader><CardTitle>Orders Table</CardTitle><CardDescription>Searchable orders with status badges.</CardDescription></CardHeader><CardContent>
        <div className="mb-4 flex items-center gap-4"><div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search orders..." className="pl-9" /></div><Button variant="outline" size="sm">Filter</Button></div>
        <Table><TableHeader><TableRow><TableHead>Order ID</TableHead><TableHead>Customer</TableHead><TableHead>Product</TableHead><TableHead className="text-right">Amount</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader><TableBody>{orders.map((o) => (<TableRow key={o.id}><TableCell className="font-mono text-sm font-medium">{o.id}</TableCell><TableCell>{o.customer}</TableCell><TableCell className="text-muted-foreground">{o.product}</TableCell><TableCell className="text-right font-medium">{o.amount}</TableCell><TableCell><Badge variant={o.status==="Completed"?"default":o.status=="Processing"?"secondary":"outline"}>{o.status}</Badge></TableCell><TableCell className="text-muted-foreground">{o.date}</TableCell></TableRow>))}</TableBody></Table>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground"><p>Showing 1-4 of 156 orders</p><div className="flex gap-2"><Button variant="outline" size="sm" disabled>Previous</Button><Button variant="outline" size="sm">Next</Button></div></div>
      </CardContent></Card>
    </div>
  );
}