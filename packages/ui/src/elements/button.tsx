"use client";

import { ReactNode, memo } from "react";

type TButtonVariant = "flat" | "outline" | "text";
type TButtonColors = "black" | "white" | "primary";

const buttonCSS: { [k in TButtonVariant]: { [s in TButtonColors]: string } } = {
  text: {
    black: "bg-transparent border-transparent border border-solid hover:bg-primary-300 hover:border-primary-300 active:bg-primary-300 active:border-primary-300",
    white: "bg-white-100 border-white-100 border border-solid hover:bg-primary-300 hover:border-primary-300 active:bg-primary-300 active:border-primary-300",
    primary: "bg-transparent border-transparent border border-solid hover:bg-primary-300 hover:border-primary-300 active:bg-primary-300 active:border-primary-300",
  },
  flat: { 
    black: "bg-black-100 border-black-100 border border-solid hover:bg-primary-900 hover:border-primary-900 active:bg-primary-900 active:border-primary-900",
    white: "bg-white-100 border-white-100 border border-solid hover:bg-primary-300 hover:border-primary-300 active:bg-primary-300 active:border-primary-300",
    primary: "bg-primary border-primary border border-solid hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-600",
  }, 
  outline: {
    black: "bg-transparent border-black-100 border border-solid hover:bg-primary-600 hover:border-primary-600 active:bg-primary-600 active:border-primary-600",
    white: "bg-white-100 border-white-100 border border-solid hover:bg-primary-300 hover:border-primary-600 active:bg-primary-300 active:border-primary-300",
    primary: "bg-transparent border-primary border border-solid hover:bg-primary-300 hover:border-primary-600 active:bg-primary-300 active:border-primary-600",
  }
};

type TButtonProps = {
  variant?: TButtonVariant;
  width?: string;
  height?: string;
  color?: TButtonColors;
  justifyContent?: string;
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  cursor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  className?: string[];
  children?: ReactNode;
  onClick?: () => void;
}

const Button = memo(({
  variant = "text",
  width = "w-full", height = "h-12", color = "black",
  justifyContent = "justify-center", justifyItems = "justify-center",
  alignContent = "content-center", alignItems = "items-center",
  backgroundColor, borderRadius = "rounded-none", cursor = "cursor-pointer",
  borderColor, borderWidth,
  hoverBackgroundColor, activeBackgroundColor,
  children, className = [], onClick
}: TButtonProps) => {
  className.push(width);
  className.push(height);
  className.push(justifyContent);
  className.push(justifyItems);
  className.push(alignContent);
  className.push(alignItems);
  className.push(cursor);

  className.push(buttonCSS[variant][color]);

  className.push(borderRadius);
  if (backgroundColor) className.push(backgroundColor);
  if (borderColor) className.push(borderColor);
  if (borderWidth) className.push(borderWidth);
  if (hoverBackgroundColor) className.push(hoverBackgroundColor);
  if (activeBackgroundColor) className.push(activeBackgroundColor);
  return (
    <button
      className={`grid ${className?.join(" ")}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}, (p, n) => {
  if (p.children !== n.children) return false;
  return true;
});

Button.displayName = 'Button';

export default Button;