"use client";
import { useState } from "react";
import Drawer from "./DrawerSchedule";

interface AdminScheduleHeaderProps {
  onToday: () => void;
}

export default function AdminScheduleHeader({
  onToday,
}: AdminScheduleHeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSaveEvent = () => {
    // Implementation of handleSaveEvent function
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* +Create Button */}
      <button
        className="bg-indigo-700 text-white font-semibold rounded-full px-6 py-2 text-base shadow hover:bg-indigo-800 transition-colors"
        onClick={() => setDrawerOpen(true)}
      >
        + Create
      </button>
      {/* Today Button */}
      <button
        className="border border-gray-300 rounded-full px-6 py-2 text-base font-semibold bg-white hover:bg-gray-100 transition-colors"
        onClick={onToday}
      >
        Today
      </button>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSave={handleSaveEvent}
      ></Drawer>
    </div>
  );
}
