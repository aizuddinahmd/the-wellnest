"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AdminScheduleHeader from "@/components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <SidebarInset className="flex-1 flex flex-col">
          {/* Optional: Header */}
          <header className="h-16 flex items-center px-6 border-b bg-white/80 backdrop-blur-md z-10">
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </header>
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <AdminScheduleHeader onToday={() => {}} />
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
