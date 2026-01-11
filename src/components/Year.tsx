import Semester from "./Semester";
import { useCourseStore } from "@/store/courseStore";

export default function Year({ year}: { year: string }) {

  const courses = useCourseStore((state) => state.courses);
  const currYearCourses = courses.filter((c) => c.location.startsWith(year));
  const yearCredits = currYearCourses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="border border-gray-300 rounded-lg mt-4"> {/* Year Container */}

      <div className="flex items-baseline gap-3 border-l border-t border-r bg-gray-200 rounded-t-lg px-4 py-2"> {/* Year Header */}
        <h2 className="font-bold text-gray-800">{year}</h2>
        <p className="text-gray-600">|</p>
        <p className="text-sm text-gray-600">{yearCredits} credits</p>
      </div>
      <div className="grid grid-cols-3">
        <Semester year={year} semester="Fall" />
        <Semester year={year} semester="Spring" />
        <Semester year={year} semester="Summer" />
      </div>

    </div>
  );
}