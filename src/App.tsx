import React, { useState } from "react";

// styles
import "./styles/app.scss";
// components
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { Data } from "./components/Data";
import { Title } from "./components/Title";
import { Header } from "./components/Header";

interface HomeComponent {}

export const App: React.FC<HomeComponent> = () => {
  const [profile, setProfile] = useState<{ [key: string]: any }>();
  const [repos, setRepos] = useState<{ [key: string]: any }>();

  const getUserData = (profileData: { [key: string]: any }) => {
    setProfile(profileData[0]);
    setRepos(profileData[1]);
  };

  const formatDate = (date: string) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateArr = date.substring(0, 10).split("-");

    let themonths = months[Number(dateArr[1]) - 1];

    return `${themonths} ${dateArr[2]}, ${dateArr[0]}`;
  };

  return (
    <>
      <Header />
      <Form onSubmit={getUserData} />
      {profile !== undefined ? (
        <Card
          bio={profile.bio}
          src={profile.avatar_url}
          followers={profile.followers}
          following={profile.following}
          username={profile.name}
          userlogin={profile.login}
          repos={profile.public_repos}
          created_at={formatDate(profile.created_at.toString())}
          location={profile.location}
        />
      ) : (
        <Title title="User Not Found" />
      )}
      {repos !== undefined && <h1 className="repos__name">Some Repos</h1>}

      <div className="data">
        {repos !== undefined &&
          repos
            .slice(1, 10)
            .map(
              (item: { [key: string]: any }) =>
                item.size > 10 && (
                  <Data
                    key={item.id}
                    name={item.name}
                    language={item.language}
                    desc={item.description}
                    fork={item.forks}
                    link={item.url}
                    stars={item.stargazers_count}
                    size={item.size}
                  />
                )
            )}{" "}
      </div>
    </>
  );
};

export default App;
