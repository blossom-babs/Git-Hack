import React from "react";

interface TitleProps {
  title?: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};
