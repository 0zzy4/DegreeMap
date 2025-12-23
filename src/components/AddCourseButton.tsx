interface AddCourseButtonProps {
  text: string;
  onClick: () => void; // doesn't return anything but function still passed to do an action
}

export default function AddCourseButton({text, onClick: handleClick}: AddCourseButtonProps) {
  return (
    <button onClick={handleClick} className="bg-violet-400 text-white px-4 py-2 rounded hover:bg-violet-500">{text}</button>
  );
}