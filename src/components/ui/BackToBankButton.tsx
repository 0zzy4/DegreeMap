import { Course } from "@/types/Course";

interface BackToBankButtonProps {
  course: Course;
  onClick: (course: Course) => void; // passing the updated course back to parent component
}

export default function BackToBankButton({ course, onClick }: BackToBankButtonProps) {
  const backToBank = () => {
    const updatedCourse: Course = {
      ...course,
      location: "Bank"
    };
    onClick(updatedCourse);
  };

  return (
    <button
      onClick={backToBank}
      className="bg-violet-400 text-white rounded text-sm px-2 h-6 hover:bg-violet-500">B</button>
  );
}