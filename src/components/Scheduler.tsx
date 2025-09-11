import { useState, useEffect } from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale/en-US";
// import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import DrawerSchedule from "./DrawerSchedule";
import { eventService } from "@/app/services/eventService";
import { Event } from "@/app/types/event";
import CustomCalendar from "./CustomCalendar";

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

// const initialEvents = [
//   {
//     id: 1,
//     title: "(No class)",
//     start: new Date(2025, 5, 25, 9, 0),
//     end: new Date(2025, 5, 25, 10, 0),
//     staffId: 1,
//   },
// ];

export default function Scheduler() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedStaff, setSelectedStaff] = useState<number[]>([1]);
  const [events, setEvents] = useState<Event[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch events from Supabase
  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const fetchedEvents = await eventService.getEvents();
      console.log("Fetched events:", fetchedEvents); // Debug log
      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Transform database events to calendar format
  const calendarEvents = events.map((event: Event) => {
    console.log("Processing event:", event); // Debug log
    return {
      id: event.id,
      title: event.title,
      start: new Date(event.start_time),
      end: new Date(event.end_time),
      instructor: event.instructor,
      classPax: event.class_pax,
      waitlist: event.waitlist,
      color: event.color || "#00bfae",
      repeat: event.repeat,
      repeatDays: event.repeat_days,
    };
  });

  console.log("Calendar events:", calendarEvents); // Debug log

  // Filter events by selected staff
  // const filteredEvents = events.filter((e) =>
  //   selectedStaff.includes(e.staffId)
  // );

  const handleStaffChange = (id: number) => {
    setSelectedStaff((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    // In a real app, fetch events based on filters
  };

  // Custom event style
  const eventPropGetter = (event: Event) => ({
    className: "text-white rounded shadow border-0 px-2 py-1",
    style: {
      backgroundColor: event.color || "#00bfae",
      border: "none",
    },
  });

  // Handler for slot click
  const handleSelectSlot = () => {
    setDrawerOpen(true);
  };

  // Handler to add a new event
  const handleSaveEvent = (eventDetails: Event) => {
    setEvents((prev) => [...prev, eventDetails]);
    setDrawerOpen(false);
  };

  // Example: mark 6th, 11th, 18th, 23rd as event days
  const eventDates = [
    new Date(2020, 5, 6),
    new Date(2020, 5, 11),
    new Date(2020, 5, 18),
    new Date(2020, 5, 23),
  ];

  return (
    <div className=" w-full h-full bg-gray-200 overflow-hidden border-none grid grid-cols-3 gap-4">
      <section className="flex-1 p-2 border-none bg-white col-span-2 rounded-2xl shadow-lg">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <BigCalendar
            localizer={localizer}
            events={calendarEvents}
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
            className="hover:cursor-pointer"
          />
        )}
      </section>
      <div className="flex w-full h-full bg-white rounded-2xl shadow-lg border-none justify-center items-start col-span-1">
        <aside className="w-full p-2 flex flex-col gap-6 border-none justify-center items-center ">
          {/* Date Picker */}
          <CustomCalendar
            selectedDate={selectedDate}
            onChange={setSelectedDate}
            eventDates={eventDates}
          />

          {/* <DatePicker
              selected={selectedDate}
              onChange={(date) => date && setSelectedDate(date)}
              inline
              calendarClassName="!bg-white rounded-xl shadow"
              dayClassName={() => "!rounded-full"}
            /> */}

          {/* Staff Filter */}
          {/* <div>
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
          </div> */}
          {/* Apply Button */}
          <button
            className="mt-auto w-full bg-black text-white rounded-full py-2 font-semibold text-base hover:bg-teal-600 transition-colors"
            onClick={handleApply}
          >
            Apply
          </button>
        </aside>
        {/* Calendar */}
      </div>
      <DrawerSchedule
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSave={handleSaveEvent}
      />
    </div>
  );
}
