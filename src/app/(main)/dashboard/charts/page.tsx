"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell, Area, AreaChart } from "recharts";

const barData=[{month:"Jan",revenue:4000,expenses:2400},{month:"Feb",revenue:3000,expenses:1398},{month:"Mar",revenue:5000,expenses:3800},{month:"Apr",revenue:4780,expenses:3908},{month:"May",revenue:5890,expenses:4800},{month:"Jun",revenue:4390,expenses:3800}];
const pieData=[{name:"Desktop",value:45,fill:"var(--color-desktop)"},{name:"Mobile",value:35,fill:"var(--color-mobile)"},{name:"Tablet",value:20,fill:"var(--color-tablet)"}];
const areaData=[{day:"Mon",users:120,sessions:240},{day:"Tue",users:190,sessions:380},{day:"Wed",users:160,sessions:320},{day:"Thu",users:210,sessions:420},{day:"Fri",users:240,sessions:480},{day:"Sat",users:180,sessions:360},{day:"Sun",users:140,sessions:280}];
const barCfg={revenue:{label:"Revenue",color:"var(--chart-1)"},expenses:{label:"Expenses",color:"var(--chart-2)"}} satisfies ChartConfig;
const pieCfg={desktop:{label:"Desktop",color:"var(--chart-1)"},mobile:{label:"Mobile",color:"var(--chart-2)"},tablet:{label:"Tablet",color:"var(--chart-3)"}} satisfies ChartConfig;
const areaCfg={users:{label:"Users",color:"var(--chart-1)"},sessions:{label:"Sessions",color:"var(--chart-4)"}} satisfies ChartConfig;

export default function ChartsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div><h2 className="text-3xl tracking-tight">Charts</h2><p className="text-muted-foreground">Data visualization with Recharts and shadcn/ui Chart, theme-aware for light and dark modes.</p></div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card><CardHeader><CardTitle>Revenue vs Expenses</CardTitle><CardDescription>Monthly revenue and expenses comparison.</CardDescription></CardHeader><CardContent><ChartContainer config={barCfg} className="h-72 w-full"><BarChart data={barData}><CartesianGrid vertical={false} /><XAxis dataKey="month" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4,4,0,0]} /><Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4,4,0,0]} /></BarChart></ChartContainer></CardContent></Card>
        <Card><CardHeader><CardTitle>Traffic Sources</CardTitle><CardDescription>User distribution by device type.</CardDescription></CardHeader><CardContent><ChartContainer config={pieCfg} className="h-72 w-full"><PieChart><ChartTooltip content={<ChartTooltipContent />} /><Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={60}>{pieData.map((e,i)=><Cell key={i} fill={e.fill} />)}</Pie></PieChart></ChartContainer></CardContent></Card>
        <Card className="lg:col-span-2"><CardHeader><CardTitle>Weekly Activity</CardTitle><CardDescription>Daily users and sessions.</CardDescription></CardHeader><CardContent><ChartContainer config={areaCfg} className="h-72 w-full"><AreaChart data={areaData}><CartesianGrid vertical={false} /><XAxis dataKey="day" /><YAxis /><ChartTooltip content={<ChartTooltipContent />} /><Area type="monotone" dataKey="users" fill="var(--color-users)" stroke="var(--color-users)" /><Area type="monotone" dataKey="sessions" fill="var(--color-sessions)" stroke="var(--color-sessions)" /></AreaChart></ChartContainer></CardContent></Card>
      </div>
    </div>
  );
}