"use client";
import { useState } from "react";
import CourseBank from "@/components/CourseBank";
import SemesterGrid from "@/components/SemesterGrid";
import { Course } from "@/types/Course";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold text-center mb-8">
          DegreeMap
        </h1>
        <CourseBank courses={courses} onAddCourse={handleAddCourse} />
        <SemesterGrid courses={courses} onAddCourse={handleAddCourse} />
      </div>
    </div>
  );
}
