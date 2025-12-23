"use client";

import { useState } from "react";
import AddCourseButton from "./AddCourseButton";
import AddCourseModal from "./AddCourseModal";
import { Course } from "@/types/Course";

export default function CourseBank() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [courses, setCourses] = useState<Course[]>([]);

  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Course Bank Container */}
      <div className="flex justify-between mb-4"> {/* Div for Course Bank Header & Button */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Course Bank</h2>
        <AddCourseButton onClick={() => setIsModalOpen(true)} text="+ Add Course" />
      </div>

      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-center text-gray-800 px-4 py-3">Course Code</th>
            <th className="text-center text-gray-800 px-4 py-3">Course Name</th>
            <th className="text-center text-gray-800 px-4 py-3">Credit Hours</th>
            <th className="text-center text-gray-800 px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50 text-center">
              <td className="text-gray-800 py-3 px-4">{course.courseCode}</td>
              <td className="text-gray-800 py-3 px-4">{course.courseName}</td>
              <td className="text-gray-800 py-3 px-4">{course.credits}</td>
              <td className="text-gray-800 py-3 px-4">Edit & Delete Button Placeholders</td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCourse}
      />

    </div>

  );
}