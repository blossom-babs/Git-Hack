import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

interface CardProps {
	src?: string;
	username?: string;
	userlogin?: string;
	bio?: string;
	followers?: number;
	following?: number;
	repos?: number;
	created_at?: string;
	location?: string;
}

export const Card: React.FC<CardProps> = ({
	src,
	username,
	userlogin,
	followers,
	following,
	bio,
	repos,
	created_at,
	location
}) => {
	return (
		<div className="card">
			<img data-cy='userAvatar' className="card__avatar" src={src} alt={username} />
			<h1 className="card__name card__children">{username}</h1>
			<p data-cy="userLogin" className="card__login card__children">@{userlogin}</p>
			<p className="card__bio card__children">{bio}</p>
			<div className="card__flex">
				<div>
					<LocationOnIcon />
					<span className="card__flex--content">{location}</span>
				</div>
				<div>
					<CalendarTodayIcon />
					<span className="card__flex--content">{created_at}</span>
				</div>
			</div>
			<div className="flex card__details">
				<div>
					{followers}
					<span className="card__details--content"></span>followers
				</div>
				<div>
					{following} <span className="card__details--content"></span>following
				</div>
				<div>
					{repos} <span className="card__details--content"></span>repositories
				</div>
			</div>
		</div>
	);
};
