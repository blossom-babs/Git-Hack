import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="header">
        <GitHubIcon className="header__icon" />
        <h1 className="header__title">GitHack</h1>
      </div>
    </header>
  );
};
