import React from "react";
import { renderToString } from "react-dom/server";

export const ChapterButton = ({ children, onClick }) => {
  return (
    <div className="chapter-button" onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};
