const NeumorphicTextField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 rounded-lg bg-[#e0e5ec] 
                   shadow-inner shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] 
                   text-sm focus:outline-none"
      />
    </div>
  );
};

export default NeumorphicTextField;
