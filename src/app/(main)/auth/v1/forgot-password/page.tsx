"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { KeyRound, ArrowLeft } from "lucide-react";
import Link from "next/link";
export default function ForgotPasswordPage() { return (<div className="flex min-h-screen items-center justify-center bg-muted/30"><Card className="w-full max-w-md mx-4"><CardHeader className="text-center"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><KeyRound className="h-6 w-6 text-primary" /></div><CardTitle className="text-2xl">Forgot Password?</CardTitle></CardHeader><CardContent className="flex flex-col gap-4"><div className="flex flex-col gap-2"><Label htmlFor="email">Email Address</Label><Input id="email" type="email" placeholder="name@company.com" /></div><Button className="w-full">Send Reset Link</Button><Separator /><div className="text-center"><Link href="/auth/v1/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to Login</Link></div></CardContent></Card></div>); }