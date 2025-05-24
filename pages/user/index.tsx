export default function UserDashboard() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Available Courses</h2>
        {/* TODO: List of Available Courses */}
        <div className="border rounded p-4 bg-white mb-4">[Courses List]</div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Calendar View</h2>
        {/* TODO: Calendar with available slots */}
        <div className="border rounded p-4 bg-white mb-4">
          [Calendar Component]
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Book a Class</h2>
        {/* TODO: Booking Button + Confirmation */}
        <div className="border rounded p-4 bg-white mb-4">[Booking Button]</div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
        {/* TODO: My Bookings List (cancel/reschedule) */}
        <div className="border rounded p-4 bg-white">[My Bookings]</div>
      </section>
    </main>
  );
}
