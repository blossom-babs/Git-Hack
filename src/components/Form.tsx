import React, { useState } from "react";
import axios from "axios";

interface FormProps {
  onSubmit?: any;
  // onSubmitRepos?: any;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState("");
  // const [repoInput, setRepoInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await axios.get(`https://api.github.com/users/${userInput}`);
    const repoResult = await axios.get(
      `https://api.github.com/users/${userInput}/repos`
    );
    onSubmit([result.data, repoResult.data]);
    //onSubmit(repoResult.data);
    setUserInput("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form__item form__children"
          type="text"
          onChange={handleChange}
          placeholder="Find a Github user"
          value={userInput}
        />
        <button className="form__btn form__children">Search</button>
      </form>
    </div>
  );
};
