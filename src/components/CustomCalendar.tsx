import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CustomCalendarProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  eventDates?: Date[]; // Dates with events for dot indicators
}

export default function CustomCalendar({
  selectedDate,
  onChange,
  eventDates = [],
}: CustomCalendarProps) {
  // Helper to check if a date has an event
  const hasEvent = (date: Date) =>
    eventDates.some(
      (ev) =>
        ev.getFullYear() === date.getFullYear() &&
        ev.getMonth() === date.getMonth() &&
        ev.getDate() === date.getDate()
    );

  return (
    <div className="bg-[#ffffff] border-none p-4 w-[320px]">
      <Calendar
        value={selectedDate}
        onChange={(date) => onChange(date as Date)}
        prevLabel={<ChevronLeft className="w-5 h-5 text-gray-400" />}
        nextLabel={<ChevronRight className="w-5 h-5 text-gray-400" />}
        formatMonthYear={(locale, date) =>
          date.toLocaleString("en-US", { month: "long", year: "numeric" })
        }
        tileContent={({ date, view }) =>
          view === "month" && hasEvent(date) ? (
            <div className="flex justify-center mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#355c4a] block" />
            </div>
          ) : null
        }
        tileClassName={({ date, view }) =>
          view === "month" &&
          selectedDate &&
          date.getFullYear() === selectedDate.getFullYear() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getDate() === selectedDate.getDate()
            ? "bg-blue-600 text-white rounded-full shadow font-bold"
            : "rounded-full"
        }
        // calendarType="US"
        showNeighboringMonth={false}
        className="w-full border-none"
      />
    </div>
  );
}
