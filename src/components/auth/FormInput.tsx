import React from "react";

interface FormInputProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  maxLength?: number;
}

export function FormInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  error,
  icon,
  autoComplete,
  inputMode,
  maxLength,
}: FormInputProps) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-incite-red">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={name || id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          className={`${
            icon ? "pl-10" : "pl-4"
          } block w-full py-2.5 pr-4 border ${
            error
              ? "border-incite-red focus:border-incite-red focus:ring-incite-red"
              : "border-gray-300 focus:border-incite-navy focus:ring-incite-navy"
          } rounded-lg shadow-sm focus:outline-none focus:ring-1 transition-colors duration-200 text-sm`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-incite-red">{error}</p>}
    </div>
  );
} 