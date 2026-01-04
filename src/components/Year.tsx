import Semester from "./Semester";

export default function Year({ year}: { year: string }) {
  return (
    <div className="border border-gray-300 rounded-lg mt-4"> {/* Year Container */}

      <div className="border-l border-t border-r bg-gray-200 rounded-t-lg px-4 py-2"> {/* Year Header */}
        <h2 className="font-bold text-gray-800">{year}</h2>
      </div>
      <div className="grid grid-cols-3">
        <Semester year={year} semester="Fall" />
        <Semester year={year} semester="Spring" />
        <Semester year={year} semester="Summer" />
      </div>

    </div>
  );
}