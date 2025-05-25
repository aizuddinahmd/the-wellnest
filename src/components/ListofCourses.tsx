import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Reformer Flow",
    image: "/courses/reformer-flow.jpg",
    rating: 4.5,
    reviews: 28,
    duration: 55,
    level: "Open to all",
    description:
      "New to Pilates? Let's get down to the nitty-gritty. Learn the basics through controlled and precise movements. Contact...",
  },
  {
    id: 2,
    title: "Strengthen, Lengthen, Tone",
    image: "/courses/strengthen-lengthen-tone.jpg",
    rating: 5,
    reviews: 16,
    duration: 55,
    level: "Open to all",
    description:
      "Created for those who love a higher intensity workout. This full body class will work all your muscles...",
  },
  {
    id: 3,
    title: "Arms, Booty, Core",
    image: "/courses/arms-booty-core.jpg",
    rating: 5,
    reviews: 16,
    duration: 55,
    level: "Open to all",
    description:
      "This all level class is aimed to help you to progress in your Pilates journey. Classes will offer...",
  },
  {
    id: 4,
    title: "Reformer Flow",
    image: "/courses/reformer-flow.jpg",
    rating: 4.5,
    reviews: 28,
    duration: 55,
    level: "Open to all",
    description:
      "New to Pilates? Let's get down to the nitty-gritty. Learn the basics through controlled and precise movements. Contact...",
  },
  {
    id: 5,
    title: "Strengthen, Lengthen, Tone",
    image: "/courses/strengthen-lengthen-tone.jpg",
    rating: 5,
    reviews: 16,
    duration: 55,
    level: "Open to all",
    description:
      "Created for those who love a higher intensity workout. This full body class will work all your muscles...",
  },
  {
    id: 6,
    title: "Arms, Booty, Core",
    image: "/courses/arms-booty-core.jpg",
    rating: 5,
    reviews: 16,
    duration: 55,
    level: "Open to all",
    description:
      "This all level class is aimed to help you to progress in your Pilates journey. Classes will offer...",
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </span>
  );
}

export default function ListofCourses() {
  return (
    <section className="flex flex-col gap-12 bg-[#fef9f6] w-7xl">
      <h1 className="text-4xl font-bold">Classes</h1>
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 rounded-3xl bg-[#fef9f6]">
        <div className="flex gap-6 text-lg font-medium">
          <button className="border-b-2 border-black pb-1">All</button>
          <button className="text-gray-500 hover:text-black">
            Group Classes
          </button>
          <button className="text-gray-500 hover:text-black">
            Private Classes
          </button>
        </div>
        <div className="flex gap-4">
          <select className="rounded-xl px-4 py-2 bg-white shadow text-base">
            <option>All class types</option>
          </select>
          <select className="rounded-xl px-4 py-2 bg-white shadow text-base">
            <option>All sub categories</option>
          </select>
          <select className="rounded-xl px-4 py-2 bg-white shadow text-base">
            <option>All difficulty levels</option>
          </select>
        </div>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#f5e8da] rounded-2xl shadow p-4 flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
            <h2 className="text-xl font-extrabold mb-2">{course.title}</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 text-lg">
                <StarRating rating={course.rating} />
              </span>
              <span className="border border-gray-400 rounded-full px-3 py-1 text-sm font-medium bg-white">
                {course.reviews} Reviews
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-black/80 mb-2">
              <span>⏱ {course.duration} mins</span>
              <span>📊 {course.level}</span>
            </div>
            <p className="text-black/80 text-base mb-4">{course.description}</p>
            <button className="bg-black text-white rounded-full px-8 py-3 font-medium w-fit hover:bg-gray-800 transition-colors">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
