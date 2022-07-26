import React, { useState } from 'react';
import axios from 'axios';

interface FormProps {
	onSubmit?: any;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
	const [userInput, setUserInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const result = await axios.get(
				`https://api.github.com/users/${userInput}`
			);
			const repoResult = await axios.get(
				`https://api.github.com/users/${userInput}/repos`
			);

			onSubmit([result.data, repoResult.data]);

			setUserInput('');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input
					data-cy="formInput"
					className="form__item form__children"
					type="text"
					onChange={handleChange}
					placeholder="Find a Github user e.g blossom-babs"
					value={userInput}
				/>
				<button className="form__btn form__children">Search</button>
			</form>
		</div>
	);
};
