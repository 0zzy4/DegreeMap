import AddCourseButton from "./AddCourseButton";

export default function SemesterGrid() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
      <div className="flex justify-between"> {/* Div for Semester Grid Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
      </div>

      <div className="flex flex-col">

        <div className="border border-gray-300 rounded-lg mt-4">

          <div className="border-l border-t border-r bg-gray-200 rounded-t-lg px-4 py-2">
            <h2 className="font-bold text-gray-800">Year 1</h2>
          </div>

          <div className="grid grid-cols-3">

            <div className="text-left px-4">
              <div className="flex flex-row justify-between pt-4">
                <h2 className="text-gray-800">Fall</h2>
                <AddCourseButton  onClick={() => {}} text="+" size="sm" />
              </div>
              <p className="text-sm text-gray-300 py-2">0 credits</p>
              <div className="rounded-lg flex flex-row border border-gray-300 my-4 text-gray-800 text-center">
                <div className="rounded-l-lg w-4 bg-violet-400"></div>
                <div className="flex flex-col px-4 py-2 w-full">
                  <div className="flex flex-row justify-between items-center text-sm my-2">
                    <p className="text-gray-800">ENGL 101</p>
                    <p className="text-gray-300">English Composition</p>
                    <p className="text-gray-800">3 hrs</p>
                  </div>
                  <div className="flex flex-row py-2 gap-2 text-left">
                    <button className="border-2 border-gray-300 rounded text-sm px-2 h-6">E</button>
                    <button className="border-2 border-violet-400 rounded text-sm px-2 h-6">B</button>
                    <button className="border-2 border-orange-400 rounded text-sm px-2 h-6">D</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left border-l border-r border-gray-300 px-4">
              <h2 className="text-gray-800 py-4">Spring</h2>
            </div>

            <div className="text-left px-4">
              <h2 className="text-gray-800 py-4">Summer</h2>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}