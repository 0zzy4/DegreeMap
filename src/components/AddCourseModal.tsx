"use client";

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCourseModal({ isOpen, onClose}: AddCourseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center p-4">

      <div className="bg-white rounded-lg max-w-md w-full p-6"> {/* Modal Container */}

        <div className="flex justify-between">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">Add Course</h2>
          <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" onClick={onClose}>X</button>
        </div>

        <div className="flex flex-col mb-2">
          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Code</h2>
            <input
              type="text"
              placeholder="e.g. CS 101"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Name</h2>
            <input
              type="text"
              placeholder="e.g. Intro to Programming"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Credit Hours</h2>
            <input
              type="number"
              defaultValue="3"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Type</h2>
            <input
              type="text"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>
        </div>

        <div className="modal-actions flex justify-between">
          <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" onClick={onClose}>Cancel</button>
          <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" onClick={onClose}>Save</button>
        </div>

      </div>


    </div>
  );
}