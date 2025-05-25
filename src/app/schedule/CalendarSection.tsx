import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfWeek, endOfWeek, format } from "date-fns";

interface WeekPickerSectionProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

export default function WeekPickerSection({
  selectedDate,
  onChange,
}: WeekPickerSectionProps) {
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 });

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full md:w-[340px] h-fit flex flex-col items-center">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="EEE, dd MMM yyyy"
        className="border rounded px-4 py-2 text-center"
        inline
        picker="week"
      />
      <div className="mt-4 text-center text-sm text-gray-700">
        <span className="font-semibold">Week:</span>{" "}
        {format(weekStart, "dd MMM")} - {format(weekEnd, "dd MMM yyyy")}
      </div>
    </div>
  );
}
