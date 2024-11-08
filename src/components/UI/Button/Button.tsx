"use client"
import React from "react";
import "./Button.scss";

function Button({ title }: { title: string }) {
  return <button onClick={() => console.log(title)} className="button">{title}</button>;
}

export default Button;