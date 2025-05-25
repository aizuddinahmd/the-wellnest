import { format } from "date-fns";

const todayStr = format(new Date(), "yyyy-MM-dd");

const mockCourses = [
  {
    id: 1,
    time: "8:00am",
    duration: 55,
    title: "Reformer Flow",
    instructor: "Mila Anisa",
    level: "Beginner",
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
    level: "Beginner",
    slots: "-",
    status: "waitlist",
    date: todayStr,
  },
  {
    id: 3,
    time: "10:00am",
    duration: 55,
    title: "Reformer Flow",
    instructor: "Siska Djo",
    level: "Beginner",
    slots: "6 / 6 left",
    status: "bookable",
    date: todayStr,
  },
];

export default function BookingList({ selectedDate }: { selectedDate: Date }) {
  const dateStr = format(selectedDate, "yyyy-MM-dd");
  const courses = mockCourses.filter((c) => c.date === dateStr);
  return (
    <>
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
              <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 ">
                <div className="flex flex-col min-w-24 gap-1">
                  <div className="font-semibold">{course.time}</div>
                  <div className="text-gray-500 text-sm">
                    {course.duration} mins
                  </div>
                </div>
                <div className="flex flex-col gap-1 min-w-56 ml-12">
                  <div className="font-semibold">{course.title} </div>
                  <div className="text-gray-500 text-sm">
                    {course.instructor}
                  </div>
                </div>
                <div>
                  {/* <div className="font-semibold">{course.level}</div> */}
                  <div className="text-gray-500 text-sm">{course.level}</div>
                </div>
                <div className="font-semibold text-gray-700 ml-12">
                  {course.slots}
                </div>
              </div>
              <div className="">
                {course.status === "bookable" ? (
                  <button className="bg-[#99b9a5] text-white rounded-full px-8 py-2 font-medium hover:bg-[#355c4a] transition-colors hover:cursor-pointer">
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
