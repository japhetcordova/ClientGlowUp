const OutlinedNeumorphicButton = ({
  onClick,
  children,
  className = '',
  icon = null,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-2 px-4 rounded-xl font-bold 
                  bg-transparent border-2 border-[#bec3c9]
                  text-gray-700 
                  hover:bg-[#f4f6f9] active:bg-[#e8edf3]
                  transition duration-200
                  ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default OutlinedNeumorphicButton;
