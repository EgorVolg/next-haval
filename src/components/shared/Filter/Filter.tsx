"use client";
import Button from "@/components/UI/Button/Button";
import React, { useEffect } from "react";
 
const Filter = ({props}: {props: string[]}) => {
  return (
    <nav className="filter">
      {props.map((title) => (
        <Button key={title} title={title} />
      ))}
    </nav>
  );
};

export default Filter;