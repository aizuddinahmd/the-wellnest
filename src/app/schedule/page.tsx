"use client";

import { useState } from "react";
import CalendarSection from "./CalendarSection";
import BookingList from "./BookingList";

// const todayStr = format(new Date(), "yyyy-MM-dd");

// const mockCourses = [
//   {
//     id: 1,
//     time: "8:00am",
//     duration: 55,
//     title: "Reformer Flow",
//     instructor: "Mila Anisa",
//     location: "Bumi Studio Jakarta",
//     studio: "Studio 2",
//     slots: "3 / 6 left",
//     status: "bookable",
//     date: todayStr,
//   },
//   {
//     id: 2,
//     time: "9:00am",
//     duration: 55,
//     title: "Arms, Booty, Core",
//     instructor: "Mila Anisa",
//     location: "Bumi Studio Jakarta",
//     studio: "Studio 2",
//     slots: "Waitlist Not Available",
//     status: "waitlist",
//     date: todayStr,
//   },
//   {
//     id: 3,
//     time: "10:00am",
//     duration: 55,
//     title: "Reformer Flow",
//     instructor: "Siska Djo",
//     location: "Bumi Studio Jakarta",
//     studio: "Studio 2",
//     slots: "6 / 6 left",
//     status: "bookable",
//     date: todayStr,
//   },
// ];

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#fef9f6] px-4 py-12 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#fef9f6] w-7xl">
        {/* <h1 className="text-3xl font-bold mb-6">Timetable</h1> */}
        {/* Course List */}
        <div className="col-span-2">
          <BookingList selectedDate={selectedDate} />
        </div>

        {/* Calendar */}
        <CalendarSection
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
        {/* Filters */}
      </div>
    </main>
  );
}
