import Year from "./Year";
import { useCourseStore } from "@/store/courseStore";

export default function SemesterGrid() {

  const courses = useCourseStore((state) => state.courses);
  const nonBankCourses = courses.filter((c) => c.location !== "Bank");
  const totalCredits = nonBankCourses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
      <div className="flex justify-between items-center"> {/* Div for Semester Grid Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
        <div className="text-gray-600">
          <span className="font-semibold">Total: </span>
          <span className="font-medium">{totalCredits} credits</span>
        </div>
      </div>

      <div className="flex flex-col">
        <Year year="Year 1" />
        <Year year="Year 2" />
        <Year year="Year 3" />
        <Year year="Year 4" />
      </div>

    </div>
  );
}