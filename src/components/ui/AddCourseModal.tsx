"use client";

import { useState, useEffect, type FormEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Course } from "@/types/Course";
import { X } from "lucide-react";

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (course: Course) => void;
  location: string;
}

export default function AddCourseModal({ isOpen, onClose, onSave, location}: AddCourseModalProps) {
  const [courseCode, setCourseCode] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [credits, setCredits] = useState<string>("3");
  const [type, setType] = useState<string>("");

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse: Course = {
      id: uuidv4(),
      courseCode,
      courseName,
      credits: Number(credits),
      type,
      location,
    };

    onSave && onSave(newCourse); // passes newCourse to parent function (aka handleAddCourse)
    setCourseCode("");
    setCourseName("");
    setCredits("3");
    setType("");
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center p-4">

      <div className="bg-white rounded-lg max-w-md w-full p-6"> {/* Modal Container */}

        <div className="flex justify-between">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">Add Course</h2>
          <button className="border text-gray-800 rounded px-2 py-2 hover:bg-gray-200" onClick={onClose}><X /></button>
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

          <div className="modal-actions flex justify-between">
            <button className="border text-gray-800 rounded px-4 py-2 hover:bg-gray-200" type="button" onClick={onClose}>Cancel</button>
            <button className="border bg-violet-400 text-white rounded px-4 py-2 hover:bg-violet-500" type="submit">Add</button>
          </div>
        </form>

      </div>


    </div>
  );
}