"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function FormsAdvancedPage() {
  const [tags, setTags] = useState(["React","TypeScript","Next.js"]);
  const [tagInput, setTagInput] = useState("");
  const [slider, setSlider] = useState([60]);
  const addTag = () => { if (tagInput.trim()&&!tags.includes(tagInput.trim())) { setTags([...tags,tagInput.trim()]); setTagInput(""); } };
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Advanced Form Elements</h2><p className="text-muted-foreground">Advanced controls including tag inputs, sliders, and toggles for complex data entry.</p></div>
      <Card><CardHeader><CardTitle>Tags Input</CardTitle><CardDescription>Add multiple items as tags with individual remove buttons.</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-2"><Label>Skills</Label><div className="mt-2 flex flex-wrap items-center gap-2 rounded-md border p-2">{tags.map((t) => (<Badge key={t} variant="secondary" className="gap-1">{t}<button onClick={() => setTags(tags.filter(x=>x!==t))} className="ml-1 rounded-full hover:bg-muted-foreground/20"><X className="h-3 w-3" /></button></Badge>))}<Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => {if(e.key==="Enter"){e.preventDefault();addTag();}}} placeholder="Add tag..." className="h-7 flex-1 border-0 p-0 focus-visible:ring-0" /></div></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Sliders</CardTitle><CardDescription>Range slider controls for numeric values within a defined range.</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-4"><div className="flex items-center justify-between"><Label>Volume</Label><span className="text-sm text-muted-foreground">{slider[0]}%</span></div><Slider value={slider} onValueChange={setSlider} max={100} step={1} /></div></CardContent></Card>
      <Card><CardHeader><CardTitle>Settings Panel</CardTitle><CardDescription>A realistic settings layout using toggle switches.</CardDescription></CardHeader><CardContent><div className="grid gap-1">{[{t:"Email Notifications",d:"Receive email updates",c:true},{t:"Push Notifications",d:"Get push notifications",c:true},{t:"Dark Mode",d:"Use dark theme"},{t:"Auto-Save",d:"Auto-save every 30s",c:true},{t:"Sound Effects",d:"Play sounds for actions",c:true}].map((s) => (<div key={s.t} className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted"><div className="flex flex-col gap-0.5"><p className="text-sm font-medium">{s.t}</p><p className="text-xs text-muted-foreground">{s.d}</p></div><Switch defaultChecked={s.c} /></div>))}</div></CardContent></Card>
    </div>
  );
}