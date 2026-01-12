import { Course } from "@/types/Course";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

interface DeleteCourseButtonProps {
  text: string;
  onClick: () => void;
}

export default function DeleteCourseButton({ text,onClick }: DeleteCourseButtonProps) {

  return (
    <button onClick={onClick} className="flex items-center gap-1 bg-rose-400 rounded text-white text-sm px-1 h-6 hover:bg-rose-500">
      <Trash2 size={16} /> {text}
    </button>
  );
}