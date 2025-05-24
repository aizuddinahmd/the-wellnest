import { useEffect } from "react";
import { useRouter } from "next/router";
// import { supabase } from '../../lib/supabase' // Uncomment when using auth

export default function AdminDashboard() {
  // TODO: Protect this route with user session and role check
  // useEffect(() => {
  //   if (user.role !== 'admin') router.push('/')
  // }, [])

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Course Management</h2>
        {/* TODO: List, Create, Edit, Delete Courses */}
        <div className="border rounded p-4 bg-white mb-4">
          [Course List & Form]
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Slot Scheduler</h2>
        {/* TODO: Slot Scheduler Form */}
        <div className="border rounded p-4 bg-white mb-4">[Slot Scheduler]</div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Booking Overview</h2>
        {/* TODO: Booking Overview Table */}
        <div className="border rounded p-4 bg-white">[Booking Table]</div>
      </section>
    </main>
  );
}
