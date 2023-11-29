
const resetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-2 right-2">
      <i className="ph ph-x text-slate-500 absolute right-2 top-1"></i>
    </button>
  );
};

export default resetButton;