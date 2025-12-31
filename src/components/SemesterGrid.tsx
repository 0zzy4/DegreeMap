"use client";

import { useState } from "react";
import { Course } from "@/types/Course";
import Year from "./Year";


interface SemesterGridProps {
  courses: Course[];
  onAddCourse: (course: Course) => void;
  onEditCourse: (course: Course) => void;
}

export default function SemesterGrid({ courses, onAddCourse, onEditCourse }: SemesterGridProps) {

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
      <div className="flex justify-between"> {/* Div for Semester Grid Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
      </div>

      <div className="flex flex-col">
        <Year year="Year 1" courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} />
        <Year year="Year 2" courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} />
        <Year year="Year 3" courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} />
        <Year year="Year 4" courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} />
      </div>

    </div>
  );
}