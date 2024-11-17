/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function PasswordForm({
  onInput,
  placeholder,
  className,
  disabled,
  gridSpan,
  required,
  password,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative ${gridSpan}`}>
      <input
        name={name}
        value={password}
        className={`${className} rounded-md`}
        onInput={onInput}
        type={showPassword ? "text" : "password"}
        disabled={disabled ? true : false}
        placeholder={placeholder}
        required={required}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-2"
      >
        <FontAwesomeIcon
          className="text-gray-500"
          icon={showPassword ? faEye : faEyeSlash}
        />
      </button>
    </div>
  );
}
