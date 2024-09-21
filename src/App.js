import React from "react";
import Menu from "./components/Menu";
import SocialNetworkPage from "./components/SocialNetworkPage";
import ProductDetailPage from "./components/ProductDetailPage";
import VideoPage from "./components/VideoPage";
import TaskApp from "./components/TaskApp";
import QuizApp from "./components/QuizApp";
import MatchApp from "./components/MatchApp";
import TourismApp from "./components/TourismApp";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <SocialNetworkPage />
      <ProductDetailPage />
      <VideoPage />
      <TaskApp />
      <QuizApp />
      <MatchApp />
      <TourismApp />
    </div>
  );
};

export default App;
