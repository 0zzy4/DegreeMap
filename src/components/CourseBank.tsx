"use client";

import { useState } from "react";
import { Course } from "@/types/Course";
import { useCourseStore } from "@/store/courseStore";
import AddCourseButton from "./ui/AddCourseButton";
import AddCourseModal from "./ui/AddCourseModal";
import EditCourseButton from "./ui/EditCourseButton";
import EditCourseModal from "./ui/EditCourseModal";
import DeleteCourseButton from "./ui/DeleteCourseButton";

export default function CourseBank() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null); // one state - course = being edited; null = closed

  const courses = useCourseStore((state) => state.courses);
  const addCourse = useCourseStore((state) => state.addCourse);
  const editCourse = useCourseStore((state) => state.editCourse);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);

  const bankCourses = courses.filter(c => c.location === 'Bank');

  console.log("Rendering courses array:", courses);

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
              <td>
                <div className="flex items-center justify-center gap-2">
                  <EditCourseButton onClick={() => setEditingCourse(course)} />
                  <DeleteCourseButton onClick={() => deleteCourse(course.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bankCourses.length === 0 && (
        <div className="rounded-lg border border-dashed border-gray-400 h-16 my-4 flex items-center justify-center">
          <p className="text-center text-sm text-gray-400">No courses in the bank yet</p>
        </div>
      )}

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addCourse}
        location="Bank"
      />

      {editingCourse &&
        <EditCourseModal
          key={editingCourse.id}
          isOpen={true} // always true when rendered (because of {editingCourse && ...})
          onClose={() => setEditingCourse(null)}
          onSave={editCourse} // onSave in EditCourseModal also calls onClose(), so don't need to call it here
          course={editingCourse}
        />
      }

    </div>

  );
}