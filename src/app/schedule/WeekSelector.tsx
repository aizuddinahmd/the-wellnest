import { useState } from "react";
import {
  addDays,
  subWeeks,
  addWeeks,
  startOfWeek,
  isSameDay,
  format,
  addMonths,
  subMonths,
  //   isSameMonth,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function WeekSelectorSection({
  selectedDate,
  onChange,
}: {
  selectedDate: Date;
  onChange: (date: Date) => void;
}) {
  const [weekStart, setWeekStart] = useState(
    startOfWeek(selectedDate, { weekStartsOn: 0 })
  );

  // Move to previous/next week
  const prevWeek = () => setWeekStart(subWeeks(weekStart, 1));
  const nextWeek = () => setWeekStart(addWeeks(weekStart, 1));

  // Move to previous/next month
  const prevMonth = () =>
    setWeekStart(startOfWeek(subMonths(weekStart, 1), { weekStartsOn: 0 }));
  const nextMonth = () =>
    setWeekStart(startOfWeek(addMonths(weekStart, 1), { weekStartsOn: 0 }));

  // Jump to today
  const goToToday = () => {
    const today = new Date();
    setWeekStart(startOfWeek(today, { weekStartsOn: 0 }));
    onChange(today);
  };

  // Month label (centered)
  const monthLabel = format(weekStart, "MMMM").toUpperCase();
  const yearLabel = format(weekStart, "yyyy");

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {/* Month navigation */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <button
          onClick={prevMonth}
          className="text-2xl px-2 py-1 rounded-full hover:bg-gray-200"
          aria-label="Previous month"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <span className="flex-1 text-center text-lg font-semibold tracking-widest text-gray-700">
          {monthLabel} {yearLabel}
        </span>
        <button
          onClick={nextMonth}
          className="text-2xl px-2 py-1 rounded-full hover:bg-gray-200"
          aria-label="Next month"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      {/* Week days */}
      <div className="flex items-center justify-center gap-4 w-full">
        <button
          onClick={prevWeek}
          className="text-2xl px-2 py-1 rounded-full hover:bg-gray-200"
          aria-label="Previous week"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex-1 flex justify-between">
          {daysOfWeek.map((day, idx) => {
            const dayDate = addDays(weekStart, idx);
            const isSelected = isSameDay(dayDate, selectedDate);
            return (
              <button
                key={day}
                onClick={() => onChange(dayDate)}
                className={`flex flex-col items-center px-3 py-1 rounded-full transition-all
                  ${isSelected ? "text-[#b2ac88] font-bold" : "text-gray-500"}
                `}
              >
                <span className="text-xs">{day}</span>
                <span
                  className={`text-2xl ${
                    isSelected
                      ? "text-dark-green font-bold"
                      : "text-dark-green/70"
                  }`}
                >
                  {format(dayDate, "d")}
                </span>
                {isSelected && (
                  <span className="w-5 h-1 bg-dark-green rounded block mt-1"></span>
                )}
              </button>
            );
          })}
        </div>
        <button
          onClick={nextWeek}
          className="text-2xl px-2 py-1 rounded-full hover:bg-gray-200"
          aria-label="Next week"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      {/* Today and Show All buttons */}
      <div className="flex items-center gap-4 mt-4 w-full justify-center">
        <button
          onClick={goToToday}
          className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-blue-50 transition"
        >
          TODAY
        </button>
        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-blue-50 transition">
          SHOW ALL
        </button>
        {/* Example dropdowns */}
        <select className="rounded-full border border-gray-300 px-6 py-2 text-gray-700 font-semibold">
          <option>Instructors</option>
        </select>
        <select className="rounded-full border border-gray-300 px-6 py-2 text-gray-700 font-semibold">
          <option>Locations</option>
        </select>
      </div>
    </div>
  );
}
