import { format } from "date-fns";

const todayStr = format(new Date(), "yyyy-MM-dd");

const mockCourses = [
  {
    id: 1,
    time: "8:00am",
    duration: 55,
    title: "Reformer Flow",
    instructor: "Mila Anisa",
    location: "Bumi Studio Jakarta",
    studio: "Studio 2",
    slots: "3 / 6 left",
    status: "bookable",
    date: todayStr,
  },
  {
    id: 2,
    time: "9:00am",
    duration: 55,
    title: "Arms, Booty, Core",
    instructor: "Mila Anisa",
    location: "Bumi Studio Jakarta",
    studio: "Studio 2",
    slots: "Waitlist Not Available",
    status: "waitlist",
    date: todayStr,
  },
  {
    id: 3,
    time: "10:00am",
    duration: 55,
    title: "Reformer Flow",
    instructor: "Siska Djo",
    location: "Bumi Studio Jakarta",
    studio: "Studio 2",
    slots: "6 / 6 left",
    status: "bookable",
    date: todayStr,
  },
];

const filters = [
  { label: "All categories", value: "all" },
  { label: "Location", value: "location" },
  { label: "Classes", value: "classes" },
  { label: "Instructor", value: "instructor" },
  { label: "Level of difficulty", value: "difficulty" },
];

export default function BookingList({ selectedDate }: { selectedDate: Date }) {
  const dateStr = format(selectedDate, "yyyy-MM-dd");
  const courses = mockCourses.filter((c) => c.date === dateStr);
  return (
    <>
      {/* <div className="flex-1 flex  w-full flex-wrap items-center gap-4 justify-end">
        {filters.map((f) => (
          <select
            key={f.value}
            className="rounded-xl px-4 py-2 bg-white shadow text-base"
          >
            <option>{f.label}</option>
          </select>
        ))}
      </div> */}
      <div className=" w-full">
        <h2 className="text-xl font-semibold mb-4">
          {courses.length === 0
            ? `No classes for ${format(selectedDate, "EEE, dd MMM")}`
            : `Classes for ${format(selectedDate, "EEE, dd MMM")}`}
        </h2>
        <div className="flex flex-col gap-6">
          {courses.length === 0 && (
            <div className="text-gray-500">
              No classes scheduled for this day.
            </div>
          )}
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                <div className="text-lg font-bold">{course.time}</div>
                <div className="text-gray-500 text-sm">
                  {course.duration} mins
                </div>
                <div>
                  <div className="font-semibold">
                    {course.title}{" "}
                    <span className="ml-1 text-gray-400" title="Info">
                      ℹ️
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {course.instructor}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">{course.location}</div>
                  <div className="text-gray-500 text-sm">{course.studio}</div>
                </div>
                <div className="font-semibold text-gray-700">
                  {course.slots}
                </div>
              </div>
              <div>
                {course.status === "bookable" ? (
                  <button className="bg-black text-white rounded-full px-8 py-2 font-medium hover:bg-gray-800 transition-colors">
                    Book Now
                  </button>
                ) : (
                  <span className="bg-gray-200 text-gray-500 rounded-full px-6 py-2 font-medium">
                    Waitlist Not Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
