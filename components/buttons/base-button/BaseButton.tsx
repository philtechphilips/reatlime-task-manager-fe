import React from "react";
import { BaseButtonProps } from "./BaseButton.types";

export default function BaseButton(props: BaseButtonProps) {
  const { fit, outlined, className, disabled, ...restProps } = props;

  const backgroundColor = disabled
    ? "#4253F0"
    : outlined
    ? "transparent"
    : "#4253F0";
  const textColor = outlined ? "#4253F0" : "white";
  const hasBoxShadow = backgroundColor === "#4253F0";


  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    boxShadow: hasBoxShadow ? "0px 1px 1px #4253F0" : "none"
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
