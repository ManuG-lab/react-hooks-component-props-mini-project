import React from "react";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

//console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name ={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>,
      <ArticleList />
    </div>
  );
}

export default App;
