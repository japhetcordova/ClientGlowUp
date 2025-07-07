const Card = ({ title, children }) => {
  return (
    <div className="bg-[#e0e5ec] p-5 rounded-2xl 
                    shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] 
                    text-gray-700">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default Card;
