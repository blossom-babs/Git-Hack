import React from 'react'

interface HeaderProps {
  name:string
}

export const Header: React.FC<HeaderProps> = ({name}) => {
    return <h1>Lmao Lord help me. With you, I know I got this. Your princess, <span>{name}</span></h1>;
}