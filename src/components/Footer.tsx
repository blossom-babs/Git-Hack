import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <p className="footer">
        built with <a href="https://reactjs.org/">reactjs</a> .{" "}
        <a href="https://www.typescriptlang.org/typescript">typescript</a> .
        <a href="https://docs.github.com/en/rest">github-api</a> .{" "}
        <a href="https://sass-lang.com/">scss</a> .
        <a href="https://material-ui.com/">material-UI-icon</a>
      </p>
    </footer>
  );
};
