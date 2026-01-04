"use client";

import { useState } from "react";
import { Course} from "../types/Course";
import { useCourseStore } from "@/store/courseStore";
import EditCourseButton from "./ui/EditCourseButton";
import EditCourseModal from "./ui/EditCourseModal";
import BackToBankButton from "./ui/BackToBankButton";
import DeleteCourseButton from "./ui/DeleteCourseButton";

interface CourseTileProps {
  course: Course;
}

export default function CourseTile({ course }: CourseTileProps) {
  const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);

  const editCourse = useCourseStore((state) => state.editCourse);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);

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
          <EditCourseButton onClick={() => setIsEditModalOpen(true)} />
          <BackToBankButton course={course} onClick={editCourse} />
          <DeleteCourseButton onClick={() => deleteCourse(course.id)} />
        </div>
      </div>

      <EditCourseModal
        key={course?.id} // question mark for if course is null/undefined
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={editCourse}
        course={course}
      />

    </div>

  );
}