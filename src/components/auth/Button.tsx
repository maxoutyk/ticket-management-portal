import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  icon,
}: ButtonProps) {
  const baseClasses = "relative flex justify-center items-center py-2.5 px-4 border rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "border-transparent text-white bg-incite-navy hover:bg-opacity-90 shadow-md hover:shadow-lg focus:ring-incite-navy",
    secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-incite-navy",
    outline: "border-incite-navy text-incite-navy bg-white hover:bg-incite-navy hover:bg-opacity-5 focus:ring-incite-navy",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon && <span className="absolute left-4">{icon}</span>}
      {children}
    </button>
  );
} 