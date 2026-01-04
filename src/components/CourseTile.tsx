"use client";

import { useState } from "react";
import { Course} from "../types/Course";
import EditCourseModal from "./ui/EditCourseModal";

interface CourseTileProps {
  course: Course;
  onEditCourse: (course: Course) => void;
}

export default function CourseTile({ course, onEditCourse }: CourseTileProps) {
  const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);

  const backToBank = () => {
    const updatedCourse: Course = {
      ...course,
      location: "Bank"
    };
    onEditCourse(updatedCourse);
  };

  return (
    <div className="rounded-lg flex flex-row border border-gray-300 my-4 text-gray-800 text-center">
      <div className="rounded-l-lg w-4 bg-violet-400"></div>
      <div className="flex flex-col px-4 py-2 w-full">
        <div className="flex flex-row justify-between items-center text-sm my-2">
          <p className="text-gray-800">{course.courseCode}</p>
          <p className="text-gray-300">{course.courseName}</p>
          <p className="text-gray-800">{course.credits} hrs</p>
        </div>
        <div className="flex flex-row py-2 gap-2 text-left">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-gray-400 rounded text-white text-sm px-2 h-6 hover:bg-gray-500">E</button>
          <button
            onClick={backToBank}
            className="bg-violet-400 text-white rounded text-sm px-2 h-6 hover:bg-violet-500">B</button>
          <button
            className="bg-rose-400 rounded text-white text-sm px-2 h-6 hover:bg-rose-500">D</button>
        </div>
      </div>

      <EditCourseModal
        key={course?.id} // question mark for if course is null/undefined
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={onEditCourse}
        course={course}
      />

    </div>

  );
}