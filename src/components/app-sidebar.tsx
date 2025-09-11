"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Calendar, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { ChartBar } from "@phosphor-icons/react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Create",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create Classes",
          url: "/create-classes",
        },
        {
          title: "Draft",
          url: "/draft",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    avatar: "",
  });
  const pathname = usePathname();
  const isScheduleActive = pathname === "/schedule";
  const isAnalyticsActive = pathname === "/analytics";

  // Set static user data
  React.useEffect(() => {
    setUser({
      name: "John Doe",
      email: "john@example.com",
      avatar: "/avatars/default.jpg",
    });
    setHasMounted(true);
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center p-2 mb-4">
          <a href="/admin/dashboard">
            <Image
              src="/thewellnest-logo.png"
              alt="The Wellnest"
              width={200}
              height={20}
              unoptimized
            />
          </a>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {hasMounted ? (
          <NavMain items={data.navMain} currentPath={pathname} />
        ) : (
          <NavMain items={data.navMain} currentPath="" />
        )}
        <SidebarMenu>
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton
              asChild
              tooltip="Schedule"
              isActive={hasMounted ? isScheduleActive : false}
            >
              <a href="/schedule" className="flex items-center gap-2">
                <Calendar className="shrink-0" />
                <span>Schedule</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuButton
              asChild
              tooltip="Analytics"
              isActive={hasMounted ? isAnalyticsActive : false}
            >
              <a href="/analytics" className="flex items-center gap-2">
                <ChartBar className="shrink-0" />
                <span>Analytics</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
