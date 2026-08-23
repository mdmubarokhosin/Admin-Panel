"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function FormsLayoutPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Form Layout</h2><p className="text-muted-foreground">Different form layout patterns for organizing input fields effectively, reducing cognitive load and guiding users.</p></div>
      <Card><CardHeader><CardTitle>Horizontal Form</CardTitle><CardDescription>Labels to the left of inputs, ideal for settings panels where vertical space is limited.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-[120px_1fr] items-center gap-4"><Label htmlFor="h-name">Username</Label><Input id="h-name" placeholder="Enter username" /></div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-4"><Label htmlFor="h-email">Email</Label><Input id="h-email" type="email" placeholder="user@email.com" /></div>
        <div className="ml-[120px]"><Button>Submit</Button><Button variant="outline" className="ml-2">Cancel</Button></div>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Multi-Section Form</CardTitle><CardDescription>Form organized into distinct sections with separators for longer forms.</CardDescription></CardHeader><CardContent className="flex flex-col gap-6">
        <div><h4 className="mb-4 text-sm font-semibold">Personal Information</h4><div className="grid gap-4 md:grid-cols-3"><div className="flex flex-col gap-2"><Label>First Name</Label><Input placeholder="First" /></div><div className="flex flex-col gap-2"><Label>Last Name</Label><Input placeholder="Last" /></div><div className="flex flex-col gap-2"><Label>Phone</Label><Input placeholder="Phone" /></div></div></div>
        <Separator /><div><h4 className="mb-4 text-sm font-semibold">Address</h4><div className="grid gap-4 md:grid-cols-2"><div className="flex flex-col gap-2"><Label>Street</Label><Input placeholder="123 Main Street" /></div><div className="flex flex-col gap-2"><Label>City</Label><Input placeholder="City" /></div></div></div>
        <Separator /><div className="flex justify-end gap-2"><Button variant="outline">Cancel</Button><Button>Save Changes</Button></div>
      </CardContent></Card>
    </div>
  );
}