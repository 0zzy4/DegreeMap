"use client";

import { useState } from "react";
import AddCourseButton from "./AddCourseButton";
import AddCourseModal from "./AddCourseModal";
import { Course } from "@/types/Course";
import CourseTile from "./CourseTile";

interface SemesterGridProps {
  courses: Course[];
  onAddCourse: (course: Course) => void;
}

export default function SemesterGrid({ courses, onAddCourse }: SemesterGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("");

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
      <div className="flex justify-between"> {/* Div for Semester Grid Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
      </div>

      <div className="flex flex-col">

        <div className="border border-gray-300 rounded-lg mt-4">

          <div className="border-l border-t border-r bg-gray-200 rounded-t-lg px-4 py-2">
            <h2 className="font-bold text-gray-800">Year 1</h2>
          </div>

          <div className="grid grid-cols-3">

            <div className="text-left px-4">
              <div className="flex flex-row justify-between pt-4">
                <h2 className="text-gray-800">Fall</h2>
                <AddCourseButton  onClick={() => setIsModalOpen(true)} text="+" size="sm" />
              </div>
              <p className="text-sm text-gray-300 py-2">
                {courses.reduce((sum, c) => sum + c.credits, 0)} credits
              </p>
              {courses.map((course) => (
                <CourseTile course={course} key={course.id} />
              ))}
            </div>

            <div className="text-left border-l border-r border-gray-300 px-4">
              <h2 className="text-gray-800 py-4">Spring</h2>
            </div>

            <div className="text-left px-4">
              <h2 className="text-gray-800 py-4">Summer</h2>
            </div>

          </div>

        </div>

      </div>

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={onAddCourse}
        location={selectedSemester}
      />

    </div>
  );
}