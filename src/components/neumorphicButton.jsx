const NeumorphicButton = ({
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
                  bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] 
                  hover:brightness-95 active:brightness-90 transition
                  ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default NeumorphicButton;
