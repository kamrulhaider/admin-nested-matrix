/* eslint-disable react/prop-types */

export default function Input({
  label,
  required,
  type,
  placeholder,
  value,
  onInput,
  className,
  name,
}) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block font-medium mb-1">
        {label}
        <span className="text-red-600">{required}</span>
      </label>
      <div
        className={`relative w-full p-2 border border-gray-300 rounded focus-within:border-blue-500`}
      >
        <input
          name={name}
          required={required}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onInput={onInput}
          className={`w-full h-full block outline-none`}
        />
      </div>
    </div>
  );
}
