"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Lock, LogOut } from "lucide-react";
export default function LockscreenPage() { return (<div className="flex min-h-screen items-center justify-center bg-muted/30"><Card className="w-full max-w-sm mx-4 text-center"><CardHeader><Avatar className="mx-auto h-20 w-20"><AvatarFallback className="text-2xl font-bold">MK</AvatarFallback></Avatar><CardTitle className="mt-4">Md Mubarok</CardTitle></CardHeader><CardContent className="flex flex-col gap-4"><div className="relative"><Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input type="password" placeholder="Enter your password" className="pl-9" /></div><Button className="w-full">Unlock</Button><Button variant="ghost" className="w-full gap-2"><LogOut className="h-4 w-4" />Log out</Button></CardContent></Card></div>); }