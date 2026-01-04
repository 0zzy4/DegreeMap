import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Course } from "../types/Course";

interface CourseStore {
  courses: Course[];
  addCourse: (newCourse: Course) => void;
  editCourse: (updatedCourse: Course) => void;
  deleteCourse: (courseId: string) => void;
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set) => ({
      courses: [],
      addCourse: (newCourse) =>
        set((state) => ({ courses: [...state.courses, newCourse] })),
      editCourse: (updatedCourse) =>
        set((state) => ({courses: state.courses.map(c => c.id === updatedCourse.id ? updatedCourse : c)})),
      deleteCourse: (courseId) =>
        set((state) => ({courses: state.courses.filter(c => c.id !== courseId)})), // if id doesn't match, keep it
    }),
    {
      name: "course-storage", // localStorage key
    }
  )
);