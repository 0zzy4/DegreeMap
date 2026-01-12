import { Plus } from "lucide-react";

interface AddCourseButtonProps {
  text: string;
  onClick: () => void; // doesn't return anything but function still passed to do an action
  size?: 'sm' | 'md';
}

export default function AddCourseButton({text, onClick, size = 'md'}: AddCourseButtonProps) {
  const sizeClasses = {
    sm: 'px-1 h-6 text-sm',      // Small
    md: 'px-3 h-8 text-base',     // Medium (default)
  };
  return (
    <button onClick={onClick} className={`flex items-center gap-1 bg-violet-400 text-white ${sizeClasses[size]} rounded hover:bg-violet-500`}>
      <Plus size={16} /> {text}
    </button>
  );
}