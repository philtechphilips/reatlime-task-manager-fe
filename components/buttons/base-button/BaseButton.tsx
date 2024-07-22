import React from "react";
import { BaseButtonProps } from "./BaseButton.types";

export default function BaseButton(props: BaseButtonProps) {
  const { fit, outlined, className, disabled, ...restProps } = props;

  const backgroundColor = disabled
    ? "#BDBDBD"
    : outlined
    ? "transparent"
    : "#239FAC";
  const textColor = outlined ? "#239FAC" : "white";
  const hasBoxShadow = backgroundColor === "#239FAC";


  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    boxShadow: hasBoxShadow ? "-1px 3px 22px rgba(84, 196, 208, 0.46)" : "none"
  };

  return (
    <button
      {...restProps}
      className={`flex items-center justify-center gap-5 py-[14px] rounded-lg text-sm font-bold
      ${fit ? "w-[241px]" : "w-full"}
     ${outlined ? "border" : ""} ${className}`}
      style={buttonStyle}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}
