interface AddCourseButtonProps {
  text: string;
  onClick: () => void; // doesn't return anything but function still passed to do an action
  size?: 'sm' | 'md';
}

export default function AddCourseButton({text, onClick: handleClick, size = 'md'}: AddCourseButtonProps) {
  const sizeClasses = {
    sm: 'px-2 h-6 text-sm',      // Small
    md: 'px-4 h-8 text-base',     // Medium (default)
  };
  return (
    <button onClick={handleClick} className={`bg-violet-400 text-white ${sizeClasses[size]} rounded hover:bg-violet-500`}>{text}</button>
  );
}