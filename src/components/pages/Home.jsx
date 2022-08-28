import React, { Component, Fragment } from "react";
import Main from "../Main";

function Home(props) {
  return (
    <Fragment>
      <Main data={props.data} onSearch={props.onSearch} />
    </Fragment>
  );
}

export default Home;
