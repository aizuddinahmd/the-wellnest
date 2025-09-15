"use client";
import Image from "next/image";
import { useState } from "react";

// TypeScript interfaces
interface Course {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  duration: number;
  level: string;
  description: string;
}

interface Tab {
  label: string;
  value: string;
}

interface ListofCoursesProps {
  courses: Course[];
  title?: string;
  tabs?: Tab[];
  showFilters?: boolean;
}

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

// Default tabs
const defaultTabs = [
  { label: "All", value: "all" },
  { label: "Group Classes", value: "group" },
  { label: "Private Classes", value: "private" },
];

export default function ListofCourses({
  courses,
  title = "Classes",
  tabs = defaultTabs,
  showFilters = true,
}: ListofCoursesProps) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="flex flex-col gap-12 bg-[#d2d8be] w-7xl">
      <h1 className="text-4xl font-bold">{title}</h1>
      {/* Filter Bar */}
      {showFilters && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 rounded-3xl bg-[#d2d8be]">
          <div className="flex gap-6 text-lg font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex flex-col items-center focus:outline-none transition-colors ${
                  activeTab === tab.value
                    ? "text-dark-green font-bold"
                    : "text-gray-500"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`h-1 mt-1 rounded w-6 transition-all duration-200 ${
                    activeTab === tab.value ? "bg-dark-green" : "bg-transparent"
                  }`}
                ></span>
              </button>
            ))}
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
      )}
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
