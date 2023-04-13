import axios from 'axios';
import { useEffect, useState } from 'react';

const Quote = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.quotable.io/random')
			.then((response) => {
				console.log(response.data);
				setQuotes(response.data);
			})
			.catch((error) => console.error(error));
	}, []);

	const { content, author } = quotes;
	console.log(quotes);
	return (
		<div>{quotes.length > 0 ? <QuoteCard content={content} author={author}/> : <h1>Loading...</h1>}</div>
	);
};

export const QuoteCard = ({content, author}) => {
	return (
		<div>
			<h1>{content}</h1>
			<p>{author}</p>
		</div>
	);
};
export default Quote;
