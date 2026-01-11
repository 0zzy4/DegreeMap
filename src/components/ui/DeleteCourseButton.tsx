import { Course } from "@/types/Course";

interface DeleteCourseButtonProps {
  text: string;
  onClick: () => void;
}

export default function DeleteCourseButton({ text,onClick }: DeleteCourseButtonProps) {

  return (
    <button onClick={onClick} className="bg-rose-400 rounded text-white text-sm px-2 h-6 hover:bg-rose-500">{text}</button>
  );
}