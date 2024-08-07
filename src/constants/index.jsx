import { LayoutDashboard, Ticket, Users } from "lucide-react";
import { Routers } from "@/config/RouterConfig";
export const ClientLinks = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    label: Routers.client.home.label,
    route: Routers.client.home.route,
  },
];

export const AdminLinks = [
  {
    icon: <Users className="h-5 w-5" />,
    label: Routers.admin.userManagement.label,
    route: Routers.admin.userManagement.route,
  },
  {
    icon: <Ticket className="h-5 w-5" />,
    label: Routers.admin.events.label,
    route: Routers.admin.events.route,
  },
];
