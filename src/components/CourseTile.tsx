import { useState } from "react";
import { Course} from "../types/Course";
import EditCourseModal from "./EditCourseModal";

interface CourseTileProps {
  course: Course;
  onEditCourse: (course: Course) => void;
}

export default function CourseTile({ course, onEditCourse }: CourseTileProps) {
  const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);

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
          <button onClick={() => setIsEditModalOpen(true)} className="border-2 border-gray-300 rounded text-sm px-2 h-6">E</button>
          <button className="border-2 border-violet-400 rounded text-sm px-2 h-6">B</button>
          <button className="border-2 border-orange-400 rounded text-sm px-2 h-6">D</button>
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