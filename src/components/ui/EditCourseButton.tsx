import { Course } from "@/types/Course";
import { Pencil } from "lucide-react";

interface EditCourseButtonProps {
  onClick: () => void;
}

export default function EditCourseButton({ onClick }: EditCourseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 rounded text-white text-sm px-1 h-6 hover:bg-gray-500">
      <Pencil size={16} />
      </button>
  );
}