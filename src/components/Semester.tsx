"use client";

import { useState } from "react";
import AddCourseButton from "./ui/AddCourseButton";
import AddCourseModal from "./ui/AddCourseModal";
import { Course } from "@/types/Course";
import CourseTile from "./CourseTile";

interface SemesterProps {
  year: string
  semester: string;
  courses: Course[];
  onAddCourse: (course: Course) => void;
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
}

export default function Semester({year, semester, courses, onAddCourse, onEditCourse, onDeleteCourse}: SemesterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const semesterCourses = courses.filter((c) => c.location === `${year} - ${semester}`);

  return (
    <div className={`text-left px-4 ${semester === "Spring" ? "border-l border-r border-gray-300" : ""}`}>
      <div className="flex flex-row justify-between pt-4">
        <h2 className="text-gray-800">{semester}</h2>
        <AddCourseButton  onClick={() => setIsModalOpen(true)} text="+" size="sm" />
    </div>
    <p className="text-sm text-gray-300 pt-2">
      {semesterCourses.reduce((sum, c) => sum + c.credits, 0)} credits
    </p>

    {semesterCourses.length > 0 && semesterCourses.map((course) => (
      <CourseTile course={course} key={course.id} onEditCourse={onEditCourse} onDeleteCourse={onDeleteCourse} />
    ))}

    {semesterCourses.length === 0 && (
      <div className="rounded-lg border border-dashed border-gray-400 h-16 my-4 flex items-center justify-center">
        <p className="text-sm text-gray-400">No courses added yet.</p>
      </div>
    )}

    <AddCourseModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSave={onAddCourse}
      location={`${year} - ${semester}`}
    />
  </div>
  );
}