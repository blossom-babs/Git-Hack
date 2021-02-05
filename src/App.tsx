import React, { useState } from "react";

// styles
import "./styles/app.scss";
// components
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { Data } from "./components/Data";
import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface HomeComponent {}

export const App: React.FC<HomeComponent> = () => {
  const [profile, setProfile] = useState<{ [key: string]: any }>();
  const [repos, setRepos] = useState<{ [key: string]: any }>();

  const getUserData = (profileData: { [key: string]: any }) => {
    setProfile(profileData[0]);
    setRepos(profileData[1]);
    //console.log(profileData[1]);
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
          created_at={profile.created_at}
          location={profile.location}
        />
      ) : (
        <Title title="User Not Found" />
      )}
      <h1>Top Repos</h1>
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
      <Footer />
    </>
  );
};

export default App;
