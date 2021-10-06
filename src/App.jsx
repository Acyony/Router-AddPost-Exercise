import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Creat from "./Components/Creat.jsx";
import AllPosts from "./Components/AllPosts.jsx";

import styled from "styled-components";
import { Button } from "react-bootstrap";

const NavBar = styled.nav`
  background-color: ${(props)=>{ return props.color}};
`;

const UlWrap = styled.div`
  display: flex;
`;

const UlNav = styled.div`
  display: grid;
  grid-template-areas: "item item item item";
  list-style: none;
  margin-right: 4rem;
`;
const LiItem = styled.li`
  margin: 2rem;
  list-style: none;
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [color, setColor] = useState("pink");

  function addNewPost(text) {
    setPosts([...posts, text]);
  }

  function changeBackground() {
    if (color === "#A0E7E5") {
      setColor("pink");
    } else {
      setColor("#A0E7E5");
    }
}

  return (
    <Router>
      <NavBar color={color}>
        <UlWrap>
          <UlNav className="navbar-nav d-flex flex-row flex-wrap justify-content-around">
            <LiItem className="nav-item mr-3">
              <Link className="nav-item-style" to="/">Home</Link>
            </LiItem>

            <LiItem className="nav-item mr-3">
              <Link className="nav-item-style"  to="/creat">Creat</Link>
            </LiItem>

            <LiItem className="nav-item mr-3">
              <Link className="nav-item-style"  to="/all-posts">All Posts</Link>
            </LiItem>
          </UlNav>
          <Button variant="outline-secondary" id="button-addon1" onClick={changeBackground}>
            Change Mode
          </Button>
        </UlWrap>
      </NavBar>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route
          path="/creat"
          render={(props) => <Creat {...props} addNewPost={addNewPost} />}
        ></Route>
        <Route
          path="/all-posts"
          render={(props) => <AllPosts {...props} posts={posts} />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
