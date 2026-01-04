"use client";
import { useState } from "react";
import CourseBank from "@/components/CourseBank";
import SemesterGrid from "@/components/SemesterGrid";
import { Course } from "@/types/Course";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  console.log("Current courses:", courses)

  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  const handleEditCourse = (updatedCourse: Course) => {
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
  }

  const handleDeleteCourse = (courseId: string) => {
    setCourses(courses.filter(c => c.id !== courseId)); // if id doesn't match, keep it
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold text-center mb-8">
          DegreeMap
        </h1>
        <CourseBank courses={courses} onAddCourse={handleAddCourse} onEditCourse={handleEditCourse} onDeleteCourse={handleDeleteCourse} />
        <SemesterGrid courses={courses} onAddCourse={handleAddCourse} onEditCourse={handleEditCourse} onDeleteCourse={handleDeleteCourse} />
      </div>
    </div>
  );
}
