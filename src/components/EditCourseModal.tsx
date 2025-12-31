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
  const [courseCode, setCourseCode] = useState<string>(course.courseCode);
  const [courseName, setCourseName] = useState<string>(course.courseName);
  const [credits, setCredits] = useState<string>(course.credits.toString());
  const [type, setType] = useState<string>(course.type);
  const [location, setLocation] = useState<string>(course.location);

  // useEffect(() => {
  //   if (isOpen) {
  //     setCourseCode(course.courseCode);
  //     setCourseName(course.courseName);
  //     setCredits(course.credits.toString());
  //     setType(course.type);
  //     setLocation(course.location);
  //   }
  // }, [isOpen, course]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCourse: Course = {
      id: course.id,
      courseCode,
      courseName,
      credits: Number(credits),
      type,
      location,
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
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="e.g. CS 101"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Name</h2>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="e.g. Intro to Programming"
              className="text-gray-600 border border-gray-800 rounded px-4 py-2 placeholder:text-gray-300" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Credit Hours</h2>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Course Type</h2>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="text-gray-600 border border-gray-800 rounded px-4 py-2" />
          </div>

          <div className="flex flex-col mb-4">
            <h2 className="text-gray-800 font-semibold mb-2">Location</h2>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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