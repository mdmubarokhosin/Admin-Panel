"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs=[{title:"General Questions",desc:"Common questions.",items:[{q:"What is Admin Panel?",a:"Admin Panel is a modern admin panel built with Next.js, TypeScript, and shadcn/ui providing tools for user management, analytics, and file management."},{q:"Is it mobile responsive?",a:"Yes, the panel is fully responsive. The sidebar collapses into a drawer on mobile and all components adapt to screen space."},{q:"How do I deploy it?",a:"The panel supports static export for Vercel, Netlify, Cloudflare Pages, or any static hosting. Run the build command to generate the output directory."}]},{title:"Account & Security",desc:"Account management.",items:[{q:"How do I reset my password?",a:"Go to Settings then Security and click Update Password. Use the Forgot Password link on login if needed."},{q:"Does it support 2FA?",a:"Yes, 2FA is available in Security settings using TOTP authenticator apps like Google Authenticator and Authy."}]},{title:"Technical",desc:"Technical help.",items:[{q:"Can I customize the theme?",a:"Yes, light/dark modes, custom color palettes, and layout options are available through Appearance settings."}]}];

export default function FAQPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Frequently Asked Questions</h2><p className="text-muted-foreground">Find answers to common questions organized by category.</p></div>
      {faqs.map((cat) => (
        <Card key={cat.title}><CardHeader><CardTitle>{cat.title}</CardTitle><CardDescription>{cat.desc}</CardDescription></CardHeader><CardContent><Accordion type="single" collapsible className="w-full">{cat.items.map((item,i) => (<AccordionItem key={i} value={`${cat.title}-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{item.a}</AccordionContent></AccordionItem>))}</Accordion></CardContent></Card>
      ))}
    </div>
  );
}