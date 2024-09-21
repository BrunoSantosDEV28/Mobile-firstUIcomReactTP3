import React from "react";
import Menu from "./Menu";
import Post from "./Post"; // Componente fictício
import Friend from "./Friend"; // Componente fictício
import Suggestion from "./Suggestion"; // Componente fictício
import "./styles.css";

const SocialNetworkPage = () => {
  return (
    <div className="social-network">
      <Menu />
      <div className="content">
        <div className="feed">
          <Post />
        </div>
        <div className="friends">
          <Friend />
        </div>
        <div className="suggestions">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default SocialNetworkPage;
