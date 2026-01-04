import { Course } from "@/types/Course";

interface EditCourseButtonProps {
  onClick: () => void;
}

export default function EditCourseButton({ onClick }: EditCourseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 rounded text-white text-sm px-2 h-6 hover:bg-gray-500">E</button>
  );
}