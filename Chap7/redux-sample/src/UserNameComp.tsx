import React, { useContext, useRef } from "react";
import TestCotext from "./ContextTester";

const UserNameComp = React.memo(() => {
  const renders = useRef(0);
  console.log("renders UserNameComp", renders.current++);

  const username = "dave"; //useContext(TestContext);
  console.log("username UserNameComp", username);

  return <div>{username}</div>;
});

export default UserNameComp;
