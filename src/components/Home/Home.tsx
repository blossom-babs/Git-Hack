import React from 'react'

interface HomeProps {
name:string;
}

export const Home: React.FC<HomeProps> = ({name}) => {
    return <h1>This is the home page</h1>;
}