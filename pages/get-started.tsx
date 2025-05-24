export default function GetStarted() {
  return (
    <main className="max-w-lg mx-auto py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Cursor Pilates Booking
      </h1>
      <p className="mb-8">
        Get started by registering or logging in to book your next class!
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/auth/register"
          className="bg-[#c18e4a] text-white rounded-xl px-8 py-3 font-semibold hover:bg-[#a97a3a] transition-colors"
        >
          Register
        </a>
        <a
          href="/auth/login"
          className="bg-white text-[#c18e4a] border border-[#c18e4a] rounded-xl px-8 py-3 font-semibold hover:bg-[#f5e6d6] transition-colors"
        >
          Login
        </a>
      </div>
    </main>
  );
}
