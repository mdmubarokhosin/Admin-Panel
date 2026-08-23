"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormsValidationPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = () => { const e: Record<string, string> = {}; const n = (document.getElementById("v-name") as HTMLInputElement)?.value; const em = (document.getElementById("v-email") as HTMLInputElement)?.value; const p = (document.getElementById("v-password") as HTMLInputElement)?.value; if (!n || n.length < 2) e.name = "Name must be at least 2 characters."; if (!em || !em.includes("@")) e.email = "Please enter a valid email."; if (!p || p.length < 8) e.password = "Password must be at least 8 characters."; setErrors(e); };
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Form Validation</h2><p className="text-muted-foreground">Form validation patterns with inline error messages, required field indicators, and real-time feedback.</p></div>
      <Card><CardHeader><CardTitle>Registration Form</CardTitle><CardDescription>Inline validation. Click Create Account to trigger.</CardDescription></CardHeader><CardContent className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2"><Label htmlFor="v-name">Full Name <span className="text-destructive">*</span></Label><Input id="v-name" placeholder="Full name" />{errors.name && <p className="text-xs text-destructive">{errors.name}</p>}</div>
        <div className="flex flex-col gap-2"><Label htmlFor="v-email">Email <span className="text-destructive">*</span></Label><Input id="v-email" type="email" placeholder="name@company.com" />{errors.email && <p className="text-xs text-destructive">{errors.email}</p>}</div>
        <div className="flex flex-col gap-2"><Label htmlFor="v-password">Password <span className="text-destructive">*</span></Label><Input id="v-password" type="password" placeholder="Min 8 chars" />{errors.password && <p className="text-xs text-destructive">{errors.password}</p>}</div>
        <div className="flex items-end gap-2"><Button onClick={validate} className="mt-6">Create Account</Button><Button variant="outline" onClick={() => setErrors({})} className="mt-6">Reset</Button></div>
      </CardContent></Card>
    </div>
  );
}