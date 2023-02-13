import ctl from "@netlify/classnames-template-literals";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  variant?: keyof typeof variantStyle;
  // type?: "button" | "submit" | "reset" | undefined;
}

const baseStyle = ctl(`
  flex flex-row justify-center items-center px-[14px] py-[28px] gap-[10px] rounded-lg h-[52px]
`);

const variantStyle = {
  dark: `
    bg-blue-gray-800
    hover:bg-blue-gray-700
    font-semibold
  `,
  light: `
    bg-gray-50
    border-solid
    border-1
    border-white
    hover:bg-gray-200
    font-semibold
  `,
  darkShadow: `
    bg-blue-gray-800
    shadow-lg
    hover:bg-blue-gray-700
    font-semibold
  `,
  lightShadow: `
    bg-gray-50
    border-solid
    border-1
    border-white
    shadow-lg
    hover:bg-gray-200    
    font-semibold
  `,
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "dark",
  className = "",
  // type,
}) => {
  const buttonStyle = ctl(`
    ${className}
    ${baseStyle} 
    ${variantStyle[variant]}
  `);

  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
