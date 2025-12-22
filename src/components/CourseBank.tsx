import AddCourseButton from "./AddCourseButton";

export default function CourseBank() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Course Bank Container */}
      <div className="flex justify-between"> {/* Div for Course Bank Header & Button */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Course Bank</h2>
        <AddCourseButton text="+ Add Course" />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500">Course bank table will go here</p>
      </div>
    </div>
  );
}