"use client";

import { useState } from "react";
import AddCourseButton from "./ui/AddCourseButton";
import AddCourseModal from "./ui/AddCourseModal";
import { Course } from "@/types/Course";

interface CourseBankProps {
  courses: Course[];
  onAddCourse: (course: Course) => void;
  onEditCourse: (course: Course) => void;
}

export default function CourseBank({ courses, onAddCourse, onEditCourse }: CourseBankProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bankCourses = courses.filter(c => c.location === 'Bank');

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Course Bank Container */}
      <div className="flex justify-between mb-4"> {/* Div for Course Bank Header & Button */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Course Bank</h2>
        <AddCourseButton onClick={() => setIsModalOpen(true)} text="+ Add Course" size="md" />
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
          {bankCourses.length > 0 && bankCourses.map((course) => (
            <tr key={course.id} className="border-b border-gray-200 hover:bg-gray-50 text-center">
              <td className="text-gray-800 py-3 px-4">{course.courseCode}</td>
              <td className="text-gray-800 py-3 px-4">{course.courseName}</td>
              <td className="text-gray-800 py-3 px-4">{course.credits}</td>
              <td className="text-gray-800 py-3 px-4">Edit & Delete Button Placeholders</td>
            </tr>
          ))}
        </tbody>
      </table>

      {bankCourses.length === 0 && (
        <div className="rounded-lg border border-dashed border-gray-400 h-16 my-4 flex items-center justify-center">
          <p className="text-sm text-gray-400">No courses in the bank yet.</p>
        </div>
      )}

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onAddCourse}
        location="Bank"
      />

    </div>

  );
}