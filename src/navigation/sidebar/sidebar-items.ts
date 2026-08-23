import {
  AlertCircle,
  Bookmark,
  Calendar,
  ChartBar,
  CheckSquare,
  CreditCard,
  FileText,
  Fingerprint,
  Image,
  Kanban,
  Layout,
  LayoutList,
  LayoutDashboard,
  Lock,
  Mail,
  MessageSquare,
  Search,
  Settings,
  type LucideIcon,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    items: [
      {
        id: "dashboards",
        title: "Dashboards",
        icon: LayoutDashboard,
        subItems: [
          { id: "default", title: "Default", url: "/dashboard/default" },
          { id: "crm", title: "CRM", url: "/dashboard/crm" },
          { id: "finance", title: "Finance", url: "/dashboard/finance" },
          { id: "analytics", title: "Analytics", url: "/dashboard/analytics" },
          { id: "productivity", title: "Productivity", url: "/dashboard/productivity" },
          { id: "ecommerce", title: "E-commerce", url: "/dashboard/ecommerce" },
          { id: "academy", title: "Academy", url: "/dashboard/academy" },
          { id: "logistics", title: "Logistics", url: "/dashboard/logistics" },
          { id: "infrastructure", title: "Infrastructure", url: "/dashboard/infrastructure" },
          { id: "file-manager", title: "File Manager", url: "/dashboard/file-manager", badge: "new" },
          { id: "patient-monitoring", title: "Patient Monitoring", url: "/dashboard/patient-monitoring", badge: "new" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Components",
    items: [
      {
        id: "ui-elements",
        title: "UI Elements",
        icon: Layout,
        subItems: [
          { id: "ui-general", title: "General", url: "/dashboard/ui/general" },
          { id: "ui-icons", title: "Icons", url: "/dashboard/ui/icons" },
          { id: "ui-timeline", title: "Timeline", url: "/dashboard/ui/timeline" },
          { id: "ui-ribbons", title: "Ribbons", url: "/dashboard/ui/ribbons" },
          { id: "ui-colors", title: "Colors", url: "/dashboard/ui/colors" },
        ],
      },
      {
        id: "forms",
        title: "Forms",
        icon: FileText,
        subItems: [
          { id: "forms-elements", title: "Elements", url: "/dashboard/forms/elements" },
          { id: "forms-layout", title: "Layout", url: "/dashboard/forms/layout" },
          { id: "forms-validation", title: "Validation", url: "/dashboard/forms/validation" },
          { id: "forms-wizard", title: "Wizard", url: "/dashboard/forms/wizard" },
          { id: "forms-advanced", title: "Advanced Elements", url: "/dashboard/forms/advanced" },
          { id: "forms-editors", title: "Editors", url: "/dashboard/forms/editors" },
        ],
      },
      {
        id: "tables",
        title: "Tables",
        icon: ChartBar,
        subItems: [
          { id: "tables-simple", title: "Simple Tables", url: "/dashboard/tables/simple" },
          { id: "tables-data", title: "Data Tables", url: "/dashboard/tables/data" },
        ],
      },
      {
        id: "charts",
        title: "Charts",
        icon: TrendingUp,
        subItems: [
          { id: "charts-main", title: "ChartJS", url: "/dashboard/charts" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Applications",
    items: [
      {
        id: "apps",
        title: "Apps",
        icon: LayoutList,
        subItems: [
          { id: "email", title: "Email", url: "/dashboard/mail", icon: Mail },
          { id: "chat", title: "Chat", url: "/dashboard/chat", icon: MessageSquare },
          { id: "calendar", title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
          { id: "kanban", title: "Kanban Board", url: "/dashboard/kanban", icon: Kanban },
          { id: "tasks", title: "Tasks", url: "/dashboard/tasks", icon: CheckSquare },
        ],
      },
      {
        id: "pages",
        title: "Pages",
        icon: FileText,
        subItems: [
          { id: "profile", title: "Profile", url: "/dashboard/profile", icon: UserRound },
          { id: "invoice", title: "Invoice", url: "/dashboard/invoice", icon: CreditCard },
          { id: "settings", title: "Settings", url: "/dashboard/settings", icon: Settings },
          { id: "projects", title: "Projects", url: "/dashboard/projects" },
          { id: "gallery", title: "Gallery", url: "/dashboard/gallery", icon: Image },
          { id: "search-results", title: "Search Results", url: "/dashboard/search-results", icon: Search },
          { id: "pricing", title: "Pricing", url: "/dashboard/pricing", icon: CreditCard },
          { id: "faq", title: "FAQ", url: "/dashboard/faq", icon: AlertCircle },
          { id: "coming-soon", title: "Coming Soon", url: "/dashboard/coming-soon", icon: Bookmark },
        ],
      },
      {
        id: "user-management",
        title: "User Management",
        icon: Users,
        subItems: [
          { id: "users", title: "Users", url: "/dashboard/users", icon: Users },
          { id: "roles", title: "Roles & Permissions", url: "/dashboard/roles", icon: Lock },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Extras",
    items: [
      {
        id: "error-pages",
        title: "Error Pages",
        icon: AlertCircle,
        subItems: [
          { id: "error-404", title: "404 Error", url: "/dashboard/error/404" },
          { id: "error-500", title: "500 Error", url: "/dashboard/error/500" },
          { id: "error-maintenance", title: "Maintenance", url: "/dashboard/error/maintenance" },
        ],
      },
      {
        id: "authentication",
        title: "Authentication",
        icon: Fingerprint,
        subItems: [
          { id: "auth-login-v1", title: "Login v1", url: "/auth/v1/login", newTab: true },
          { id: "auth-login-v2", title: "Login v2", url: "/auth/v2/login", newTab: true },
          { id: "auth-register-v1", title: "Register v1", url: "/auth/v1/register", newTab: true },
          { id: "auth-register-v2", title: "Register v2", url: "/auth/v2/register", newTab: true },
          { id: "auth-forgot-password", title: "Forgot Password", url: "/auth/v1/forgot-password", newTab: true },
          { id: "auth-lockscreen", title: "Lockscreen", url: "/auth/v1/lockscreen", newTab: true },
        ],
      },
    ],
  },
];
