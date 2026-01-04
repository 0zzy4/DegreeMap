import Year from "./Year";

export default function SemesterGrid() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8"> {/* Semester Grid Container */}
      <div className="flex justify-between"> {/* Div for Semester Grid Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-4">Semesters</h2>
      </div>

      <div className="flex flex-col">
        <Year year="Year1" />
        <Year year="Year2" />
        <Year year="Year3" />
        <Year year="Year4" />
      </div>

    </div>
  );
}