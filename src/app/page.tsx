import CourseBank from "@/components/CourseBank";
import SemesterGrid from "@/components/SemesterGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold text-center mb-8">
          DegreeMap
        </h1>
        <CourseBank />
        <SemesterGrid />
      </div>
    </div>
  );
}
