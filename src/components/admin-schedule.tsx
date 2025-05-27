import { useState } from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
  DateLocalizer,
} from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const staffList = [
  { id: 1, name: "Bryan Halim" },
  { id: 2, name: "Julia Diana" },
  { id: 3, name: "Nicola Test User" },
  { id: 4, name: "Rani Erika" },
  { id: 5, name: "Ridho Aulia" },
];

const initialEvents = [
  {
    id: 1,
    title: "(No class)",
    start: new Date(2025, 5, 25, 9, 0),
    end: new Date(2025, 5, 25, 10, 0),
    staffId: 1,
  },
];

export default function AdminSchedule() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 5, 25));
  const [selectedStaff, setSelectedStaff] = useState<number[]>([1]);
  const events = initialEvents;

  // Filter events by selected staff
  const filteredEvents = events.filter((e) =>
    selectedStaff.includes(e.staffId)
  );

  const handleStaffChange = (id: number) => {
    setSelectedStaff((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    // In a real app, fetch events based on filters
  };

  // Custom event style
  const eventPropGetter = () => ({
    className: "bg-teal-400 text-white rounded shadow border-0 px-2 py-1",
    style: { border: "none" },
  });

  // Handler for slot click
  const handleSelectSlot = (slotInfo: any) => {
    alert("Clicked at " + slotInfo.start);
  };

  return (
    <div className="flex w-full h-[80vh] bg-[#faf9f6] overflow-hidden border-none">
      <aside className="w-72 bg-white p-4 flex flex-col gap-6 border-none">
        {/* Date Picker */}
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => date && setSelectedDate(date)}
            inline
            calendarClassName="!bg-white rounded-xl shadow"
            dayClassName={() => "!rounded-full"}
          />
        </div>
        {/* Staff Filter */}
        <div>
          <h3 className="font-semibold mb-2">Staff</h3>
          <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
            {staffList.map((staff) => (
              <label
                key={staff.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedStaff.includes(staff.id)}
                  onChange={() => handleStaffChange(staff.id)}
                  className="accent-teal-500 w-4 h-4 rounded"
                />
                <span className="text-sm">{staff.name}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Apply Button */}
        <button
          className="mt-auto bg-black text-white rounded-full py-2 font-semibold text-base hover:bg-teal-600 transition-colors"
          onClick={handleApply}
        >
          Apply
        </button>
      </aside>
      {/* Calendar */}
      <section className="flex-1 p-4 border-none bg-white">
        <BigCalendar
          localizer={localizer}
          events={filteredEvents}
          defaultView={Views.WEEK}
          views={[Views.WEEK]}
          step={60}
          timeslots={1}
          min={new Date(2025, 0, 6, 8, 0)}
          max={new Date(2025, 0, 6, 20, 0)}
          date={selectedDate}
          onNavigate={(date) => setSelectedDate(date)}
          style={{ height: "100%" }}
          eventPropGetter={eventPropGetter}
          toolbar={false}
          formats={{
            dayFormat: (date: Date, culture: string, localizer: any) =>
              localizer.format(date, "EEE dd", culture),
            timeGutterFormat: (date: Date) => format(date, "h a"),
          }}
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </section>
    </div>
  );
}
