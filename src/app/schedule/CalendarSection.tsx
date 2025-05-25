import Calendar from "react-calendar";
import { format } from "date-fns";

interface CalendarSectionProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

export default function CalendarSection({
  selectedDate,
  onChange,
}: CalendarSectionProps) {
  const dateStr = format(selectedDate, "yyyy-MM-dd");
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full md:w-[340px] h-fit">
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) onChange(value);
        }}
        value={selectedDate}
        className="border-0"
        tileClassName={({ date }) =>
          format(date, "yyyy-MM-dd") === dateStr
            ? "bg-black text-white rounded-full"
            : ""
        }
      />
    </div>
  );
}
