export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold text-center mb-8">
          DegreeMap
        </h1>

        {/* Course Bank will go here */}
        <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Course Bank Container */}
          <div className="flex justify-between"> {/* Div for Course Bank Header & Button */}
            <h2 className="text-gray-800 text-xl font-semibold mb-4">Course Bank</h2>
            <button className="bg-violet-400 text-white px-4 py-2 rounded hover:bg-violet-900">+ Add Course</button>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Course bank table will go here</p>
          </div>
        </div>

        {/* Semester grid will go here */}
        <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
          <div className="flex justify-between"> {/* Div for Semester Grid Header */}
            <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">Semester grid will go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
