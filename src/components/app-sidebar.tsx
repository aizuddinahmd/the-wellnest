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
import { createClient } from "@/utils/supabase/client";

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

  // Fetch current user data
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const supabase = createClient();
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser();

        if (!authUser) {
          return;
        }

        // Get user profile data if available
        const { data: profileData } = await supabase
          .from("profiles")
          .select("display_name, avatar_url")
          .eq("id", authUser.id)
          .single();

        setUser({
          name:
            profileData?.display_name ||
            authUser.user_metadata?.display_name ||
            authUser.email?.split("@")[0] ||
            "",
          email: authUser.email || "",
          avatar: profileData?.avatar_url || "/avatars/default.jpg",
        });
      } catch (error) {
        console.error("Error in fetchUserData:", error);
      } finally {
        setHasMounted(true);
      }
    };

    fetchUserData();
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
