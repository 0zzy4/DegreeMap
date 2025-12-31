import { Course } from "@/types/Course";
import Semester from "./Semester";

interface YearProps {
  year: string
  courses: Course[];
  onAddCourse: (course: Course) => void;
  onEditCourse: (course: Course) => void;
}

export default function Year({ year, courses, onAddCourse, onEditCourse }: YearProps) {
  return (
    <div className="border border-gray-300 rounded-lg mt-4"> {/* Year Container */}

      <div className="border-l border-t border-r bg-gray-200 rounded-t-lg px-4 py-2"> {/* Year Header */}
        <h2 className="font-bold text-gray-800">{year}</h2>
      </div>
      <div className="grid grid-cols-3">
        <Semester year={year} courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} semester="Fall" />
        <Semester year={year} courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} semester="Spring" />
        <Semester year={year} courses={courses} onAddCourse={onAddCourse} onEditCourse={onEditCourse} semester="Summer" />
      </div>

    </div>
  );
}