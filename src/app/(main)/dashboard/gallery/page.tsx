"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, Heart } from "lucide-react";

const items=[{id:1,title:"Mountain Landscape",cat:"Nature",size:"2.4 MB",color:"bg-green-100 dark:bg-green-900/30"},{id:2,title:"City Skyline",cat:"Urban",size:"3.1 MB",color:"bg-blue-100 dark:bg-blue-900/30"},{id:3,title:"Ocean Sunset",cat:"Nature",size:"1.8 MB",color:"bg-orange-100 dark:bg-orange-900/30"},{id:4,title:"Architecture Detail",cat:"Urban",size:"2.2 MB",color:"bg-gray-100 dark:bg-gray-900/30"},{id:5,title:"Forest Path",cat:"Nature",size:"2.9 MB",color:"bg-emerald-100 dark:bg-emerald-900/30"},{id:6,title:"Street Portrait",cat:"People",size:"1.5 MB",color:"bg-purple-100 dark:bg-purple-900/30"},{id:7,title:"Night Cityscape",cat:"Urban",size:"3.5 MB",color:"bg-indigo-100 dark:bg-indigo-900/30"},{id:8,title:"Flower Macro",cat:"Nature",size:"1.2 MB",color:"bg-pink-100 dark:bg-pink-900/30"},{id:9,title:"Coffee Shop",cat:"Lifestyle",size:"2.0 MB",color:"bg-amber-100 dark:bg-amber-900/30"}];

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Gallery</h2><p className="text-muted-foreground">A grid-based image gallery for browsing and managing media files.</p></div>
      <Card><CardHeader><CardTitle>Image Gallery</CardTitle><CardDescription>Browse images. Hover for actions.</CardDescription></CardHeader><CardContent><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{items.map((item) => (<div key={item.id} className="group relative overflow-hidden rounded-lg border"><div className={`aspect-video ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}><span className="text-4xl font-bold text-muted-foreground/30">{item.id}</span></div><div className="p-3"><div><p className="text-sm font-medium">{item.title}</p><p className="text-xs text-muted-foreground">{item.cat} - {item.size}</p></div><div className="mt-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100"><button className="h-7 w-7"><Eye className="h-3.5 w-3.5" /></button><button className="h-7 w-7"><Heart className="h-3.5 w-3.5" /></button><button className="h-7 w-7"><Download className="h-3.5 w-3.5" /></button></div></div></div>))}</div></CardContent></Card>
    </div>
  );
}