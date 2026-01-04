"use client";

import { useState, useEffect } from "react";
import { Course } from "@/types/Course";

interface EditCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (course: Course) => void;
  course: Course;
}

export default function EditCourseModal({ isOpen, onClose, onSave, course}: EditCourseModalProps) {
  const [draftCourseCode, setDraftCourseCode] = useState<string>(course.courseCode);
  const [draftCourseName, setDraftCourseName] = useState<string>(course.courseName);
  const [draftCredits, setDraftCredits] = useState<string>(course.credits.toString());
  const [draftType, setDraftType] = useState<string>(course.type);
  const [draftLocation, setDraftLocation] = useState<string>(course.location);

  useEffect(() => {
    if (isOpen) {
      setDraftCourseCode(course.courseCode);
      setDraftCourseName(course.courseName);
      setDraftCredits(course.credits.toString());
      setDraftType(course.type);
      setDraftLocation(course.location);
    }
  }, [isOpen, course]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCourse: Course = {
      id: course.id,
      courseCode: draftCourseCode,
      courseName: draftCourseName,
      credits: Number(draftCredits),
      type: draftType,
      location: draftLocation,
    }

    onSave && onSave(updatedCourse); // passes updatedCourse to parent function
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center p-4">

      <div className="bg-white rounded-lg max-w-md w-full p-6"> {/* Modal Container */}

        <div className="flex justify-between">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">Edit Course</h2>
          <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" onClick={onClose}>X</button>
        </div>

        <form onSubmit={handleSave} className="flex flex-col mb-2">
          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Code</h2>
            <input
              type="text"
              value={draftCourseCode}
              onChange={(e) => setDraftCourseCode(e.target.value)}
              placeholder="e.g. CS 101"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Name</h2>
            <input
              type="text"
              value={draftCourseName}
              onChange={(e) => setDraftCourseName(e.target.value)}
              placeholder="e.g. Intro to Programming"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Credit Hours</h2>
            <input
              type="number"
              value={draftCredits}
              onChange={(e) => setDraftCredits(e.target.value)}
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Type</h2>
            <input
              type="text"
              value={draftType}
              onChange={(e) => setDraftType(e.target.value)}
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Location</h2>
            <select
              value={draftLocation}
              onChange={(e) => setDraftLocation(e.target.value)}
              className="text-gray-600 border border-gray-800 rounded px-4 py-2"
            >
              <option value="bank">Course Bank</option>

              <optgroup label="Year 1">
                <option value="Year 1 - Fall">Fall</option>
                <option value="Year 1 - Spring">Spring</option>
                <option value="Year 1 - Summer">Summer</option>
              </optgroup>

              <optgroup label="Year 2">
                <option value="Year 2 - Fall">Fall</option>
                <option value="Year 2 - Spring">Spring</option>
                <option value="Year 2 - Summer">Summer</option>
              </optgroup>

              <optgroup label="Year 3">
                <option value="Year 3 - Fall">Fall</option>
                <option value="Year 3 - Spring">Spring</option>
                <option value="Year 3 - Summer">Summer</option>
              </optgroup>

              <optgroup label="Year 4">
                <option value="Year 4 - Fall">Fall</option>
                <option value="Year 4 - Spring">Spring</option>
                <option value="Year 4 - Summer">Summer</option>
              </optgroup>
            </select>
          </div>

          <div className="modal-actions flex justify-between">
            <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" type="button" onClick={onClose}>Cancel</button>
            <button className="border bg-violet-400 text-white rounded px-4 py-2 hover:bg-violet-500" type="submit">Save</button>
          </div>
        </form>

      </div>


    </div>
  );
}