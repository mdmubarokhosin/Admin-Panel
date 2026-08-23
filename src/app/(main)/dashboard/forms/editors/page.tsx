"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Link, Image, Code } from "lucide-react";

export default function FormsEditorsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Text Editors</h2><p className="text-muted-foreground">Rich text editor components for WYSIWYG content editing for blogs, descriptions, and comments.</p></div>
      <Card><CardHeader><CardTitle>Rich Text Editor</CardTitle><CardDescription>Full-featured editor with formatting toolbar.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">
        <div className="rounded-md border"><div className="flex flex-wrap items-center gap-1 border-b bg-muted/50 p-2">{[Bold,Italic,Underline,AlignLeft,AlignCenter,AlignRight,List,ListOrdered,Link,Image,Code].map((Icon,i) => <Button key={i} variant="ghost" size="icon" className="h-8 w-8"><Icon className="h-4 w-4" /></Button>)}</div><Textarea placeholder="Start writing your content here..." rows={12} className="border-0 focus-visible:ring-0" /></div>
        <div className="flex justify-end gap-2"><Button variant="outline">Save Draft</Button><Button>Publish</Button></div>
      </CardContent></Card>
    </div>
 );
}