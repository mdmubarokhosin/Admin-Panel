"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Check, ChevronLeft, ChevronRight, FileText, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [{ id:1, title:"Account", desc:"Create account credentials", icon:User },{ id:2, title:"Profile", desc:"Set up profile info", icon:FileText },{ id:3, title:"Preferences", desc:"Configure preferences", icon:Settings }];

export default function FormsWizardPage() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Form Wizard</h2><p className="text-muted-foreground">A multi-step wizard breaking complex forms into manageable sections for improved completion rates.</p></div>
      <Card><CardHeader><CardTitle>Create Account</CardTitle><CardDescription>Follow the steps to set up your new account.</CardDescription></CardHeader><CardContent>
        <div className="mb-8 flex items-center justify-between">{steps.map((s, i) => { const Ic = s.icon; return (<div key={s.id} className="flex flex-1 items-center"><div className="flex flex-col items-center gap-2"><div className={cn("flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors", step>s.id ? "border-primary bg-primary text-primary-foreground" : step === s.id ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground")}>{step > s.id ? <Check className="h-5 w-5" /> : <Ic className="h-5 w-5" />}</div><div className="text-center"><p className={cn("text-sm font-medium", step === s.id ? "text-foreground" : "text-muted-foreground")}>{s.title}</p><p className="hidden text-xs text-muted-foreground sm:block">{s.desc}</p></div></div>{i < steps.length - 1 && <div className={cn("mx-4 h-px flex-1", step > s.id ? "bg-primary" : "bg-border")}></div>}</div>); })}</div>
        <Progress value={(step/steps.length)*100} className="mb-8" />
        <div className="min-h-[200px]">{step===1 && <div className="grid gap-4 md:grid-cols-2"><div className="flex flex-col gap-2"><Label>Email</Label><Input type="email" placeholder="name@company.com" /></div><div className="flex flex-col gap-2"><Label>Username</Label><Input placeholder="username" /></div><div className="flex flex-col gap-2"><Label>Password</Label><Input type="password" placeholder="Password" /></div><div className="flex flex-col gap-2"><Label>Confirm</Label><Input type="password" placeholder="Confirm" /></div></div>}{step===2 && <div className="grid gap-4 md:grid-cols-2"><div className="flex flex-col gap-2"><Label>First Name</Label><Input /></div><div className="flex flex-col gap-2"><Label>Last Name</Label><Input /></div></div>}{step===3 && <div className="flex flex-col gap-4"><div className="flex items-center justify-between rounded-lg border p-4"><div><p className="font-medium">Email Notifications</p><p className="text-sm text-muted-foreground">Receive account updates</p></div><input type="checkbox" defaultChecked className="h-4 w-4" /></div><div className="flex items-center justify-between rounded-lg border p-4"><div><p className="font-medium">Marketing Emails</p><p className="text-sm text-muted-foreground">Receive tips and updates</p></div><input type="checkbox" className="h-4 w-4" /></div></div>}</div>
        <div className="mt-8 flex justify-between"><Button variant="outline" onClick={() => setStep(Math.max(1,step-1))} disabled={step===1}><ChevronLeft className="mr-2 h-4 w-4" />Previous</Button>{step<steps.length ? <Button onClick={() => setStep(Math.min(steps.length,step+1))}>Next<ChevronRight className="ml-2 h-4 w-4" /></Button> : <Button>Complete Setup</Button>}</div>
      </CardContent></Card>
    </div>
  );
}