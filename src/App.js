import "./styles.css";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import Usercard from "./components/Usercard/Usercard";
import axios from "axios";
export default function App() {
  const [search, setSearch1] = useState("");
  const fetchUrl = `https://api.github.com/users/` + search;
  const [userinfo, setUserinfo] = useState("");

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => {
        setUserinfo(response.data);
        console.log("Fetcheado con exito");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const setSearch = (search) => {
    setSearch1(search);
  };

  return (
    <div className="main">
      <Home />
      <Input setSearch={setSearch} />
      <Usercard
        key={userinfo.id}
        blog={userinfo.blog}
        login={userinfo.login}
        name={userinfo.name}
        pfp={userinfo.avatar_url}
        bio={userinfo.bio}
        repos={userinfo.public_repos}
        following={userinfo.following}
        followers={userinfo.followers}
        company={userinfo.conpany}
        email={userinfo.email}
        created={userinfo.created_at}
        location={userinfo.location}
        followerurl={userinfo.followers_url}
        followingurl={userinfo.following_url}
        type={userinfo.type}
      />
    </div>
  );
}
